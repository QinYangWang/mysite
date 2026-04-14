# Cloudflare Blog with Obsidian Sync

这是一个基于 Cloudflare Workers、R2 和 Obsidian 的博客/文档网站解决方案。

## 功能特性

### 网站功能
- ✅ Hono.js + Vite 构建的前后端分离架构
- ✅ Cloudflare R2 存储 Markdown 和图片
- ✅ Cloudflare Workers Analytics Engine 访问统计
- ✅ 评论系统（邮箱 + 评论内容，支持审核）
- ✅ RSS 订阅支持
- ✅ 响应式设计，移动端友好

### Obsidian 插件功能
- ✅ 跨平台同步（Android, iOS, iPadOS, macOS, Linux, Windows）
- ✅ 自动解析文件 metadata 生成 frontmatter
- ✅ 自动生成：title, slug, date, summary, tags, publish
- ✅ publish 默认为 false，需手动改为 true
- ✅ 未发布文章的图片不会公开
- ✅ 自动同步和手动同步模式

## 项目结构

```
mysite/
├── src/
│   ├── client/          # 前端 React 代码
│   │   ├── components/  # React 组件
│   │   ├── pages/       # 页面组件
│   │   └── main.tsx     # 入口文件
│   └── server/          # 后端 Hono 服务器
│       ├── api/         # API 路由
│       ├── utils/       # 工具函数
│       ├── types.ts     # 类型定义
│       └── index.ts     # 服务器入口
├── migrations/          # D1 数据库迁移
├── obsidian-plugin/     # Obsidian 同步插件
│   ├── src/
│   │   ├── main.ts      # 插件主文件
│   │   └── settings.ts  # 设置面板
│   ├── package.json
│   ├── manifest.json
│   └── tsconfig.json
├── wrangler.template.json
└── vite.config.ts
```

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置 Wrangler

复制并配置 wrangler.json：

```bash
cp wrangler.template.json wrangler.json
```

编辑 `wrangler.json`，配置：
- R2 bucket 名称
- D1 database ID
- Analytics Engine dataset

### 3. 创建 D1 数据库

```bash
# 创建数据库
npx wrangler d1 create mysite-d1

# 运行迁移
npx wrangler d1 execute mysite-d1 --file migrations/001_create_comments.sql
```

### 4. 创建 R2 Bucket

```bash
npx wrangler r2 bucket create mysite-r2
```

### 5. 本地开发

```bash
npm run dev
```

### 6. 部署

```bash
npm run deploy
```

## R2 存储结构

R2 bucket 中的文件按以下结构组织。Markdown 文件按照其在 Obsidian 中的原始路径存储（无 `vault/` 前缀），图片统一存储在 `images/` 目录下：

```
your-bucket/
├── posts/
│   ├── my-first-post.md
│   ├── hello-world.md
│   └── ...
└── images/
    ├── image1.png
    ├── image2.jpg
    └── ...
```

## Markdown 文件格式

在 Obsidian 中，文件应包含以下 frontmatter：

```yaml
---
title: "文章标题"
slug: "url-friendly-slug"  # 必填，不能为空，文章访问路径为 /slug 的值
date: "2024-01-01T00:00:00.000Z"
summary: "文章摘要"
tags:
  - tag1
  - tag2
publish: false  # 默认为 false，手动改为 true 发布
coverImage: "cover.jpg"  # 可选
---

文章内容...
```

> **注意**：`slug` 字段必须非空，发布后的文章可通过 `https://your-domain.com/<slug>` 直接访问。

## Obsidian 插件使用

### 安装

1. 进入 Obsidian 设置 → 社区插件
2. 点击文件夹图标打开插件目录
3. 将 `obsidian-plugin` 文件夹复制到插件目录
4. 在 Obsidian 中启用 "Cloudflare Sync" 插件

### 配置

1. 在 Obsidian 设置中找到 "Cloudflare Sync"
2. 配置 R2 凭据：
   - R2 Account ID
   - Bucket Name
   - R2 Access Key ID
   - R2 Secret Access Key

### 使用

- **自动同步**：启用后，文件修改时自动同步
- **自动生成 frontmatter**：创建新文件时自动生成
- **手动同步**：点击 Ribbon 图标或使用命令面板
- **发布文章**：将 frontmatter 中的 `publish` 设为 `true`

### 跨平台同步

Obsidian 插件支持所有平台：
- ✅ Android
- ✅ iOS
- ✅ iPadOS
- ✅ macOS
- ✅ Linux
- ✅ Windows

所有平台共享相同的配置和同步逻辑。

## API 端点

### 博客 API

- `GET /api/blog/posts` - 获取文章列表
- `GET /api/blog/posts/:slug` - 获取单篇文章
- `GET /api/blog/images/:key+` - 获取图片
- `GET /api/blog/site` - 获取站点信息

### 评论 API

- `GET /api/comments/:slug` - 获取文章评论
- `POST /api/comments/:slug` - 提交评论
- `PATCH /api/comments/approve/:id` - 审核评论
- `GET /api/comments/admin/all` - 获取所有评论（管理）

### 分析 API

- `POST /api/analytics/track` - 记录页面访问
- `GET /api/analytics/stats` - 获取访问统计
- `GET /api/analytics/top-pages` - 获取热门页面
- `GET /api/analytics/referrers` - 获取来源统计

### RSS

- `GET /feed.xml` - RSS Feed
- `GET /api/rss/feed` - RSS Feed (API)

## Analytics Engine

Analytics Engine 需要在 wrangler.json 中配置：

```json
{
  "analytics_engine_datasets": [
    {
      "binding": "ANALYTICS",
      "dataset": "mysite_analytics"
    }
  ]
}
```

配置后，可以通过 Cloudflare Dashboard 查看分析数据。

## 评论系统

评论存储在 D1 数据库中，包含以下字段：
- `id` - 评论 ID
- `post_slug` - 关联文章 slug
- `email` - 评论者邮箱
- `content` - 评论内容
- `approved` - 是否已审核（0=待审核，1=已通过）
- `created_at` - 创建时间

新评论默认为待审核状态，需要在管理后台审核。

## 隐私和安全

- 未发布文章（`publish: false`）的图片不会公开
- 评论需要邮箱且需审核
- R2 凭据应存储为 Cloudflare Secrets，不要提交到代码库
- 管理后台应添加身份验证（当前为示例，生产环境需加强）

## 自定义

### 修改网站标题和描述

编辑 `src/client/components/Header.tsx` 和 `Footer.tsx`

### 修改样式

编辑 `src/client/index.css`

### 添加新页面

在 `src/client/pages/` 中创建组件，并在 `App.tsx` 中添加路由

## 部署到 Cloudflare

```bash
# 构建并部署
npm run deploy

# 或分别构建
npm run build
npx wrangler deploy
```

## 故障排除

### 本地开发

```bash
# 查看 Wrangler 日志
npx wrangler dev

# 查看 Vite 日志
npm run dev
```

### 数据库问题

```bash
# 检查 D1 数据库
npx wrangler d1 info mysite-d1

# 执行 SQL 查询
npx wrangler d1 execute mysite-d1 --command "SELECT * FROM comments"
```

### R2 存储问题

```bash
# 列出 bucket 内容
npx wrangler r2 bucket list
npx wrangler r2 object list mysite-r2
```

## License

MIT

## Contributing

欢迎提交 Issue 和 Pull Request！
