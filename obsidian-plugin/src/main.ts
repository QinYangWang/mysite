import { Plugin, Notice, TFile, TFolder, normalizePath } from 'obsidian';
import matter from 'gray-matter';
import { CloudflareSyncSettingTab, CloudflareSyncSettings } from './settings';
import { SyncEngine, ConflictInfo, ConflictResolution } from './sync-engine';
import { SyncStatusBar } from './status-bar';
import { ConflictModal } from './conflict-modal';

interface FrontmatterData {
  title?: string;
  slug?: string;
  date?: string;
  summary?: string;
  tags?: string | string[];
  publish?: boolean;
  coverImage?: string;
}

interface RemoteFile {
  key: string;
  content: string;
  contentType?: string;
  size: number;
  uploaded?: string;
  httpEtag?: string;
  contentHash?: string;
  encoding?: string;
}

export default class CloudflareSyncPlugin extends Plugin {
  settings: CloudflareSyncSettings;
  syncEngine: SyncEngine;
  statusBar: SyncStatusBar;

  async onload() {
    await this.loadSettings();

    // 初始化同步引擎
    this.syncEngine = new SyncEngine(this);
    await this.syncEngine.loadSyncState();

    // 初始化状态栏
    this.statusBar = new SyncStatusBar(this, {
      onShowConflicts: () => this.showConflictModal(),
      onTriggerSync: () => this.triggerFullSync(),
    });

    // 绑定同步引擎回调
    this.syncEngine.onStatsChanged = (stats) => {
      this.statusBar.updateStats(stats);
    };

    this.syncEngine.onConflictsFound = (conflicts) => {
      this.statusBar.updateConflicts(conflicts);
      new Notice(`⚠️ ${conflicts.length} sync conflict(s) found. Click status bar to resolve.`);
      this.showConflictModal();
    };

    this.syncEngine.onSyncComplete = () => {
      const stats = this.syncEngine.stats;
      if (stats.conflicts === 0) {
        new Notice(`✅ Sync complete: ${stats.syncedFiles} files synced`);
      }
    };

    this.syncEngine.onSyncError = (error) => {
      new Notice(`❌ Sync error: ${error}`);
    };

    // 添加设置面板
    this.addSettingTab(new CloudflareSyncSettingTab(this.app, this));

    // 添加命令
    this.addCommand({
      id: 'sync-full',
      name: 'Full sync with Cloudflare',
      callback: () => this.triggerFullSync(),
    });

    this.addCommand({
      id: 'sync-to-remote',
      name: 'Sync entire vault to Cloudflare (upload only)',
      callback: () => this.syncToRemote(),
    });

    this.addCommand({
      id: 'sync-from-remote',
      name: 'Download entire vault from Cloudflare',
      callback: () => this.syncFromRemote(),
    });

    this.addCommand({
      id: 'update-frontmatter',
      name: 'Update frontmatter for current file',
      editorCallback: (editor) => this.updateCurrentFileFrontmatter(editor),
    });

    this.addCommand({
      id: 'generate-all-frontmatter',
      name: 'Generate frontmatter for all markdown files',
      callback: () => this.generateAllFrontmatter(),
    });

    this.addCommand({
      id: 'sync-current-file',
      name: 'Sync current file to Cloudflare',
      editorCallback: () => this.syncCurrentFile(),
    });

    this.addCommand({
      id: 'resolve-conflicts',
      name: 'Resolve sync conflicts',
      callback: () => this.showConflictModal(),
    });

    this.addCommand({
      id: 'show-sync-status',
      name: 'Show sync status',
      callback: () => {
        // 触发状态栏点击逻辑
        this.statusBar['showDetailModal']();
      },
    });

    // 监听文件保存事件，使用 debounced 同步
    this.registerEvent(
      this.app.vault.on('modify', (file) => {
        if (file instanceof TFile && this.settings.autoSync) {
          this.syncEngine.scheduleFileSync(file);
        }
      })
    );

    // 监听文件创建事件
    this.registerEvent(
      this.app.vault.on('create', (file) => {
        if (file instanceof TFile && this.settings.autoFrontmatter) {
          if (file.path.endsWith('.md')) {
            this.updateFileFrontmatter(file);
          }
        }
      })
    );

    // 添加 Ribbon 图标
    this.addRibbonIcon('cloud-upload', 'Full Sync with Cloudflare', () => {
      this.triggerFullSync();
    });

    // 启动自动同步
    if (this.settings.autoSync) {
      this.syncEngine.startAutoSync();
    }

    // 启动时同步
    if (this.settings.syncOnStartup) {
      // 延迟 3 秒等 Obsidian 完全加载
      setTimeout(() => {
        this.triggerFullSync();
      }, 3000);
    }

    // 启动时扫描所有 md 文件，自动补全缺失的 frontmatter
    if (this.settings.autoFrontmatter) {
      // 延迟 2 秒等待 vault 完全加载
      setTimeout(() => {
        this.scanAndGenerateFrontmatter();
      }, 2000);
    }

    console.log('Cloudflare Sync plugin loaded');
  }

  async loadSettings() {
    this.settings = Object.assign(
      {
        serverUrl: '',
        apiToken: '',
        autoSync: true,
        autoFrontmatter: true,
        syncAllFiles: true,
        excludeFolders: ['_templates', '.trash'],
        excludeFiles: [],
        autoSyncInterval: 5,
        conflictStrategy: 'ask' as const,
        syncOnStartup: true,
        debounceDelay: 30,
      },
      await this.loadData()
    );
  }

  async saveSettings() {
    await this.saveData(this.settings);

    // 重启自动同步（间隔可能改变）
    if (this.syncEngine) {
      if (this.settings.autoSync) {
        this.syncEngine.startAutoSync();
      } else {
        this.syncEngine.stopAutoSync();
      }
    }
  }

  // ========== Sync Triggers ==========

  async triggerFullSync(): Promise<void> {
    if (!this.settings.serverUrl || !this.settings.apiToken) {
      new Notice('Please configure Server URL and API Token in settings');
      return;
    }

    // Test connection first
    try {
      await this.api('/api/blog/site');
    } catch (error: any) {
      new Notice(`Connection failed: ${error.message}`);
      return;
    }

    new Notice('Starting full sync...');
    await this.syncEngine.fullSync();
  }

  showConflictModal(): void {
    const conflicts = this.syncEngine.conflicts;
    if (conflicts.length === 0) {
      new Notice('No conflicts to resolve');
      return;
    }

    new ConflictModal(
      this.app,
      conflicts,
      async (conflict, resolution) => {
        await this.syncEngine.resolveConflict(conflict, resolution);
        this.statusBar.updateConflicts(this.syncEngine.conflicts);
      },
      async (resolution) => {
        await this.syncEngine.resolveAllConflicts(resolution);
        this.statusBar.updateConflicts(this.syncEngine.conflicts);
      }
    ).open();
  }

  // ========== API 调用 ==========

  async api<T = any>(endpoint: string, options?: RequestInit): Promise<T> {
    const { serverUrl, apiToken } = this.settings;

    if (!serverUrl || !apiToken) {
      throw new Error(`Server URL (${serverUrl || 'empty'}) and API token (${apiToken ? 'set' : 'empty'}) are required`);
    }

    const url = serverUrl.replace(/\/$/, '') + endpoint;
    console.log(`[API] ${options?.method || 'GET'} ${url}`);

    const headers = new Headers(options?.headers);
    headers.set('Authorization', `Bearer ${apiToken}`);
    if (options?.method && options.method !== 'GET') {
      headers.set('Content-Type', 'application/json');
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    console.log(`[API] Response: ${response.status} ${response.statusText}`);

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: response.statusText }));
      throw new Error(`API error ${response.status}: ${error.error || response.statusText}`);
    }

    return response.json();
  }

  // ========== 上传/下载 ==========

  async uploadFile(key: string, content: string, contentType = 'text/markdown', encoding: 'utf-8' | 'base64' = 'utf-8'): Promise<void> {
    await this.api('/api/sync/upload', {
      method: 'POST',
      body: JSON.stringify({ key, content, contentType, encoding }),
    });
  }

  async downloadFile(key: string): Promise<RemoteFile> {
    const res = await this.api<{ success: boolean; data: RemoteFile }>(`/api/sync/download/${key}`);
    return res.data;
  }

  async listFiles(prefix = ''): Promise<{ key: string; size: number; uploaded?: string; httpEtag?: string }[]> {
    const res = await this.api<{ success: boolean; data: { files: any[] } }>(
      `/api/sync/list?prefix=${encodeURIComponent(prefix)}`
    );
    return res.data.files;
  }

  async deleteFile(key: string): Promise<void> {
    await this.api(`/api/sync/delete/${key}`, { method: 'DELETE' });
  }

  // ========== Frontmatter 处理 ==========

  async generateFrontmatter(file: TFile): Promise<FrontmatterData> {
    const content = await this.app.vault.read(file);
    const existing = matter(content);

    return {
      title: existing.data.title || file.basename,
      slug: existing.data.slug || this.generateSlug(file.basename),
      date: existing.data.date || new Date(file.stat.ctime).toISOString(),
      summary: existing.data.summary || this.extractSummary(existing.content),
      tags: existing.data.tags || [],
      publish: existing.data.publish ?? false,
      coverImage: existing.data.coverImage,
    };
  }

  generateSlug(filename: string): string {
    return filename
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '')
      .substring(0, 100);
  }

  extractSummary(content: string): string {
    const firstParagraph = content.split('\n\n')[0];
    return firstParagraph.replace(/[#*`_\[\]]/g, '').substring(0, 200);
  }

  async updateFileFrontmatter(file: TFile, silent = false): Promise<boolean> {
    if (!file.path.endsWith('.md')) return false;

    const content = await this.app.vault.read(file);
    // 如果已有 frontmatter，跳过（仅为缺失的文件生成）
    if (content.startsWith('---')) return false;

    const frontmatter = await this.generateFrontmatter(file);
    const newContent = matter.stringify(content, frontmatter);
    await this.app.vault.modify(file, newContent);

    if (!silent) {
      new Notice(`Updated frontmatter for ${file.name}`);
    }
    return true;
  }

  async updateCurrentFileFrontmatter(editor: any): Promise<void> {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) {
      new Notice('No active file');
      return;
    }

    const frontmatter = await this.generateFrontmatter(activeFile);
    const content = editor.getValue();
    const newContent = matter.stringify(content, frontmatter);

    editor.setValue(newContent);
    new Notice('Updated frontmatter');
  }

  /**
   * 扫描所有 md 文件，确保每个文件都有完整的 frontmatter
   * 统一处理三种情况：
   * 1. 完全没有 frontmatter → 生成全部字段
   * 2. 有部分 frontmatter（缺少某些字段）→ 补全缺失字段
   * 3. 已有完整 frontmatter → 跳过
   */
  async scanAndGenerateFrontmatter(): Promise<void> {
    const files = this.app.vault.getFiles().filter(
      (f) => f.path.endsWith('.md') && this.shouldSyncFile(f.path)
    );

    let generated = 0;
    const requiredFields = ['title', 'slug', 'date', 'summary', 'tags', 'publish'] as const;

    console.log(`[Frontmatter] Scanning ${files.length} markdown files...`);

    for (const file of files) {
      try {
        const content = await this.app.vault.read(file);

        // gray-matter 统一解析：无论有没有 --- 都能正确解析
        // 没有 frontmatter → data={}, content=原始内容
        // 有 frontmatter → data={已有字段}, content=正文
        const parsed = matter(content);

        // 生成默认值
        const defaults: Record<string, any> = {
          title: file.basename,
          slug: this.generateSlug(file.basename),
          date: new Date(file.stat.ctime).toISOString(),
          summary: this.extractSummary(parsed.content),
          tags: [],
          publish: false,
        };

        // 检查哪些必要字段缺失
        let changed = false;
        for (const field of requiredFields) {
          if (parsed.data[field] === undefined || parsed.data[field] === null) {
            parsed.data[field] = defaults[field];
            changed = true;
          }
        }

        if (changed) {
          // 用 gray-matter 重新序列化（自动添加 --- 分隔符）
          const newContent = matter.stringify(parsed.content, parsed.data);
          await this.app.vault.modify(file, newContent);
          generated++;
          console.log(`[Frontmatter] ✅ ${file.path} — added missing fields`);
        }
      } catch (err: any) {
        console.error(`[Frontmatter] ❌ Failed for ${file.path}:`, err.message);
      }
    }

    if (generated > 0) {
      new Notice(`✅ Generated/updated frontmatter for ${generated} file(s)`);
    }
    console.log(`[Frontmatter] Done: ${generated}/${files.length} files updated`);
  }

  /**
   * 为所有 md 文件强制生成/更新 frontmatter（包括已有 frontmatter 的文件）
   */
  async generateAllFrontmatter(): Promise<void> {
    const files = this.app.vault.getFiles().filter(
      (f) => f.path.endsWith('.md') && this.shouldSyncFile(f.path)
    );

    let updated = 0;
    new Notice(`Generating frontmatter for ${files.length} files...`);

    for (const file of files) {
      try {
        const content = await this.app.vault.read(file);
        const frontmatter = await this.generateFrontmatter(file);
        const newContent = matter.stringify(
          matter(content).content, // 去掉旧 frontmatter，用新的替换
          frontmatter
        );

        // 仅在内容实际变化时写入
        if (content !== newContent) {
          await this.app.vault.modify(file, newContent);
          updated++;
        }
      } catch (err: any) {
        console.error(`[Frontmatter] Failed for ${file.path}:`, err.message);
      }
    }

    new Notice(`✅ Updated frontmatter for ${updated}/${files.length} files`);
  }

  // ========== 同步逻辑 ==========

  shouldSyncFile(filePath: string): boolean {
    // 排除特定文件夹
    for (const exclude of this.settings.excludeFolders || []) {
      if (filePath.startsWith(exclude + '/') || filePath.startsWith(exclude)) {
        return false;
      }
    }

    // 排除 .conflict 文件
    if (filePath.includes('.conflict-')) {
      return false;
    }

    return true;
  }

  getRemoteKey(file: TFile): string {
    return file.path;
  }

  getMimeType(ext: string): string {
    const map: Record<string, string> = {
      jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png',
      gif: 'image/gif', webp: 'image/webp', svg: 'image/svg+xml',
      avif: 'image/avif', pdf: 'application/pdf',
      mp3: 'audio/mpeg', mp4: 'video/mp4',
      json: 'application/json', yaml: 'text/yaml', yml: 'text/yaml',
      css: 'text/css', js: 'text/javascript', ts: 'text/typescript',
    };
    return map[ext.toLowerCase()] || 'application/octet-stream';
  }

  async syncFileToRemote(file: TFile): Promise<void> {
    if (!this.shouldSyncFile(file.path)) return;

    try {
      const isMarkdown = file.path.endsWith('.md');
      console.log(`[Sync] Reading file: ${file.path} (${isMarkdown ? 'markdown' : file.extension})`);

      let content: string;
      let contentType: string;
      let encoding: 'utf-8' | 'base64' = 'utf-8';

      if (isMarkdown) {
        content = await this.app.vault.read(file);
        contentType = 'text/markdown';
      } else {
        // 二进制文件用 base64 编码
        const buffer = await this.app.vault.readBinary(file);
        content = this.arrayBufferToBase64(buffer);
        encoding = 'base64';
        contentType = this.getMimeType(file.extension);
      }

      console.log(`[Sync] File size: ${file.stat.size} bytes, encoding: ${encoding}`);

      // 如果是 markdown，检查是否已发布以决定是否上传图片
      const isPublished = isMarkdown
        ? (() => {
            const parsed = matter(content);
            return parsed.data.publish === true;
          })()
        : false;

      // 上传文件
      const remoteKey = this.getRemoteKey(file);
      console.log(`[Sync] Uploading to: ${remoteKey}`);
      await this.uploadFile(remoteKey, content, contentType, encoding);
      console.log(`[Sync] ✅ Uploaded ${file.name}`);

      // 如果 markdown 已发布，提取并上传图片
      if (isMarkdown && isPublished) {
        console.log(`[Sync] Extracting images from ${file.name}`);
        await this.extractAndUploadImages(content, file);
      }
    } catch (error: any) {
      console.error(`[Sync] ❌ Failed to sync ${file.name}:`, error.message);
      throw error;
    }
  }

  async syncFileFromRemote(remoteFile: { key: string }): Promise<void> {
    try {
      const data = await this.downloadFile(remoteFile.key);
      const localPath = data.key;

      const existingFile = this.app.vault.getAbstractFileByPath(localPath);
      const isMarkdown = localPath.endsWith('.md');

      if (existingFile instanceof TFile) {
        if (isMarkdown || data.encoding === 'utf-8') {
          // 文本文件直接比较
          const localContent = await this.app.vault.read(existingFile);
          if (localContent !== data.content) {
            await this.app.vault.modify(existingFile, data.content);
            console.log(`[Download] Updated ${localPath}`);
          }
        } else {
          // 二进制文件比较大小
          if (existingFile.stat.size !== data.size) {
            const buffer = this.base64ToArrayBuffer(data.content);
            await this.app.vault.modifyBinary(existingFile, buffer);
            console.log(`[Download] Updated ${localPath}`);
          }
        }
      } else {
        // 文件不存在，创建
        const folderPath = localPath.substring(0, localPath.lastIndexOf('/'));
        if (folderPath) {
          await this.app.vault.createFolder(folderPath).catch(() => {});
        }

        if (isMarkdown || data.encoding === 'utf-8') {
          await this.app.vault.create(localPath, data.content);
        } else {
          const buffer = this.base64ToArrayBuffer(data.content);
          await this.app.vault.createBinary(localPath, buffer);
        }
        console.log(`[Download] Created ${localPath}`);
      }
    } catch (error: any) {
      console.error(`[Download] Failed to sync ${remoteFile.key}:`, error.message);
    }
  }

  base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  }

  async syncToRemote(): Promise<void> {
    new Notice('Syncing vault to Cloudflare...');

    try {
      const files = this.app.vault.getFiles();
      let synced = 0;
      let skipped = 0;

      console.log(`[Sync] Found ${files.length} files in vault`);

      // Test API connection first
      try {
        await this.api('/api/blog/site');
        console.log('[Sync] ✅ API connection test passed');
      } catch (error: any) {
        console.error('[Sync] ❌ API connection test failed:', error.message);
        new Notice(`Connection failed: ${error.message}`);
        return;
      }

      for (const file of files) {
        if (!this.shouldSyncFile(file.path)) {
          skipped++;
          continue;
        }

        try {
          await this.syncFileToRemote(file);
          synced++;
        } catch (error: any) {
          console.error(`[Sync] ❌ Failed to sync ${file.path}:`, error.message);
        }
      }

      console.log(`[Sync] Done: ${synced} synced, ${skipped} skipped`);
      new Notice(`Synced ${synced}/${files.length} files (${skipped} skipped)`);
    } catch (error: any) {
      console.error('[Sync] Failed to sync:', error);
      new Notice(`Sync failed: ${error.message}`);
    }
  }

  async syncFromRemote(): Promise<void> {
    new Notice('Downloading from Cloudflare...');

    try {
      console.log('[Download] Listing remote files...');
      const remoteFiles = await this.listFiles('');
      console.log(`[Download] Found ${remoteFiles.length} remote files`);

      let synced = 0;

      for (const remoteFile of remoteFiles) {
        console.log(`[Download] Processing: ${remoteFile.key}`);
        try {
          await this.syncFileFromRemote(remoteFile);
          synced++;
        } catch (error: any) {
          console.error(`[Download] Failed to sync ${remoteFile.key}:`, error.message);
        }
      }

      console.log(`[Download] Done: ${synced} files processed`);
      new Notice(`Downloaded ${synced} files from Cloudflare`);
    } catch (error: any) {
      console.error('[Download] Failed:', error);
      new Notice(`Download failed: ${error.message}`);
    }
  }

  async syncCurrentFile(): Promise<void> {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) {
      new Notice('No active file');
      return;
    }

    await this.syncFileToRemote(activeFile);
    new Notice(`Synced ${activeFile.name} to Cloudflare`);
  }

  // ========== 图片处理 ==========

  async extractAndUploadImages(content: string, file: TFile): Promise<void> {
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    let match;

    while ((match = imageRegex.exec(content)) !== null) {
      const imagePath = match[1];

      if (imagePath.startsWith('./') || !imagePath.startsWith('http')) {
        const folder = file.parent?.path || '';
        const fullPath = normalizePath(`${folder}/${imagePath}`);
        const imageFile = this.app.vault.getAbstractFileByPath(fullPath);

        if (imageFile instanceof TFile) {
          const imageBuffer = await this.app.vault.readBinary(imageFile);
          const base64 = this.arrayBufferToBase64(imageBuffer);
          const ext = imageFile.extension.toLowerCase();

          let contentType = 'application/octet-stream';
          if (['jpg', 'jpeg'].includes(ext)) contentType = `image/jpeg`;
          else if (ext === 'png') contentType = 'image/png';
          else if (ext === 'gif') contentType = 'image/gif';
          else if (ext === 'webp') contentType = 'image/webp';
          else if (ext === 'svg') contentType = 'image/svg+xml';

          await this.api('/api/sync/upload', {
            method: 'POST',
            body: JSON.stringify({
              key: `images/${imageFile.name}`,
              content: base64,
              contentType,
              encoding: 'base64',
            }),
          });
        }
      }
    }
  }

  arrayBufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  onunload() {
    console.log('Cloudflare Sync plugin unloading...');
    this.syncEngine?.destroy();
    this.statusBar?.destroy();
    console.log('Cloudflare Sync plugin unloaded');
  }
}
