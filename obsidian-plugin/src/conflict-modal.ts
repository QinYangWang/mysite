import { Modal, App, TFile, setIcon } from 'obsidian';
import type { ConflictInfo, ConflictResolution } from './sync-engine';

export class ConflictModal extends Modal {
  private conflicts: ConflictInfo[];
  private currentIndex: number = 0;
  private onResolve: (conflict: ConflictInfo, resolution: ConflictResolution) => Promise<void>;
  private onResolveAll: (resolution: ConflictResolution) => Promise<void>;

  constructor(
    app: App,
    conflicts: ConflictInfo[],
    onResolve: (conflict: ConflictInfo, resolution: ConflictResolution) => Promise<void>,
    onResolveAll: (resolution: ConflictResolution) => Promise<void>
  ) {
    super(app);
    this.conflicts = conflicts;
    this.onResolve = onResolve;
    this.onResolveAll = onResolveAll;
  }

  onOpen(): void {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.addClass('cf-sync-conflict-modal');

    this.renderCurrentConflict();
  }

  onClose(): void {
    this.contentEl.empty();
  }

  private renderCurrentConflict(): void {
    const { contentEl } = this;
    contentEl.empty();

    if (this.conflicts.length === 0) {
      contentEl.createEl('div', {
        cls: 'cf-conflict-empty',
        text: '✅ All conflicts resolved!',
      });
      setTimeout(() => this.close(), 1500);
      return;
    }

    const conflict = this.conflicts[this.currentIndex];
    if (!conflict) {
      this.close();
      return;
    }

    // ===== 样式 =====
    this.addStyles();

    // ===== Header =====
    const header = contentEl.createEl('div', { cls: 'cf-conflict-header' });

    const titleRow = header.createEl('div', { cls: 'cf-conflict-title-row' });
    const iconEl = titleRow.createEl('span', { cls: 'cf-conflict-icon' });
    setIcon(iconEl, 'alert-triangle');
    titleRow.createEl('h2', {
      text: 'Sync Conflict',
      cls: 'cf-conflict-title',
    });

    header.createEl('div', {
      cls: 'cf-conflict-subtitle',
      text: `${this.currentIndex + 1} of ${this.conflicts.length} conflicts`,
    });

    header.createEl('div', {
      cls: 'cf-conflict-filepath',
      text: conflict.localPath,
    });

    // ===== Diff View =====
    const diffContainer = contentEl.createEl('div', { cls: 'cf-conflict-diff' });

    // Local side
    const localPanel = diffContainer.createEl('div', { cls: 'cf-conflict-panel cf-local' });
    const localHeader = localPanel.createEl('div', { cls: 'cf-panel-header' });
    const localIconEl = localHeader.createEl('span', { cls: 'cf-panel-icon' });
    setIcon(localIconEl, 'monitor');
    localHeader.createEl('span', { text: 'Local Version' });
    localHeader.createEl('span', { cls: 'cf-hash', text: conflict.localHash.substring(0, 8) });

    const localContent = localPanel.createEl('div', { cls: 'cf-panel-content' });
    this.renderDiffContent(localContent, conflict.localContent, conflict.remoteContent, 'local');

    // Remote side
    const remotePanel = diffContainer.createEl('div', { cls: 'cf-conflict-panel cf-remote' });
    const remoteHeader = remotePanel.createEl('div', { cls: 'cf-panel-header' });
    const remoteIconEl = remoteHeader.createEl('span', { cls: 'cf-panel-icon' });
    setIcon(remoteIconEl, 'cloud');
    remoteHeader.createEl('span', { text: 'Remote Version' });
    remoteHeader.createEl('span', { cls: 'cf-hash', text: conflict.remoteHash.substring(0, 8) });

    const remoteContent = remotePanel.createEl('div', { cls: 'cf-panel-content' });
    this.renderDiffContent(remoteContent, conflict.remoteContent, conflict.localContent, 'remote');

    // ===== Actions =====
    const actions = contentEl.createEl('div', { cls: 'cf-conflict-actions' });

    // Individual actions
    const individualActions = actions.createEl('div', {
      cls: 'cf-individual-actions',
    });

    const keepLocalBtn = individualActions.createEl('button', {
      cls: 'cf-btn cf-btn-local',
    });
    const localBtnIcon = keepLocalBtn.createEl('span', { cls: 'cf-btn-icon' });
    setIcon(localBtnIcon, 'monitor');
    keepLocalBtn.createEl('span', { text: 'Keep Local' });
    keepLocalBtn.addEventListener('click', () => this.handleResolve(conflict, 'local'));

    const keepRemoteBtn = individualActions.createEl('button', {
      cls: 'cf-btn cf-btn-remote',
    });
    const remoteBtnIcon = keepRemoteBtn.createEl('span', { cls: 'cf-btn-icon' });
    setIcon(remoteBtnIcon, 'cloud');
    keepRemoteBtn.createEl('span', { text: 'Keep Remote' });
    keepRemoteBtn.addEventListener('click', () => this.handleResolve(conflict, 'remote'));

    const keepBothBtn = individualActions.createEl('button', {
      cls: 'cf-btn cf-btn-both',
    });
    const bothBtnIcon = keepBothBtn.createEl('span', { cls: 'cf-btn-icon' });
    setIcon(bothBtnIcon, 'copy');
    keepBothBtn.createEl('span', { text: 'Keep Both' });
    keepBothBtn.addEventListener('click', () => this.handleResolve(conflict, 'both'));

    // Batch actions (if multiple conflicts)
    if (this.conflicts.length > 1) {
      const batchActions = actions.createEl('div', { cls: 'cf-batch-actions' });
      batchActions.createEl('span', {
        cls: 'cf-batch-label',
        text: 'Apply to all:',
      });

      const allLocalBtn = batchActions.createEl('button', {
        cls: 'cf-btn cf-btn-small cf-btn-local',
        text: 'All Local',
      });
      allLocalBtn.addEventListener('click', () => this.handleResolveAll('local'));

      const allRemoteBtn = batchActions.createEl('button', {
        cls: 'cf-btn cf-btn-small cf-btn-remote',
        text: 'All Remote',
      });
      allRemoteBtn.addEventListener('click', () => this.handleResolveAll('remote'));
    }

    // Navigation
    if (this.conflicts.length > 1) {
      const nav = actions.createEl('div', { cls: 'cf-conflict-nav' });

      const prevBtn = nav.createEl('button', { cls: 'cf-btn cf-btn-nav' });
      setIcon(prevBtn, 'chevron-left');
      prevBtn.disabled = this.currentIndex === 0;
      prevBtn.addEventListener('click', () => {
        if (this.currentIndex > 0) {
          this.currentIndex--;
          this.renderCurrentConflict();
        }
      });

      nav.createEl('span', {
        text: `${this.currentIndex + 1} / ${this.conflicts.length}`,
        cls: 'cf-nav-text',
      });

      const nextBtn = nav.createEl('button', { cls: 'cf-btn cf-btn-nav' });
      setIcon(nextBtn, 'chevron-right');
      nextBtn.disabled = this.currentIndex >= this.conflicts.length - 1;
      nextBtn.addEventListener('click', () => {
        if (this.currentIndex < this.conflicts.length - 1) {
          this.currentIndex++;
          this.renderCurrentConflict();
        }
      });
    }
  }

  private renderDiffContent(
    container: HTMLElement,
    content: string,
    otherContent: string,
    side: 'local' | 'remote'
  ): void {
    const lines = content.split('\n');
    const otherLines = otherContent.split('\n');

    const pre = container.createEl('pre', { cls: 'cf-diff-pre' });

    for (let i = 0; i < lines.length; i++) {
      const lineEl = pre.createEl('div', { cls: 'cf-diff-line' });

      // Line number
      lineEl.createEl('span', {
        cls: 'cf-line-num',
        text: String(i + 1),
      });

      // Determine if line differs
      const isDiff = i >= otherLines.length || lines[i] !== otherLines[i];

      const lineContent = lineEl.createEl('span', {
        cls: `cf-line-content ${isDiff ? (side === 'local' ? 'cf-diff-local' : 'cf-diff-remote') : ''}`,
      });
      lineContent.textContent = lines[i] || ' ';
    }
  }

  private async handleResolve(conflict: ConflictInfo, resolution: ConflictResolution): Promise<void> {
    const buttons = this.contentEl.querySelectorAll('button');
    buttons.forEach((btn) => (btn.disabled = true));

    try {
      await this.onResolve(conflict, resolution);
      this.conflicts = this.conflicts.filter((c) => c.localPath !== conflict.localPath);
      if (this.currentIndex >= this.conflicts.length) {
        this.currentIndex = Math.max(0, this.conflicts.length - 1);
      }
      this.renderCurrentConflict();
    } catch (err: any) {
      console.error('Conflict resolution failed:', err);
      buttons.forEach((btn) => (btn.disabled = false));
    }
  }

  private async handleResolveAll(resolution: ConflictResolution): Promise<void> {
    const buttons = this.contentEl.querySelectorAll('button');
    buttons.forEach((btn) => (btn.disabled = true));

    try {
      await this.onResolveAll(resolution);
      this.conflicts = [];
      this.renderCurrentConflict();
    } catch (err: any) {
      console.error('Batch conflict resolution failed:', err);
      buttons.forEach((btn) => (btn.disabled = false));
    }
  }

  private addStyles(): void {
    // Only add once
    if (document.querySelector('#cf-conflict-styles')) return;

    const style = document.createElement('style');
    style.id = 'cf-conflict-styles';
    style.textContent = `
      .cf-sync-conflict-modal {
        max-width: 900px;
        width: 90vw;
      }
      .cf-sync-conflict-modal .modal-content {
        padding: 0;
      }
      .cf-conflict-header {
        padding: 16px 20px;
        border-bottom: 1px solid var(--background-modifier-border);
      }
      .cf-conflict-title-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .cf-conflict-icon {
        color: var(--text-warning);
      }
      .cf-conflict-title {
        margin: 0;
        font-size: 1.2em;
      }
      .cf-conflict-subtitle {
        color: var(--text-muted);
        font-size: 0.85em;
        margin-top: 4px;
      }
      .cf-conflict-filepath {
        font-family: var(--font-monospace);
        font-size: 0.85em;
        color: var(--text-accent);
        margin-top: 4px;
        padding: 4px 8px;
        background: var(--background-secondary);
        border-radius: 4px;
        display: inline-block;
      }
      .cf-conflict-diff {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        background: var(--background-modifier-border);
        max-height: 400px;
        overflow: hidden;
      }
      .cf-conflict-panel {
        background: var(--background-primary);
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .cf-panel-header {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 12px;
        font-weight: 600;
        font-size: 0.85em;
        border-bottom: 1px solid var(--background-modifier-border);
        flex-shrink: 0;
      }
      .cf-local .cf-panel-header {
        background: rgba(var(--color-blue-rgb, 0, 120, 215), 0.1);
      }
      .cf-remote .cf-panel-header {
        background: rgba(var(--color-green-rgb, 0, 180, 80), 0.1);
      }
      .cf-panel-icon {
        display: flex;
        align-items: center;
      }
      .cf-hash {
        margin-left: auto;
        font-family: var(--font-monospace);
        font-size: 0.8em;
        color: var(--text-muted);
        background: var(--background-secondary);
        padding: 1px 6px;
        border-radius: 3px;
      }
      .cf-panel-content {
        overflow: auto;
        flex: 1;
        max-height: 350px;
      }
      .cf-diff-pre {
        margin: 0;
        padding: 0;
        font-family: var(--font-monospace);
        font-size: 0.8em;
        line-height: 1.5;
      }
      .cf-diff-line {
        display: flex;
        white-space: pre;
      }
      .cf-line-num {
        flex-shrink: 0;
        width: 36px;
        text-align: right;
        padding-right: 8px;
        color: var(--text-faint);
        user-select: none;
        border-right: 1px solid var(--background-modifier-border);
        margin-right: 8px;
      }
      .cf-line-content {
        flex: 1;
      }
      .cf-diff-local {
        background: rgba(var(--color-blue-rgb, 0, 120, 215), 0.15);
      }
      .cf-diff-remote {
        background: rgba(var(--color-green-rgb, 0, 180, 80), 0.15);
      }
      .cf-conflict-actions {
        padding: 12px 20px;
        border-top: 1px solid var(--background-modifier-border);
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .cf-individual-actions {
        display: flex;
        gap: 8px;
        justify-content: center;
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
      .cf-btn:hover:not(:disabled) {
        background: var(--background-modifier-hover);
        border-color: var(--text-accent);
      }
      .cf-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .cf-btn-icon {
        display: flex;
        align-items: center;
      }
      .cf-btn-local:hover:not(:disabled) {
        background: rgba(var(--color-blue-rgb, 0, 120, 215), 0.15);
        border-color: rgb(var(--color-blue-rgb, 0, 120, 215));
      }
      .cf-btn-remote:hover:not(:disabled) {
        background: rgba(var(--color-green-rgb, 0, 180, 80), 0.15);
        border-color: rgb(var(--color-green-rgb, 0, 180, 80));
      }
      .cf-btn-both:hover:not(:disabled) {
        background: rgba(var(--color-orange-rgb, 230, 150, 0), 0.15);
        border-color: rgb(var(--color-orange-rgb, 230, 150, 0));
      }
      .cf-btn-small {
        padding: 3px 10px;
        font-size: 0.8em;
      }
      .cf-batch-actions {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
      }
      .cf-batch-label {
        font-size: 0.8em;
        color: var(--text-muted);
      }
      .cf-conflict-nav {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
      }
      .cf-btn-nav {
        padding: 4px 8px;
      }
      .cf-nav-text {
        font-size: 0.85em;
        color: var(--text-muted);
      }
      .cf-conflict-empty {
        padding: 40px 20px;
        text-align: center;
        font-size: 1.2em;
        color: var(--text-success, var(--interactive-success));
      }
    `;
    document.head.appendChild(style);
  }
}
