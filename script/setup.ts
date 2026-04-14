/**
 * 半自动设置脚本：检测并创建 Cloudflare 资源
 * 基于 wrangler.template.json 生成 wrangler.json
 * 用法: npm run setup
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import * as readline from 'node:readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

function run(command: string, options?: { silent?: boolean }): string {
  try {
    return execSync(command, {
      cwd: rootDir,
      stdio: options?.silent ? 'pipe' : 'inherit',
      encoding: 'utf-8',
    });
  } catch (error: any) {
    if (options?.silent) {
      return error.stderr || error.stdout || '';
    }
    throw error;
  }
}

function getAccountId(): string | null {
  const output = run('npx wrangler whoami', { silent: true });
  const match = output.match(/([a-f0-9]{32})/i);
  return match ? match[1] : null;
}

function updateDevVars(key: string, value: string): void {
  const devVarsPath = path.join(rootDir, '.dev.vars');
  let content = '';
  if (fs.existsSync(devVarsPath)) {
    content = fs.readFileSync(devVarsPath, 'utf-8');
  }

  const regex = new RegExp(`^${key}=.*$`, 'm');
  const line = `${key}=${value}`;

  if (regex.test(content)) {
    content = content.replace(regex, line);
  } else {
    content = content.trimEnd() + '\n' + line + '\n';
  }

  fs.writeFileSync(devVarsPath, content);
}

// 读取模板配置
const templatePath = path.join(rootDir, 'wrangler.template.json');
const template = JSON.parse(
  fs
    .readFileSync(templatePath, 'utf-8')
    .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
    .replace(/,(\s*[}\]])/g, '$1')
);

console.log('🚀 Cloudflare Workers Setup Assistant\n');
console.log(`Project: ${template.name}`);

async function checkAndCreateR2(bucketName: string): Promise<boolean> {
  console.log(`\n📦 Checking R2 bucket: ${bucketName}`);
  const output = run('npx wrangler r2 bucket list', { silent: true });
  const buckets = output.split('\n').filter((line) => line.includes(bucketName));

  if (buckets.length > 0) {
    console.log(`  ✅ R2 bucket "${bucketName}" already exists`);
    return true;
  }

  console.log(`  ⚠️  R2 bucket "${bucketName}" not found`);
  const answer = await ask('  Create it now? (y/n): ');
  if (answer.toLowerCase() === 'y') {
    console.log(`  Creating R2 bucket "${bucketName}"...`);
    run(`npx wrangler r2 bucket create ${bucketName}`);
    console.log(`  ✅ Created R2 bucket "${bucketName}"`);
    return true;
  } else {
    console.log(`  ⏭️  Skipping R2 bucket creation`);
    return false;
  }
}

async function checkAndCreateD1(
  dbName: string
): Promise<{ created: boolean; databaseId: string }> {
  console.log(`\n🗄️  Checking D1 database: ${dbName}`);
  const output = run('npx wrangler d1 list', { silent: true });

  // 解析 D1 列表输出
  const lines = output.split('\n');
  let existingDb: { name: string; uuid: string } | null = null;

  for (const line of lines) {
    if (line.includes(dbName)) {
      const match = line.match(/([a-f0-9-]{36})/);
      if (match) {
        existingDb = { name: dbName, uuid: match[1] };
        break;
      }
    }
  }

  if (existingDb) {
    console.log(`  ✅ D1 database "${dbName}" already exists (ID: ${existingDb.uuid})`);
    return { created: false, databaseId: existingDb.uuid };
  }

  console.log(`  ⚠️  D1 database "${dbName}" not found`);
  const answer = await ask('  Create it now? (y/n): ');
  if (answer.toLowerCase() === 'y') {
    console.log(`  Creating D1 database "${dbName}"...`);
    const createOutput = run(`npx wrangler d1 create ${dbName}`, { silent: true });
    const match = createOutput.match(/database_id\s*=\s*"([a-f0-9-]{36})"/);
    const databaseId = match ? match[1] : '';

    if (databaseId) {
      console.log(`  ✅ Created D1 database "${dbName}" (ID: ${databaseId})`);
      return { created: true, databaseId };
    } else {
      console.error('  ❌ Failed to create D1 database');
      return { created: false, databaseId: '' };
    }
  } else {
    console.log(`  ⏭️  Skipping D1 database creation`);
    return { created: false, databaseId: '' };
  }
}

async function runMigrations(dbName: string): Promise<boolean> {
  const migrationsDir = path.join(rootDir, 'migrations');
  if (!fs.existsSync(migrationsDir)) {
    console.log('\n📁 No migrations folder found. Skipping.');
    return false;
  }

  const files = fs
    .readdirSync(migrationsDir)
    .filter((f) => f.endsWith('.sql'))
    .sort();

  if (files.length === 0) {
    console.log('\n📁 No migration files found. Skipping.');
    return false;
  }

  console.log('\n📋 Found migrations:');
  files.forEach((f) => console.log(`   ${f}`));

  const answer = await ask('  Run migrations? (y/n): ');
  if (answer.toLowerCase() === 'y') {
    for (const file of files) {
      console.log(`  Running ${file}...`);
      run(
        `npx wrangler d1 execute ${dbName} --file migrations/${file} --remote`,
      );
      console.log(`  ✅ Applied ${file}`);
    }
    return true;
  } else {
    console.log('  ⏭️  Skipping migrations');
    return false;
  }
}

async function main() {
  const r2Config = template.r2_buckets?.[0];
  const d1Config = template.d1_databases?.[0];
  const analyticsConfig = template.analytics_engine_datasets?.[0];

  let createdResources = {
    r2: false,
    d1: false,
    analytics: false,
  };

  // 检查并创建 R2
  if (r2Config) {
    createdResources.r2 = await checkAndCreateR2(r2Config.bucket_name);
  }

  // 检查并创建 D1
  let d1DatabaseId = '';
  if (d1Config) {
    // 忽略模板中的占位符，使用实际检测/创建的 ID
    const result = await checkAndCreateD1(d1Config.database_name);
    if (result.databaseId) {
      d1DatabaseId = result.databaseId;
      createdResources.d1 = result.created;
    }
  }

  // Analytics Engine 不需要创建，只需确认
  if (analyticsConfig) {
    console.log(
      `\n📊 Analytics Engine dataset: ${analyticsConfig.dataset} (auto-provisioned)`
    );
    createdResources.analytics = true;
  }

  // 自动获取 Account ID
  console.log('\n🔍 Detecting Cloudflare Account ID...');
  let accountId = getAccountId();
  if (!accountId) {
    accountId = await ask('  Could not auto-detect Account ID. Please enter it: ');
  } else {
    console.log(`  ✅ Found Account ID: ${accountId}`);
  }

  // 生成 wrangler.json
  console.log('\n📝 Generating wrangler.json...');
  const wranglerConfig = { ...template };

  // 更新 D1 database_id（替换占位符或填入真实 ID）
  if (d1Config && d1DatabaseId) {
    wranglerConfig.d1_databases = wranglerConfig.d1_databases.map((db: any) => ({
      ...db,
      database_id: d1DatabaseId,
    }));
  }

  // 写入 CF_ACCOUNT_ID
  wranglerConfig.vars = {
    ...(wranglerConfig.vars || {}),
    CF_ACCOUNT_ID: accountId || '',
  };

  const wranglerPath = path.join(rootDir, 'wrangler.json');
  fs.writeFileSync(wranglerPath, JSON.stringify(wranglerConfig, null, '\t'));
  console.log(`  ✅ Generated wrangler.json`);

  // 同步 .dev.vars
  if (accountId) {
    updateDevVars('CF_ACCOUNT_ID', accountId);
    console.log('  ✅ Updated .dev.vars with CF_ACCOUNT_ID');
  }

  // 生成类型
  console.log('\n🔧 Generating TypeScript types...');
  run('npx wrangler types');
  console.log('  ✅ Generated worker-configuration.d.ts');

  // 运行迁移
  if (d1Config && d1DatabaseId) {
    await runMigrations(d1Config.database_name);
  }

  // 提示设置 Secrets
  console.log('\n🔑 Required Secrets');
  console.log('  1) API_TOKEN');
  console.log('     Used by the Obsidian plugin for authentication.');
  console.log('     Set it with: npx wrangler secret put API_TOKEN');
  console.log('     (This should be a strong random string)');
  console.log('');
  console.log('  2) CF_ANALYTICS_TOKEN');
  console.log('     Used by the admin dashboard to query Analytics Engine.');
  console.log('     Create a token with Account > Account Analytics > Read permission:');
  console.log('     https://dash.cloudflare.com/profile/api-tokens');
  console.log('     Set it with: npx wrangler secret put CF_ANALYTICS_TOKEN');

  // 总结
  console.log('\n' + '='.repeat(50));
  console.log('✨ Setup complete!\n');
  console.log('Created resources:');
  console.log(`  R2 bucket: ${createdResources.r2 ? '✅' : '⏭️  skipped'}`);
  console.log(`  D1 database: ${createdResources.d1 ? '✅' : '⏭️  skipped'}`);
  console.log(`  Analytics Engine: ${createdResources.analytics ? '✅' : '⏭️  skipped'}`);
  if (accountId) {
    console.log(`  CF_ACCOUNT_ID: ✅ ${accountId}`);
  }

  console.log('\nNext steps:');
  console.log('  npm run dev       - Start local development');
  console.log('  npm run deploy    - Deploy to Cloudflare');
  console.log('  npx wrangler secret put API_TOKEN');
  console.log('  npx wrangler secret put CF_ANALYTICS_TOKEN');

  rl.close();
}

main().catch((error) => {
  console.error('\n❌ Setup failed:', error.message);
  rl.close();
  process.exit(1);
});
