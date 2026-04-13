import { App, PluginSettingTab, Setting } from 'obsidian';
import CloudflareSyncPlugin from './main';

export interface CloudflareSyncSettings {
  r2ApiEndpoint: string;
  r2AccountId: string;
  r2AccessKeyId: string;
  r2SecretAccessKey: string;
  bucketName: string;
  autoSync: boolean;
  autoFrontmatter: boolean;
  syncFolder: string;
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

    containerEl.createEl('h2', { text: 'Cloudflare Sync Settings' });

    containerEl.createEl('h3', { text: 'R2 Configuration' });

    new Setting(containerEl)
      .setName('R2 Account ID')
      .setDesc('Your Cloudflare R2 account ID')
      .addText((text) =>
        text
          .setPlaceholder('Enter your account ID')
          .setValue(this.plugin.settings.r2AccountId)
          .onChange(async (value) => {
            this.plugin.settings.r2AccountId = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Bucket Name')
      .setDesc('The R2 bucket name for storing files')
      .addText((text) =>
        text
          .setPlaceholder('Enter bucket name')
          .setValue(this.plugin.settings.bucketName)
          .onChange(async (value) => {
            this.plugin.settings.bucketName = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('R2 Access Key ID')
      .setDesc('Your R2 access key ID')
      .addText((text) =>
        text
          .setPlaceholder('Enter access key ID')
          .setValue(this.plugin.settings.r2AccessKeyId)
          .onChange(async (value) => {
            this.plugin.settings.r2AccessKeyId = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('R2 Secret Access Key')
      .setDesc('Your R2 secret access key')
      .addText((text) =>
        text
          .setPlaceholder('Enter secret access key')
          .setValue(this.plugin.settings.r2SecretAccessKey)
          .onChange(async (value) => {
            this.plugin.settings.r2SecretAccessKey = value;
            await this.plugin.saveSettings();
          })
      );

    containerEl.createEl('h3', { text: 'Sync Settings' });

    new Setting(containerEl)
      .setName('Auto Sync')
      .setDesc('Automatically sync files when they are modified')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.autoSync)
          .onChange(async (value) => {
            this.plugin.settings.autoSync = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Auto Frontmatter')
      .setDesc('Automatically generate frontmatter for new files')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.autoFrontmatter)
          .onChange(async (value) => {
            this.plugin.settings.autoFrontmatter = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName('Sync Folder')
      .setDesc('The folder to sync (relative to vault root)')
      .addText((text) =>
        text
          .setPlaceholder('/')
          .setValue(this.plugin.settings.syncFolder)
          .onChange(async (value) => {
            this.plugin.settings.syncFolder = value;
            await this.plugin.saveSettings();
          })
      );

    containerEl.createEl('h3', { text: 'Instructions' });
    
    const instructions = containerEl.createEl('div', { cls: 'markdown-preview-view' });
    instructions.innerHTML = `
      <h4>How to use:</h4>
      <ol>
        <li>Configure your R2 credentials above</li>
        <li>Set <code>publish: true</code> in a file's frontmatter to publish it</li>
        <li>Files with <code>publish: false</code> will sync but remain private</li>
        <li>Use the ribbon icon or command palette to sync manually</li>
        <li>Auto-sync is enabled by default when files are modified</li>
      </ol>
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
    `;
  }
}
