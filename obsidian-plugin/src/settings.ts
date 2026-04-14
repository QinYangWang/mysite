import { App, PluginSettingTab, Setting } from 'obsidian';
import CloudflareSyncPlugin from './main';
import type { ConflictStrategy } from './sync-engine';

export interface CloudflareSyncSettings {
  serverUrl: string;
  apiToken: string;
  autoSync: boolean;
  autoFrontmatter: boolean;
  syncAllFiles: boolean;
  excludeFolders: string[];
  autoSyncInterval: number;       // 自动同步间隔（分钟）
  conflictStrategy: ConflictStrategy; // 冲突解决策略
  syncOnStartup: boolean;         // 启动时同步
  debounceDelay: number;          // 文件修改后延迟同步（秒）
}

export class CloudflareSyncSettingTab extends PluginSettingTab {
  plugin: CloudflareSyncPlugin;

  constructor(app: App, plugin: CloudflareSyncPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    containerEl.createEl('h2', { text: 'Cloudflare Sync' });

    // ===== Connection =====
    containerEl.createEl('h3', { text: 'Connection' });

    new Setting(containerEl)
      .setName('Server URL')
      .setDesc('Your Cloudflare Workers URL (e.g., https://mysite.your-account.workers.dev)')
      .addText((text) =>
        text
          .setPlaceholder('https://mysite.your-account.workers.dev')
          .setValue(this.plugin.settings.serverUrl)
          .onChange(async (value) => {
            this.plugin.settings.serverUrl = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('API Token')
      .setDesc('Your API token for authentication')
      .addText((text) => {
        text.inputEl.type = 'password';
        return text
          .setPlaceholder('Enter your API token')
          .setValue(this.plugin.settings.apiToken)
          .onChange(async (value) => {
            this.plugin.settings.apiToken = value;
            await this.plugin.saveSettings();
          });
      });

    // ===== Sync Settings =====
    containerEl.createEl('h3', { text: 'Sync Settings' });

    new Setting(containerEl)
      .setName('Auto Sync')
      .setDesc('Automatically sync files when they are modified (with debounce)')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.autoSync)
          .onChange(async (value) => {
            this.plugin.settings.autoSync = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Auto Sync Interval')
      .setDesc('How often to run a full sync (in minutes). Set to 0 to disable periodic sync.')
      .addSlider((slider) =>
        slider
          .setLimits(0, 60, 1)
          .setValue(this.plugin.settings.autoSyncInterval)
          .setDynamicTooltip()
          .onChange(async (value) => {
            this.plugin.settings.autoSyncInterval = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Debounce Delay')
      .setDesc('Seconds to wait after a file change before syncing (prevents excessive uploads while typing)')
      .addSlider((slider) =>
        slider
          .setLimits(5, 120, 5)
          .setValue(this.plugin.settings.debounceDelay)
          .setDynamicTooltip()
          .onChange(async (value) => {
            this.plugin.settings.debounceDelay = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Sync on Startup')
      .setDesc('Automatically run a full sync when Obsidian starts')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.syncOnStartup)
          .onChange(async (value) => {
            this.plugin.settings.syncOnStartup = value;
            await this.plugin.saveSettings();
          })
      );

    // ===== Conflict Resolution =====
    containerEl.createEl('h3', { text: 'Conflict Resolution' });

    new Setting(containerEl)
      .setName('Conflict Strategy')
      .setDesc('How to handle conflicts when both local and remote have changed')
      .addDropdown((dropdown) =>
        dropdown
          .addOption('ask', 'Ask me every time')
          .addOption('local-wins', 'Local always wins')
          .addOption('remote-wins', 'Remote always wins')
          .setValue(this.plugin.settings.conflictStrategy)
          .onChange(async (value: string) => {
            this.plugin.settings.conflictStrategy = value as ConflictStrategy;
            await this.plugin.saveSettings();
          })
      );

    // ===== Content Settings =====
    containerEl.createEl('h3', { text: 'Content Settings' });

    new Setting(containerEl)
      .setName('Auto Frontmatter')
      .setDesc('Automatically generate frontmatter for new markdown files')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.autoFrontmatter)
          .onChange(async (value) => {
            this.plugin.settings.autoFrontmatter = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Sync All Files')
      .setDesc('Sync all files in the vault (not just markdown)')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.syncAllFiles)
          .onChange(async (value) => {
            this.plugin.settings.syncAllFiles = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Exclude Folders')
      .setDesc('Comma-separated list of folders to exclude from sync')
      .addText((text) =>
        text
          .setPlaceholder('_templates, .trash')
          .setValue((this.plugin.settings.excludeFolders || []).join(', '))
          .onChange(async (value) => {
            this.plugin.settings.excludeFolders = value
              .split(',')
              .map((s) => s.trim())
              .filter(Boolean);
            await this.plugin.saveSettings();
          })
      );

    // ===== Instructions =====
    containerEl.createEl('h3', { text: 'Instructions' });

    const instructions = containerEl.createEl('div', { cls: 'markdown-preview-view' });
    instructions.innerHTML = `
      <h4>Server Setup:</h4>
      <ol>
        <li>Deploy the Cloudflare Workers site</li>
        <li>Set <code>API_TOKEN</code> secret: <code>npx wrangler secret put API_TOKEN</code></li>
        <li>Copy the Workers URL and token to settings above</li>
      </ol>
      <h4>Sync Behavior:</h4>
      <ul>
        <li><strong>Auto Sync</strong> — Files sync after a debounce delay when modified</li>
        <li><strong>Periodic Sync</strong> — Full sync runs at the configured interval</li>
        <li><strong>Startup Sync</strong> — Full sync on Obsidian launch</li>
        <li><strong>Conflict Detection</strong> — Three-way hash comparison detects conflicts</li>
      </ul>
      <h4>Frontmatter fields:</h4>
      <ul>
        <li><code>title</code> - Post title</li>
        <li><code>slug</code> - URL-friendly identifier</li>
        <li><code>date</code> - Publication date (ISO format)</li>
        <li><code>summary</code> - Post summary/excerpt</li>
        <li><code>tags</code> - Array or comma-separated tags</li>
        <li><code>publish</code> - Whether to make public (default: false)</li>
        <li><code>coverImage</code> - Cover image filename</li>
      </ul>
      <h4>Commands:</h4>
      <ul>
        <li><strong>Full Sync</strong> — Bidirectional sync with conflict detection</li>
        <li><strong>Sync to Cloudflare</strong> — Upload all notes (one-way)</li>
        <li><strong>Download from Cloudflare</strong> — Download all notes (one-way)</li>
        <li><strong>Sync current file</strong> — Upload current file</li>
        <li><strong>Resolve conflicts</strong> — Open conflict resolution dialog</li>
        <li><strong>Show sync status</strong> — View sync statistics</li>
      </ul>
    `;
  }
}
