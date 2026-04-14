import { Plugin, setIcon, Modal, App } from 'obsidian';
import type { SyncStats, ConflictInfo } from './sync-engine';

export class SyncStatusBar {
  private plugin: Plugin;
  private statusBarEl: HTMLElement;
  private iconEl: HTMLElement;
  private textEl: HTMLElement;
  private _stats: SyncStats | null = null;
  private _conflicts: ConflictInfo[] = [];
  private onShowConflicts: (() => void) | null = null;
  private onTriggerSync: (() => void) | null = null;

  constructor(
    plugin: Plugin,
    opts: {
      onShowConflicts?: () => void;
      onTriggerSync?: () => void;
    }
  ) {
    this.plugin = plugin;
    this.onShowConflicts = opts.onShowConflicts || null;
    this.onTriggerSync = opts.onTriggerSync || null;

    // Create status bar element
    this.statusBarEl = plugin.addStatusBarItem();
    this.statusBarEl.addClass('cf-sync-status');
    this.statusBarEl.setAttribute('aria-label', 'Cloudflare Sync Status');

    this.iconEl = this.statusBarEl.createEl('span', { cls: 'cf-status-icon' });
    this.textEl = this.statusBarEl.createEl('span', { cls: 'cf-status-text' });

    // Click handler — opens detail panel
    this.statusBarEl.addEventListener('click', () => {
      this.showDetailModal();
    });

    // Add styles
    this.addStyles();

    // Initial render
    this.render();
  }

  updateStats(stats: SyncStats): void {
    this._stats = stats;
    this.render();
  }

  updateConflicts(conflicts: ConflictInfo[]): void {
    this._conflicts = conflicts;
    this.render();
  }

  private render(): void {
    const stats = this._stats;

    if (!stats) {
      setIcon(this.iconEl, 'cloud');
      this.textEl.textContent = 'Not synced';
      this.statusBarEl.className = 'cf-sync-status cf-status-idle';
      return;
    }

    if (stats.isSyncing) {
      setIcon(this.iconEl, 'refresh-cw');
      this.textEl.textContent = 'Syncing...';
      this.statusBarEl.className = 'cf-sync-status cf-status-syncing';
      this.iconEl.addClass('cf-spin');
      return;
    }

    this.iconEl.removeClass('cf-spin');

    if (stats.conflicts > 0) {
      setIcon(this.iconEl, 'alert-triangle');
      this.textEl.textContent = `${stats.conflicts} conflict${stats.conflicts > 1 ? 's' : ''}`;
      this.statusBarEl.className = 'cf-sync-status cf-status-conflict';
      return;
    }

    if (stats.errors > 0) {
      setIcon(this.iconEl, 'x-circle');
      this.textEl.textContent = `${stats.errors} error${stats.errors > 1 ? 's' : ''}`;
      this.statusBarEl.className = 'cf-sync-status cf-status-error';
      return;
    }

    // Synced state
    setIcon(this.iconEl, 'check-circle');
    const timeAgo = stats.lastSyncTime ? this.formatTimeAgo(stats.lastSyncTime) : 'never';
    const parts: string[] = [timeAgo];
    if (stats.pendingUpload > 0) parts.push(`${stats.pendingUpload} pending`);
    this.textEl.textContent = parts.join(' · ');
    this.statusBarEl.className = 'cf-sync-status cf-status-synced';
  }

  private formatTimeAgo(timestamp: number): string {
    const diff = Date.now() - timestamp;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (seconds < 60) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  }

  private showDetailModal(): void {
    new SyncDetailModal(this.plugin.app, this._stats, this._conflicts, {
      onShowConflicts: this.onShowConflicts,
      onTriggerSync: this.onTriggerSync,
    }).open();
  }

  private addStyles(): void {
    if (document.querySelector('#cf-status-bar-styles')) return;

    const style = document.createElement('style');
    style.id = 'cf-status-bar-styles';
    style.textContent = `
      .cf-sync-status {
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        padding: 0 6px;
        border-radius: 4px;
        transition: background 0.15s ease;
        font-size: 0.85em;
      }
      .cf-sync-status:hover {
        background: var(--background-modifier-hover);
      }
      .cf-status-icon {
        display: flex;
        align-items: center;
        width: 14px;
        height: 14px;
      }
      .cf-status-icon svg {
        width: 14px;
        height: 14px;
      }
      .cf-status-text {
        white-space: nowrap;
      }
      .cf-status-idle .cf-status-icon { color: var(--text-muted); }
      .cf-status-syncing .cf-status-icon { color: var(--text-accent); }
      .cf-status-synced .cf-status-icon { color: var(--text-success, #4ade80); }
      .cf-status-conflict .cf-status-icon { color: var(--text-warning, #facc15); }
      .cf-status-error .cf-status-icon { color: var(--text-error, #f87171); }
      .cf-spin {
        animation: cf-spin 1s linear infinite;
      }
      @keyframes cf-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }

  destroy(): void {
    this.statusBarEl.remove();
  }
}

// ========== Detail Modal ==========

class SyncDetailModal extends Modal {
  private stats: SyncStats | null;
  private conflicts: ConflictInfo[];
  private onShowConflicts: (() => void) | null;
  private onTriggerSync: (() => void) | null;

  constructor(
    app: App,
    stats: SyncStats | null,
    conflicts: ConflictInfo[],
    opts: {
      onShowConflicts?: (() => void) | null;
      onTriggerSync?: (() => void) | null;
    }
  ) {
    super(app);
    this.stats = stats;
    this.conflicts = conflicts;
    this.onShowConflicts = opts.onShowConflicts || null;
    this.onTriggerSync = opts.onTriggerSync || null;
  }

  onOpen(): void {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass('cf-sync-detail-modal');

    this.addStyles();

    // Header
    const header = contentEl.createEl('div', { cls: 'cf-detail-header' });
    const titleRow = header.createEl('div', { cls: 'cf-detail-title-row' });
    const iconEl = titleRow.createEl('span', { cls: 'cf-detail-icon' });
    setIcon(iconEl, 'cloud');
    titleRow.createEl('h2', { text: 'Sync Status', cls: 'cf-detail-title' });

    const stats = this.stats;

    if (!stats) {
      contentEl.createEl('div', {
        cls: 'cf-detail-empty',
        text: 'No sync data available. Run a sync first.',
      });
    } else {
      // Stats grid
      const grid = contentEl.createEl('div', { cls: 'cf-detail-grid' });

      this.addStatCard(grid, 'clock', 'Last Sync', stats.lastSyncTime ? this.formatTime(stats.lastSyncTime) : 'Never');
      this.addStatCard(grid, 'files', 'Total Files', String(stats.totalFiles));
      this.addStatCard(grid, 'check-circle', 'Synced', String(stats.syncedFiles));
      this.addStatCard(grid, 'upload', 'Pending ↑', String(stats.pendingUpload));
      this.addStatCard(grid, 'download', 'Pending ↓', String(stats.pendingDownload));
      this.addStatCard(grid, 'alert-triangle', 'Conflicts', String(stats.conflicts), stats.conflicts > 0 ? 'cf-stat-warning' : '');
      this.addStatCard(grid, 'x-circle', 'Errors', String(stats.errors), stats.errors > 0 ? 'cf-stat-error' : '');

      // Conflict list
      if (this.conflicts.length > 0) {
        const conflictSection = contentEl.createEl('div', {
          cls: 'cf-detail-section',
        });
        conflictSection.createEl('h3', { text: 'Conflicting Files' });

        const conflictList = conflictSection.createEl('ul', {
          cls: 'cf-conflict-list',
        });
        for (const c of this.conflicts) {
          const li = conflictList.createEl('li', { cls: 'cf-conflict-item' });
          const fileIcon = li.createEl('span', { cls: 'cf-item-icon' });
          setIcon(fileIcon, 'file-warning');
          li.createEl('span', { text: c.localPath, cls: 'cf-item-path' });
        }

        if (this.onShowConflicts) {
          const resolveBtn = conflictSection.createEl('button', {
            cls: 'cf-btn cf-btn-primary',
          });
          const btnIcon = resolveBtn.createEl('span', { cls: 'cf-btn-icon' });
          setIcon(btnIcon, 'alert-triangle');
          resolveBtn.createEl('span', { text: 'Resolve Conflicts' });
          resolveBtn.addEventListener('click', () => {
            this.close();
            this.onShowConflicts?.();
          });
        }
      }
    }

    // Actions
    const actions = contentEl.createEl('div', { cls: 'cf-detail-actions' });

    if (this.onTriggerSync) {
      const syncBtn = actions.createEl('button', { cls: 'cf-btn cf-btn-primary' });
      const syncIcon = syncBtn.createEl('span', { cls: 'cf-btn-icon' });
      setIcon(syncIcon, 'refresh-cw');
      syncBtn.createEl('span', { text: 'Sync Now' });
      syncBtn.addEventListener('click', () => {
        this.close();
        this.onTriggerSync?.();
      });
    }

    const closeBtn = actions.createEl('button', {
      cls: 'cf-btn',
      text: 'Close',
    });
    closeBtn.addEventListener('click', () => this.close());
  }

  onClose(): void {
    this.contentEl.empty();
  }

  private addStatCard(container: HTMLElement, icon: string, label: string, value: string, extraClass?: string): void {
    const card = container.createEl('div', {
      cls: `cf-stat-card ${extraClass || ''}`,
    });
    const iconEl = card.createEl('div', { cls: 'cf-stat-icon' });
    setIcon(iconEl, icon);
    card.createEl('div', { cls: 'cf-stat-value', text: value });
    card.createEl('div', { cls: 'cf-stat-label', text: label });
  }

  private formatTime(timestamp: number): string {
    return new Date(timestamp).toLocaleString();
  }

  private addStyles(): void {
    if (document.querySelector('#cf-detail-modal-styles')) return;

    const style = document.createElement('style');
    style.id = 'cf-detail-modal-styles';
    style.textContent = `
      .cf-sync-detail-modal {
        max-width: 600px;
      }
      .cf-detail-header {
        padding: 16px 20px 12px;
        border-bottom: 1px solid var(--background-modifier-border);
      }
      .cf-detail-title-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .cf-detail-icon {
        color: var(--text-accent);
      }
      .cf-detail-title {
        margin: 0;
        font-size: 1.15em;
      }
      .cf-detail-empty {
        padding: 30px 20px;
        text-align: center;
        color: var(--text-muted);
      }
      .cf-detail-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 10px;
        padding: 16px 20px;
      }
      .cf-stat-card {
        background: var(--background-secondary);
        border-radius: 8px;
        padding: 12px;
        text-align: center;
        border: 1px solid var(--background-modifier-border);
      }
      .cf-stat-icon {
        display: flex;
        justify-content: center;
        margin-bottom: 4px;
        color: var(--text-muted);
      }
      .cf-stat-icon svg {
        width: 16px;
        height: 16px;
      }
      .cf-stat-value {
        font-size: 1.3em;
        font-weight: 700;
        line-height: 1.2;
      }
      .cf-stat-label {
        font-size: 0.75em;
        color: var(--text-muted);
        margin-top: 2px;
      }
      .cf-stat-warning .cf-stat-value {
        color: var(--text-warning, #facc15);
      }
      .cf-stat-warning .cf-stat-icon {
        color: var(--text-warning, #facc15);
      }
      .cf-stat-error .cf-stat-value {
        color: var(--text-error, #f87171);
      }
      .cf-stat-error .cf-stat-icon {
        color: var(--text-error, #f87171);
      }
      .cf-detail-section {
        padding: 12px 20px;
        border-top: 1px solid var(--background-modifier-border);
      }
      .cf-detail-section h3 {
        margin: 0 0 8px;
        font-size: 0.95em;
      }
      .cf-conflict-list {
        list-style: none;
        padding: 0;
        margin: 0 0 10px;
      }
      .cf-conflict-item {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 0;
        font-size: 0.85em;
      }
      .cf-item-icon {
        display: flex;
        color: var(--text-warning, #facc15);
      }
      .cf-item-icon svg {
        width: 14px;
        height: 14px;
      }
      .cf-item-path {
        font-family: var(--font-monospace);
      }
      .cf-detail-actions {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
        padding: 12px 20px;
        border-top: 1px solid var(--background-modifier-border);
      }
      .cf-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: 6px;
        font-size: 0.9em;
        cursor: pointer;
        border: 1px solid var(--background-modifier-border);
        background: var(--background-secondary);
        color: var(--text-normal);
        transition: all 0.15s ease;
      }
      .cf-btn:hover {
        background: var(--background-modifier-hover);
      }
      .cf-btn-primary {
        background: var(--interactive-accent);
        color: var(--text-on-accent);
        border-color: var(--interactive-accent);
      }
      .cf-btn-primary:hover {
        opacity: 0.9;
        background: var(--interactive-accent-hover, var(--interactive-accent));
      }
      .cf-btn-icon {
        display: flex;
        align-items: center;
      }
    `;
    document.head.appendChild(style);
  }
}
