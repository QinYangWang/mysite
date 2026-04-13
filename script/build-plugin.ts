/**
 * 构建 Obsidian 插件并发布到 cloudflare-sync 文件夹
 * 用法: npm run build:plugin
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const pluginDir = path.join(rootDir, 'obsidian-plugin');
const releaseDir = path.join(rootDir, 'cloudflare-sync');

console.log('🔨 Building Obsidian plugin...\n');

// 1. 安装依赖
console.log('📦 Installing dependencies...');
execSync('npm install', { cwd: pluginDir, stdio: 'inherit' });

// 2. 构建插件
console.log('\n🔨 Building plugin...');
execSync('npm run build', { cwd: pluginDir, stdio: 'inherit' });

// 3. 创建发布文件夹
console.log('\n📁 Creating release folder...');
if (fs.existsSync(releaseDir)) {
  fs.rmSync(releaseDir, { recursive: true, force: true });
}
fs.mkdirSync(releaseDir, { recursive: true });

// 4. 复制必要文件
const filesToCopy = ['main.js', 'manifest.json'];

for (const file of filesToCopy) {
  const src = path.join(pluginDir, file);
  const dest = path.join(releaseDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`  ✅ Copied ${file}`);
  } else {
    console.warn(`  ⚠️  Missing ${file}`);
  }
}

// 5. 如果有样式文件也复制
const stylesSrc = path.join(pluginDir, 'styles.css');
if (fs.existsSync(stylesSrc)) {
  fs.copyFileSync(stylesSrc, path.join(releaseDir, 'styles.css'));
  console.log('  ✅ Copied styles.css');
}

console.log(`\n✨ Release folder created: ${releaseDir}`);
console.log('📋 Files:');
fs.readdirSync(releaseDir).forEach((file) => {
  const stat = fs.statSync(path.join(releaseDir, file));
  console.log(`   ${file} (${(stat.size / 1024).toFixed(1)} KB)`);
});

console.log(
  '\n🎉 Done! Copy the "cloudflare-sync" folder to your Obsidian plugins directory.'
);
