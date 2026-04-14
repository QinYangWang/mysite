# MySite — 基于 Cloudflare Workers 的个人博客

一个简洁、快速、全栈部署在 Cloudflare 边缘网络上的个人博客系统。文章与图片存储在 R2，评论数据保存在 D1，访问统计由 Analytics Engine 驱动，并可通过专属 Obsidian 插件实现“写即同步”。

## 项目简介

MySite 采用前后端一体化架构：前端是 React SPA，后端是 Hono 路由，全部打包为 Cloudflare Worker。你不需要维护服务器，只需一个 Cloudflare 账户即可将博客部署到全球边缘节点。

核心特点：
- **边缘原生**：Worker + R2 + D1 + Analytics Engine，全部跑在 Cloudflare 网络上。
- **Obsidian 联动**：配套 Obsidian 插件支持一键/自动同步 vault 到 R2，写文章就像记笔记。
- **管理后台**：内置基于 Token 认证的管理后台，支持评论审核与访问分析。
- **RSS & SEO**：自动生成 RSS Feed，SPA 支持路由回退，搜索引擎友好。

## 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | React 19 + TypeScript + Vite 6 + React Router DOM |
| 样式 | Tailwind CSS 4 + shadcn/ui + Lucide Icons |
| 后端 | Hono (运行在 Cloudflare Workers) |
| 存储 | Cloudflare R2 (Markdown / 图片) + D1 (评论) |
| 统计 | Cloudflare Analytics Engine |
| 构建 | `@cloudflare/vite-plugin` + Wrangler |
| 插件 | Obsidian Plugin (TypeScript + esbuild) |

## 功能特性

### 博客前台
- 文章列表（支持分页游标 `cursor`）
- 文章详情（`react-markdown` + `remark-gfm` 渲染 Markdown）
- 标签展示、封面图支持
- 响应式布局，移动端侧边栏抽屉
- SPA 路由回退，直接访问 `/:slug` 即可打开对应文章

### 评论系统
- 读者通过邮箱提交评论
- 新评论默认“待审核”，管理员在后台一键通过
- 评论数据存储在 D1

### 访问统计
- 自动记录页面浏览（`POST /api/analytics/track`）
- 管理后台展示：总 PV/UV、今日 PV、30 天趋势图、热门页面、国家分布、设备分布

### RSS
- `/feed.xml` 与 `/api/rss/feed` 输出 RSS 2.0

### 同步 API（供 Obsidian 插件调用）
- 增量同步：基于 SHA-256 内容哈希检测变更
- 乐观锁冲突检测（`lastKnownHash`）
- 支持单文件/批量上传、下载、删除、元数据查询

## 项目结构

```
mysite/
├── src/
│   ├── client/           # React 前端
│   │   ├── components/   # UI 组件（Header、Sidebar、Comments 等）
│   │   ├── pages/        # 页面（Home、PostDetail、Admin）
│   │   └── main.tsx      # 入口
│   └── server/           # Hono 后端
│       ├── api/          # 路由（blog、comments、analytics、rss、sync）
│       ├── utils/        # 工具函数（R2 读取、Markdown 解析）
│       └── index.ts      # Worker 入口
├── migrations/           # D1 数据库迁移文件
├── obsidian-plugin/      # Obsidian 插件源码
│   ├── src/main.ts
│   ├── src/settings.ts
│   └── manifest.json
├── script/
│   ├── setup.ts          # 半自动初始化脚本
│   └── build-plugin.ts   # 构建并输出插件到 cloudflare-sync/
├── wrangler.template.json
├── wrangler.json         # 生成后的 Wrangler 配置（不提交 Git）
└── package.json
```

## 环境变量 / 配置说明

### Wrangler 绑定（在 `wrangler.json` 中配置）

项目通过 `wrangler.json` 声明以下绑定（`npm run setup` 可自动生成）：

| 绑定名 | 类型 | 说明 |
|--------|------|------|
| `DB` | D1 Database | 评论数据存储 |
| `BUCKET` | R2 Bucket | Markdown 与图片存储 |
| `ANALYTICS` | Analytics Engine Dataset | 访问统计数据集 |
| `CF_ACCOUNT_ID` | Vars | Cloudflare 账户 ID（在 `vars` 中明文配置） |

### Secrets（敏感信息）

以下两项需通过 Wrangler Secret 设置，**切勿写入代码仓库**：

- `API_TOKEN`：Obsidian 插件上传认证 + 管理后台登录凭证。
- `CF_ANALYTICS_TOKEN`：管理后台查询 Analytics Engine 的 API Token（需具有 `Account > Account Analytics > Read` 权限）。

设置方式：

```bash
npx wrangler secret put API_TOKEN
npx wrangler secret put CF_ANALYTICS_TOKEN
```

本地开发时，可在项目根目录创建 `.dev.vars` 文件：

```ini
API_TOKEN=your-secret-token
CF_ANALYTICS_TOKEN=your-analytics-token
CF_ACCOUNT_ID=your-account-id
```

> `.dev.vars` 与 `wrangler.json` 已加入 `.gitignore`，不会被提交。

## 本地开发步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 初始化 Cloudflare 资源（推荐）

运行交互式设置脚本，自动检测/创建 R2、D1，运行数据库迁移，并生成 `wrangler.json`：

```bash
npm run setup
```

脚本完成后，按提示设置 Secrets。

### 3. 启动开发服务器

```bash
npm run dev
```

Vite 会同时启动前端开发服务器并通过 `@cloudflare/vite-plugin` 代理 Worker 请求，默认地址为 `http://localhost:5173`。

### 4. 常用脚本

| 脚本 | 作用 |
|------|------|
| `npm run dev` | 本地开发 |
| `npm run build` | 构建生产包（`dist/client` + Worker） |
| `npm run preview` | 本地预览生产构建 |
| `npm run deploy` | 构建并部署到 Cloudflare Workers |
| `npm run build:plugin` | 构建 Obsidian 插件并输出到 `cloudflare-sync/` |
| `npm run cf-typegen` | 重新生成 `worker-configuration.d.ts` |

## 部署说明

一键部署：

```bash
npm run deploy
```

该命令等价于 `npm run build && npx wrangler deploy`。

部署后，Worker 会自动将 `dist/client` 作为静态资源（`assets`） served，所有未匹配的非 API 路由都会回退到 `index.html`，保证 SPA 路由正常工作。

### 数据库迁移

若后续更新了 `migrations/` 中的 SQL 文件，需手动在远端执行：

```bash
npx wrangler d1 execute mysite-d1 --file migrations/001_create_comments.sql --remote
```

## API 接口概览

### 博客
- `GET /api/blog/posts?limit=20&cursor=` — 文章列表
- `GET /api/blog/posts/:slug` — 单篇文章详情
- `GET /api/blog/images/:key+` — 获取图片（R2 `images/` 下）
- `GET /api/blog/site` — 站点元信息

### 评论
- `GET /api/comments/:slug` — 获取某篇文章的已审核评论
- `POST /api/comments/:slug` — 提交评论（需邮箱）
- `GET /api/comments/admin/all` — 管理端：全部评论
- `PATCH /api/comments/approve/:id` — 管理端：审核通过评论

### 统计（管理端需 `Authorization: Bearer {API_TOKEN}`）
- `POST /api/analytics/track` — 记录页面访问
- `GET /api/analytics/stats?days=30` — PV/UV 汇总
- `GET /api/analytics/timeseries?days=30` — 按天趋势
- `GET /api/analytics/top-pages?limit=10&days=30` — 热门页面
- `GET /api/analytics/countries?limit=10&days=30` — 国家分布
- `GET /api/analytics/devices?days=30` — 设备分布

### RSS
- `GET /feed.xml`
- `GET /api/rss/feed`

### 同步（Obsidian 插件专用，需 `Authorization: Bearer {API_TOKEN}`）
- `POST /api/sync/upload` — 上传/覆盖单文件
- `GET /api/sync/download/:key` — 下载单文件
- `POST /api/sync/batch-meta` — 批量获取文件元数据（哈希比对）
- `POST /api/sync/download-batch` — 批量下载
- `GET /api/sync/list?prefix=&limit=&cursor=` — 列出文件
- `GET /api/sync/meta/:key` — 单文件元数据
- `DELETE /api/sync/delete/:key` — 删除单文件
- `POST /api/sync/delete-batch` — 批量删除

### 认证
- `POST /api/auth/verify` — 校验 Token 是否正确

## Obsidian 插件联动说明

### 获取插件

插件源码位于本仓库的 `obsidian-plugin/` 目录下。构建命令：

```bash
npm run build:plugin
```

构建完成后，会在项目根目录生成 `cloudflare-sync/` 文件夹，里面包含 `main.js` 与 `manifest.json`。

### 安装到 Obsidian

1. 打开 Obsidian → 设置 → 第三方插件 → 关闭安全模式。
2. 点击“打开插件目录”，将 `cloudflare-sync/` 文件夹复制到该目录。
3. 回到 Obsidian 插件列表，启用 **Cloudflare Sync**。

### 插件配置

进入插件设置面板，填写：

- **Server URL**：你的 Worker 域名，例如 `https://mysite.your-account.workers.dev`
- **API Token**：与 Wrangler Secret `API_TOKEN` 一致的令牌

其他常用选项：
- **Auto Sync**：文件修改后自动同步（带防抖）
- **Auto Sync Interval**：定时全量同步间隔（分钟，0 为关闭）
- **Debounce Delay**：文件修改后延迟同步秒数（防止打字时频繁上传）
- **Sync on Startup**：Obsidian 启动时自动全量同步
- **Auto Frontmatter**：新建 Markdown 时自动生成 frontmatter
- **Conflict Strategy**：冲突时询问 / 本地优先 / 远端优先
- **Exclude Folders**：排除不同步的文件夹（如 `_templates, .trash`）

### Markdown 文章格式

插件会自动补全 frontmatter。已发布文章需满足：

```yaml
---
title: "文章标题"
slug: "url-friendly-slug"      # 必填，访问路径为 /slug
date: "2024-01-01T00:00:00.000Z"
summary: "文章摘要"
tags:
  - tag1
  - tag2
publish: false                  # 设为 true 才会在博客公开
coverImage: "cover.jpg"         # 可选，图片名对应 R2 images/ 下文件
---

正文内容……
```

> **注意**：`slug` 必须非空，且全局唯一。博客 API 通过扫描 R2 中所有 `.md` 文件并匹配 `slug` 来定位文章。

### R2 存储约定

- Markdown 文件：按 Obsidian vault 中的相对路径存储（例如 `posts/hello.md`）。
- 图片附件：统一存储在 `images/` 目录下（插件自动处理路径映射）。
- 只有 `publish: true` 的文章才会在博客前台展示；未发布文章的图片也不会通过博客图片接口公开访问。

### 同步安全

- 所有同步接口均要求 `Authorization: Bearer {API_TOKEN}`。
- 插件采用 SHA-256 内容哈希实现增量同步，仅在文件真正变更时才上传。
- 若本地与远端同时修改同一文件，插件会根据冲突策略提示或自动解决。

## 自定义与扩展

- **修改站点标题/描述**：编辑 `src/client/pages/Home.tsx` 与 `src/client/components/Sidebar.tsx`。
- **调整样式**：修改 `src/client/index.css`（Tailwind 主题与自定义 prose 样式）。
- **新增页面**：在 `src/client/pages/` 创建组件，并在 `src/client/App.tsx` 中添加路由。

## 许可证

MIT
