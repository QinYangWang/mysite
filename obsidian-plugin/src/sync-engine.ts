import { TFile, Vault, normalizePath } from 'obsidian';
import type CloudflareSyncPlugin from './main';

// ========== Types ==========

export type SyncFileStatus =
  | 'synced'       // 本地和远程一致
  | 'local-only'   // 仅本地存在
  | 'remote-only'  // 仅远程存在
  | 'local-modified'  // 本地有修改
  | 'remote-modified' // 远程有修改
  | 'conflict'     // 双方都有修改
  | 'error';       // 同步出错

export interface SyncFileState {
  localPath: string;
  remoteKey: string;
  localHash: string | null;
  remoteHash: string | null;
  lastSyncedHash: string | null;
  status: SyncFileStatus;
  error?: string;
}

export interface SyncStats {
  lastSyncTime: number | null;
  totalFiles: number;
  syncedFiles: number;
  pendingUpload: number;
  pendingDownload: number;
  conflicts: number;
  errors: number;
  isSyncing: boolean;
}

export interface RemoteFileMeta {
  key: string;
  size: number;
  uploaded?: string;
  httpEtag?: string;
  contentHash?: string;
  contentType?: string;
}

interface SyncStateStore {
  [localPath: string]: {
    remoteKey: string;
    lastSyncedHash: string;
    lastSyncedTime: number;
  };
}

export type ConflictResolution = 'local' | 'remote' | 'both';
export type ConflictStrategy = 'ask' | 'local-wins' | 'remote-wins';

export interface ConflictInfo {
  localPath: string;
  remoteKey: string;
  localContent: string;
  remoteContent: string;
  localHash: string;
  remoteHash: string;
}

// ========== SyncEngine ==========

export class SyncEngine {
  private plugin: CloudflareSyncPlugin;
  private syncStates: SyncStateStore = {};
  private autoSyncTimer: ReturnType<typeof setInterval> | null = null;
  private debounceTimers: Map<string, ReturnType<typeof setTimeout>> = new Map();
  private _stats: SyncStats = {
    lastSyncTime: null,
    totalFiles: 0,
    syncedFiles: 0,
    pendingUpload: 0,
    pendingDownload: 0,
    conflicts: 0,
    errors: 0,
    isSyncing: false,
  };
  private _conflicts: ConflictInfo[] = [];
  private _isSyncing = false;

  // Callbacks
  onStatsChanged: ((stats: SyncStats) => void) | null = null;
  onConflictsFound: ((conflicts: ConflictInfo[]) => void) | null = null;
  onSyncError: ((error: string) => void) | null = null;
  onSyncComplete: (() => void) | null = null;

  constructor(plugin: CloudflareSyncPlugin) {
    this.plugin = plugin;
  }

  get stats(): SyncStats {
    return { ...this._stats };
  }

  get conflicts(): ConflictInfo[] {
    return [...this._conflicts];
  }

  get isSyncing(): boolean {
    return this._isSyncing;
  }

  // ========== State Persistence ==========

  async loadSyncState(): Promise<void> {
    const data = await this.plugin.loadData();
    this.syncStates = data?._syncStates || {};
  }

  async saveSyncState(): Promise<void> {
    const data = (await this.plugin.loadData()) || {};
    data._syncStates = this.syncStates;
    await this.plugin.saveData(data);
  }

  // ========== Hash Computation ==========

  async computeLocalHash(content: string | ArrayBuffer): Promise<string> {
    // 使用简单的哈希算法（适用于 Obsidian 环境）
    const data =
      typeof content === 'string'
        ? new TextEncoder().encode(content)
        : new Uint8Array(content);

    // 使用 Web Crypto API（所有 Obsidian 平台都支持）
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  // ========== Auto Sync Scheduling ==========

  startAutoSync(): void {
    this.stopAutoSync();

    const intervalMs = (this.plugin.settings.autoSyncInterval || 5) * 60 * 1000;
    console.log(`[SyncEngine] Auto sync started, interval: ${intervalMs / 1000}s`);

    this.autoSyncTimer = setInterval(() => {
      if (!this._isSyncing) {
        console.log('[SyncEngine] Auto sync triggered');
        this.fullSync().catch((err) => {
          console.error('[SyncEngine] Auto sync failed:', err);
        });
      }
    }, intervalMs);
  }

  stopAutoSync(): void {
    if (this.autoSyncTimer) {
      clearInterval(this.autoSyncTimer);
      this.autoSyncTimer = null;
      console.log('[SyncEngine] Auto sync stopped');
    }
  }

  // ========== Debounced File Sync ==========

  scheduleFileSync(file: TFile): void {
    const existingTimer = this.debounceTimers.get(file.path);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    const delayMs = (this.plugin.settings.debounceDelay || 30) * 1000;

    const timer = setTimeout(async () => {
      this.debounceTimers.delete(file.path);
      try {
        await this.syncSingleFile(file);
      } catch (err: any) {
        console.error(`[SyncEngine] Debounced sync failed for ${file.path}:`, err.message);
      }
    }, delayMs);

    this.debounceTimers.set(file.path, timer);
    this.updatePendingStats();
  }

  // ========== Core Sync Logic ==========

  async fullSync(): Promise<void> {
    if (this._isSyncing) {
      console.log('[SyncEngine] Sync already in progress, skipping');
      return;
    }

    this._isSyncing = true;
    this._stats.isSyncing = true;
    this._conflicts = [];
    this.emitStatsChanged();

    try {
      console.log('[SyncEngine] Starting full sync...');

      // 1. 获取本地所有文件及其 hash
      const localFiles = this.plugin.app.vault.getFiles().filter(
        (f) => this.plugin.shouldSyncFile(f.path)
      );

      const localFileMap = new Map<string, { file: TFile; hash: string }>();
      for (const file of localFiles) {
        const remoteKey = this.plugin.getRemoteKey(file);
        const isMarkdown = file.path.endsWith('.md');
        // 对 text 文件 hash 字符串，对二进制文件 hash 原始 ArrayBuffer（与服务端一致）
        const content: string | ArrayBuffer = isMarkdown
          ? await this.plugin.app.vault.read(file)
          : await this.plugin.app.vault.readBinary(file);
        const hash = await this.computeLocalHash(content);
        localFileMap.set(remoteKey, { file, hash });
      }

      // 2. 批量获取远程文件元数据
      const remoteMetas = await this.fetchRemoteMetas('vault/');
      const remoteMetaMap = new Map<string, RemoteFileMeta>();
      for (const meta of remoteMetas) {
        remoteMetaMap.set(meta.key, meta);
      }

      // 3. 三方比对
      const allKeys = new Set([...localFileMap.keys(), ...remoteMetaMap.keys()]);
      const toUpload: { file: TFile; key: string; hash: string }[] = [];
      const toDownload: { key: string }[] = [];
      const conflicts: ConflictInfo[] = [];
      let syncedCount = 0;

      for (const key of allKeys) {
        const local = localFileMap.get(key);
        const remote = remoteMetaMap.get(key);
        const localPath = key.replace(/^vault\//, '');
        const savedState = this.syncStates[localPath];

        const localHash = local?.hash || null;
        const remoteHash = remote?.contentHash || null;
        const lastSyncedHash = savedState?.lastSyncedHash || null;

        if (localHash && !remoteHash) {
          // 本地有、远程没有
          if (lastSyncedHash) {
            // 之前同步过但远程被删了 → 下载删除（或跳过）
            // 这里选择重新上传
            toUpload.push({ file: local!.file, key, hash: localHash });
          } else {
            // 新文件，上传
            toUpload.push({ file: local!.file, key, hash: localHash });
          }
        } else if (!localHash && remoteHash) {
          // 远程有、本地没有
          if (lastSyncedHash) {
            // 之前同步过但本地被删了 → 跳过（或重新下载）
            // 这里选择重新下载
            toDownload.push({ key });
          } else {
            // 新的远程文件，下载
            toDownload.push({ key });
          }
        } else if (localHash && remoteHash) {
          if (localHash === remoteHash) {
            // 已同步
            syncedCount++;
            this.syncStates[localPath] = {
              remoteKey: key,
              lastSyncedHash: localHash,
              lastSyncedTime: Date.now(),
            };
          } else if (!lastSyncedHash) {
            // 首次同步，需要冲突检测（都是新的）
            // 优先使用本地版本
            conflicts.push(await this.buildConflictInfo(local!.file, key, localHash, remoteHash));
          } else if (localHash !== lastSyncedHash && remoteHash === lastSyncedHash) {
            // 仅本地修改
            toUpload.push({ file: local!.file, key, hash: localHash });
          } else if (localHash === lastSyncedHash && remoteHash !== lastSyncedHash) {
            // 仅远程修改
            toDownload.push({ key });
          } else {
            // 双方都修改了 → 冲突！
            conflicts.push(await this.buildConflictInfo(local!.file, key, localHash, remoteHash));
          }
        }
      }

      console.log(
        `[SyncEngine] Analysis: ${toUpload.length} upload, ${toDownload.length} download, ${conflicts.length} conflicts, ${syncedCount} synced`
      );

      // 4. 执行上传
      for (const item of toUpload) {
        try {
          await this.plugin.syncFileToRemote(item.file);
          const localPath = item.key.replace(/^vault\//, '');
          this.syncStates[localPath] = {
            remoteKey: item.key,
            lastSyncedHash: item.hash,
            lastSyncedTime: Date.now(),
          };
          syncedCount++;
        } catch (err: any) {
          console.error(`[SyncEngine] Upload failed for ${item.key}:`, err.message);
          this._stats.errors++;
        }
      }

      // 5. 执行下载
      for (const item of toDownload) {
        try {
          const data = await this.downloadAndSave(item.key);
          if (data) {
            const localPath = item.key.replace(/^vault\//, '');
            this.syncStates[localPath] = {
              remoteKey: item.key,
              lastSyncedHash: data.contentHash || '',
              lastSyncedTime: Date.now(),
            };
            syncedCount++;
          }
        } catch (err: any) {
          console.error(`[SyncEngine] Download failed for ${item.key}:`, err.message);
          this._stats.errors++;
        }
      }

      // 6. 处理冲突
      this._conflicts = conflicts;
      const strategy = this.plugin.settings.conflictStrategy || 'ask';

      if (conflicts.length > 0) {
        if (strategy === 'ask') {
          // 通知 UI 层弹出冲突解决对话框
          this.onConflictsFound?.(conflicts);
        } else {
          // 自动解决
          for (const conflict of conflicts) {
            await this.resolveConflict(
              conflict,
              strategy === 'local-wins' ? 'local' : 'remote'
            );
          }
          this._conflicts = [];
        }
      }

      // 7. 更新统计
      this._stats = {
        lastSyncTime: Date.now(),
        totalFiles: allKeys.size,
        syncedFiles: syncedCount,
        pendingUpload: 0,
        pendingDownload: 0,
        conflicts: this._conflicts.length,
        errors: this._stats.errors,
        isSyncing: false,
      };

      await this.saveSyncState();
      this.onSyncComplete?.();
    } catch (err: any) {
      console.error('[SyncEngine] Full sync failed:', err);
      this._stats.errors++;
      this._stats.isSyncing = false;
      this.onSyncError?.(err.message);
    } finally {
      this._isSyncing = false;
      this._stats.isSyncing = false;
      this.emitStatsChanged();
    }
  }

  async syncSingleFile(file: TFile): Promise<void> {
    if (this._isSyncing) return;

    try {
      const remoteKey = this.plugin.getRemoteKey(file);
      const localPath = file.path;

      // 获取本地 hash（text hash 字符串，binary hash 原始 ArrayBuffer，与服务端一致）
      const isMarkdown = file.path.endsWith('.md');
      const content: string | ArrayBuffer = isMarkdown
        ? await this.plugin.app.vault.read(file)
        : await this.plugin.app.vault.readBinary(file);
      const localHash = await this.computeLocalHash(content);

      // 获取远程 hash
      let remoteHash: string | null = null;
      try {
        const meta = await this.plugin.api<{ success: boolean; data: RemoteFileMeta }>(
          `/api/sync/meta/${remoteKey}`
        );
        remoteHash = meta.data.contentHash || null;
      } catch {
        // 远程文件不存在
      }

      const savedState = this.syncStates[localPath];
      const lastSyncedHash = savedState?.lastSyncedHash || null;

      if (localHash === remoteHash) {
        // 已同步
        this.syncStates[localPath] = {
          remoteKey,
          lastSyncedHash: localHash,
          lastSyncedTime: Date.now(),
        };
      } else if (!remoteHash || (localHash !== lastSyncedHash && remoteHash === lastSyncedHash)) {
        // 本地修改或远程不存在 → 上传
        await this.plugin.syncFileToRemote(file);
        this.syncStates[localPath] = {
          remoteKey,
          lastSyncedHash: localHash,
          lastSyncedTime: Date.now(),
        };
      } else if (localHash === lastSyncedHash && remoteHash !== lastSyncedHash) {
        // 仅远程修改 → 下载
        const data = await this.downloadAndSave(remoteKey);
        if (data) {
          this.syncStates[localPath] = {
            remoteKey,
            lastSyncedHash: data.contentHash || remoteHash,
            lastSyncedTime: Date.now(),
          };
        }
      } else {
        // 冲突
        const conflict = await this.buildConflictInfo(file, remoteKey, localHash, remoteHash);
        this._conflicts.push(conflict);
        this._stats.conflicts = this._conflicts.length;
        this.onConflictsFound?.([conflict]);
      }

      await this.saveSyncState();
      this.updatePendingStats();
    } catch (err: any) {
      console.error(`[SyncEngine] Single file sync failed for ${file.path}:`, err.message);
      this._stats.errors++;
      this.emitStatsChanged();
    }
  }

  // ========== Conflict Resolution ==========

  async resolveConflict(conflict: ConflictInfo, resolution: ConflictResolution): Promise<void> {
    const localPath = conflict.localPath;
    const file = this.plugin.app.vault.getAbstractFileByPath(localPath);

    try {
      switch (resolution) {
        case 'local': {
          // 用本地版本覆盖远程
          if (file instanceof TFile) {
            await this.plugin.syncFileToRemote(file);
            const content = await this.plugin.app.vault.read(file);
            const hash = await this.computeLocalHash(content);
            this.syncStates[localPath] = {
              remoteKey: conflict.remoteKey,
              lastSyncedHash: hash,
              lastSyncedTime: Date.now(),
            };
          }
          break;
        }
        case 'remote': {
          // 用远程版本覆盖本地
          const data = await this.downloadAndSave(conflict.remoteKey);
          if (data) {
            this.syncStates[localPath] = {
              remoteKey: conflict.remoteKey,
              lastSyncedHash: data.contentHash || conflict.remoteHash,
              lastSyncedTime: Date.now(),
            };
          }
          break;
        }
        case 'both': {
          // 保留两个版本，本地创建 .conflict 副本
          const conflictPath = localPath.replace(/\.md$/, `.conflict-${Date.now()}.md`);
          await this.plugin.app.vault.create(conflictPath, conflict.remoteContent);

          // 上传本地版本到远程
          if (file instanceof TFile) {
            await this.plugin.syncFileToRemote(file);
            const content = await this.plugin.app.vault.read(file);
            const hash = await this.computeLocalHash(content);
            this.syncStates[localPath] = {
              remoteKey: conflict.remoteKey,
              lastSyncedHash: hash,
              lastSyncedTime: Date.now(),
            };
          }
          break;
        }
      }

      // 从冲突列表中移除
      this._conflicts = this._conflicts.filter((c) => c.localPath !== localPath);
      this._stats.conflicts = this._conflicts.length;
      await this.saveSyncState();
      this.emitStatsChanged();
    } catch (err: any) {
      console.error(`[SyncEngine] Conflict resolution failed for ${localPath}:`, err.message);
      this._stats.errors++;
      this.emitStatsChanged();
    }
  }

  async resolveAllConflicts(resolution: ConflictResolution): Promise<void> {
    const conflictsToResolve = [...this._conflicts];
    for (const conflict of conflictsToResolve) {
      await this.resolveConflict(conflict, resolution);
    }
  }

  // ========== Helpers ==========

  private async fetchRemoteMetas(prefix: string): Promise<RemoteFileMeta[]> {
    try {
      const res = await this.plugin.api<{
        success: boolean;
        data: { files: RemoteFileMeta[]; count: number };
      }>('/api/sync/batch-meta', {
        method: 'POST',
        body: JSON.stringify({ prefix }),
      });
      return res.data.files;
    } catch (err: any) {
      console.error('[SyncEngine] Failed to fetch remote metas:', err.message);
      return [];
    }
  }

  private async downloadAndSave(
    remoteKey: string
  ): Promise<{ contentHash?: string } | null> {
    try {
      const res = await this.plugin.api<{
        success: boolean;
        data: {
          key: string;
          content: string;
          contentType?: string;
          size: number;
          uploaded?: string;
          contentHash?: string;
          encoding?: string;
        };
      }>(`/api/sync/download/${remoteKey}`);

      const data = res.data;
      const localPath = data.key.replace(/^vault\//, '');
      const isMarkdown = localPath.endsWith('.md');
      const existingFile = this.plugin.app.vault.getAbstractFileByPath(localPath);

      if (existingFile instanceof TFile) {
        if (isMarkdown || data.encoding === 'utf-8') {
          await this.plugin.app.vault.modify(existingFile, data.content);
        } else {
          const buffer = this.plugin.base64ToArrayBuffer(data.content);
          await this.plugin.app.vault.modifyBinary(existingFile, buffer);
        }
        console.log(`[SyncEngine] Updated ${localPath}`);
      } else {
        // 创建文件
        const folderPath = localPath.substring(0, localPath.lastIndexOf('/'));
        if (folderPath) {
          await this.plugin.app.vault.createFolder(folderPath).catch(() => {});
        }
        if (isMarkdown || data.encoding === 'utf-8') {
          await this.plugin.app.vault.create(localPath, data.content);
        } else {
          const buffer = this.plugin.base64ToArrayBuffer(data.content);
          await this.plugin.app.vault.createBinary(localPath, buffer);
        }
        console.log(`[SyncEngine] Created ${localPath}`);
      }

      return { contentHash: data.contentHash };
    } catch (err: any) {
      console.error(`[SyncEngine] Download failed for ${remoteKey}:`, err.message);
      return null;
    }
  }

  private async buildConflictInfo(
    file: TFile,
    remoteKey: string,
    localHash: string,
    remoteHash: string
  ): Promise<ConflictInfo> {
    const localContent = await this.plugin.app.vault.read(file);

    let remoteContent = '';
    try {
      const res = await this.plugin.api<{
        success: boolean;
        data: { content: string };
      }>(`/api/sync/download/${remoteKey}`);
      remoteContent = res.data.content;
    } catch {
      remoteContent = '(Failed to fetch remote content)';
    }

    return {
      localPath: file.path,
      remoteKey,
      localContent,
      remoteContent,
      localHash,
      remoteHash,
    };
  }

  private updatePendingStats(): void {
    this._stats.pendingUpload = this.debounceTimers.size;
    this.emitStatsChanged();
  }

  private emitStatsChanged(): void {
    this.onStatsChanged?.(this.stats);
  }

  // ========== Cleanup ==========

  destroy(): void {
    this.stopAutoSync();
    for (const timer of this.debounceTimers.values()) {
      clearTimeout(timer);
    }
    this.debounceTimers.clear();
  }
}
