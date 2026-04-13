import { Plugin, Notice, TFile, TFolder, normalizePath } from 'obsidian';
import matter from 'gray-matter';
import { CloudflareSyncSettingTab, CloudflareSyncSettings } from './settings';

interface FrontmatterData {
  title?: string;
  slug?: string;
  date?: string;
  summary?: string;
  tags?: string | string[];
  publish?: boolean;
  coverImage?: string;
}

export default class CloudflareSyncPlugin extends Plugin {
  settings: CloudflareSyncSettings;

  async onload() {
    await this.loadSettings();

    // 添加设置面板
    this.addSettingTab(new CloudflareSyncSettingTab(this.app, this));

    // 添加命令
    this.addCommand({
      id: 'sync-to-r2',
      name: 'Sync all published notes to Cloudflare R2',
      callback: () => this.syncToR2(),
    });

    this.addCommand({
      id: 'update-frontmatter',
      name: 'Update frontmatter for current file',
      editorCallback: (editor) => this.updateCurrentFileFrontmatter(editor),
    });

    this.addCommand({
      id: 'sync-current-file',
      name: 'Sync current file to Cloudflare R2',
      editorCallback: () => this.syncCurrentFile(),
    });

    // 监听文件保存事件，自动同步
    this.registerEvent(
      this.app.vault.on('modify', (file) => {
        if (file instanceof TFile && this.settings.autoSync) {
          this.syncFileToR2(file);
        }
      })
    );

    // 监听文件创建事件
    this.registerEvent(
      this.app.vault.on('create', (file) => {
        if (file instanceof TFile && this.settings.autoFrontmatter) {
          this.updateFileFrontmatter(file);
        }
      })
    );

    // 添加 Ribbon 图标
    this.addRibbonIcon('cloud-upload', 'Sync to Cloudflare', () => {
      this.syncToR2();
    });

    console.log('Cloudflare Sync plugin loaded');
  }

  async loadSettings() {
    this.settings = Object.assign(
      {
        r2ApiEndpoint: '',
        r2AccountId: '',
        r2AccessKeyId: '',
        r2SecretAccessKey: '',
        bucketName: '',
        autoSync: true,
        autoFrontmatter: true,
        syncFolder: '/',
      },
      await this.loadData()
    );
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  // 解析文件元数据生成 frontmatter
  async generateFrontmatter(file: TFile): Promise<FrontmatterData> {
    const content = await this.app.vault.read(file);
    const existing = matter(content);
    
    const frontmatter: FrontmatterData = {
      title: existing.data.title || file.basename,
      slug: existing.data.slug || this.generateSlug(file.basename),
      date: existing.data.date || new Date(file.stat.ctime).toISOString(),
      summary: existing.data.summary || this.extractSummary(existing.content),
      tags: existing.data.tags || [],
      publish: existing.data.publish ?? false,
      coverImage: existing.data.coverImage,
    };

    return frontmatter;
  }

  // 从文件名生成 slug
  generateSlug(filename: string): string {
    return filename
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '')
      .substring(0, 100);
  }

  // 提取摘要
  extractSummary(content: string): string {
    const firstParagraph = content.split('\n\n')[0];
    return firstParagraph.replace(/[#*`_\[\]]/g, '').substring(0, 200);
  }

  // 更新文件的 frontmatter
  async updateFileFrontmatter(file: TFile): Promise<void> {
    if (!file.path.endsWith('.md')) return;

    const content = await this.app.vault.read(file);
    
    // 检查是否已有 frontmatter
    if (content.startsWith('---')) {
      return; // 已有 frontmatter，跳过
    }

    const frontmatter = await this.generateFrontmatter(file);
    
    const newContent = matter.stringify(content, frontmatter);
    await this.app.vault.modify(file, newContent);

    new Notice(`Updated frontmatter for ${file.name}`);
  }

  // 更新当前文件的 frontmatter
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

  // 同步单个文件到 R2
  async syncFileToR2(file: TFile): Promise<void> {
    if (!file.path.endsWith('.md')) return;
    if (!file.path.startsWith(this.settings.syncFolder)) return;

    try {
      const content = await this.app.vault.read(file);
      const parsed = matter(content);
      
      // 如果 publish 为 false，仍然同步但不公开
      const isPublished = parsed.data.publish === true;

      // 上传 markdown 文件
      await this.uploadToR2(
        `posts/${file.name}`,
        content,
        'text/markdown'
      );

      // 提取并上传图片
      if (isPublished) {
        await this.extractAndUploadImages(content, file);
      }

      console.log(`Synced ${file.name} to R2`);
    } catch (error) {
      console.error(`Failed to sync ${file.name}:`, error);
      new Notice(`Failed to sync ${file.name}`);
    }
  }

  // 同步所有已发布的文件到 R2
  async syncToR2(): Promise<void> {
    new Notice('Syncing to Cloudflare R2...');

    try {
      const files = this.app.vault.getMarkdownFiles();
      let synced = 0;

      for (const file of files) {
        if (!file.path.startsWith(this.settings.syncFolder)) continue;

        try {
          await this.syncFileToR2(file);
          synced++;
        } catch (error) {
          console.error(`Failed to sync ${file.name}:`, error);
        }
      }

      new Notice(`Successfully synced ${synced} files to Cloudflare R2`);
    } catch (error) {
      console.error('Failed to sync to R2:', error);
      new Notice('Failed to sync to Cloudflare R2');
    }
  }

  // 同步当前文件
  async syncCurrentFile(): Promise<void> {
    const activeFile = this.app.workspace.getActiveFile();
    if (!activeFile) {
      new Notice('No active file');
      return;
    }

    await this.syncFileToR2(activeFile);
    new Notice(`Synced ${activeFile.name} to Cloudflare R2`);
  }

  // 提取并上传图片
  async extractAndUploadImages(content: string, file: TFile): Promise<void> {
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    let match;

    while ((match = imageRegex.exec(content)) !== null) {
      const imagePath = match[1];
      
      // 处理相对路径
      if (imagePath.startsWith('./') || !imagePath.startsWith('http')) {
        const folder = file.parent?.path || '';
        const fullPath = normalizePath(`${folder}/${imagePath}`);
        const imageFile = this.app.vault.getAbstractFileByPath(fullPath);
        
        if (imageFile instanceof TFile) {
          const imageContent = await this.app.vault.readBinary(imageFile);
          await this.uploadToR2(
            `images/${imageFile.name}`,
            imageContent,
            imageFile.extension
          );
        }
      }
    }
  }

  // 上传到 R2 (通过 Cloudflare R2 API)
  async uploadToR2(key: string, content: string | ArrayBuffer, contentType: string): Promise<void> {
    const { r2ApiEndpoint, r2AccountId, r2AccessKeyId, r2SecretAccessKey, bucketName } = this.settings;
    
    if (!r2AccountId || !bucketName) {
      console.warn('R2 credentials not configured');
      return;
    }

    // 使用 S3 兼容 API
    const endpoint = `https://${r2AccountId}.r2.cloudflarestorage.com`;
    const url = `${endpoint}/${bucketName}/${key}`;

    // 生成签名（简化版本，实际应使用 AWS SDK）
    const headers = new Headers();
    headers.set('Content-Type', contentType);
    headers.set('Authorization', `Bearer ${r2AccessKeyId}`);

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers,
        body: content,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Failed to upload ${key}:`, error);
      throw error;
    }
  }

  onunload() {
    console.log('Cloudflare Sync plugin unloaded');
  }
}
