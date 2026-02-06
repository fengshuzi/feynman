---
title: Obsidian Notes 同步插件
date: 2026-01-10
category:
  - Obsidian
tag:
  - 插件开发
  - TypeScript
---

# Obsidian Notes 同步插件

多源笔记同步到 Obsidian：**macOS 备忘录**、**Joplin**、**思源笔记**、**Notion** 等，仅手动刷新。本文在备忘录能力之外，补充 **Notion 支持** 的配置与用法。


## 下载地址
https://github.com/fengshuzi/obsidian-notes



## 功能特性

- 🔄 从 macOS 备忘录同步笔记到 Obsidian
- 📁 支持指定备忘录文件夹
- ⏰ 支持自动定时同步
- 🎯 可自定义 Obsidian 目标文件夹
- 📝 保留笔记的创建和修改时间
- 🖼️ **自动提取并保存图片**：将 base64 图片转换为本地文件
- 📷 支持多种图片格式（PNG、JPEG、GIF 等）
- 🔗 使用相对路径引用图片，便于管理
- **Notion 同步**：Token 与多页面配置化，支持页面/数据库导出，图片默认保存到 vault 根目录 `assets` 并可配置

## 使用方法

### 安装

1. 将插件文件复制到 Obsidian vault 的 `.obsidian/plugins/obsidian-notes/` 目录
2. 在 Obsidian 设置中启用插件

### 配置

在插件设置中可以配置：

- **备忘录文件夹名称**：指定要同步的 macOS 备忘录文件夹（默认：Notes）
- **Obsidian 目标文件夹**：笔记将同步到此文件夹（默认：备忘录）
- **启用自动同步**：是否定期自动同步
- **同步间隔**：自动同步的时间间隔（分钟）

### 命令

- **同步备忘录**：手动触发同步
- **立即同步备忘录（一次）**：执行一次性同步

### 图片处理

插件会自动处理备忘录中的图片：

1. **自动提取**：从 HTML 中提取 base64 编码的图片
2. **保存到本地**：图片保存在 `备忘录/attachments/` 文件夹
3. **自动命名**：格式为 `笔记标题-001.png`、`笔记标题-002.jpg` 等
4. **Markdown 引用**：使用相对路径 `![](attachments/图片名.png)`

**文件结构示例：**
```
备忘录/
├── attachments/
│   ├── 我的笔记-001.png
│   ├── 我的笔记-002.jpg
│   └── 工作计划-001.png
├── 我的笔记.md
└── 工作计划.md
```

---

## Notion 同步

插件内置 Notion API 同步：在设置中配置 **Notion API Token** 和 **要同步的页面列表**（支持多个页面），即可将 Notion 页面/数据库导出为 Markdown，图片下载到本地并修正链接。

### 前置条件

1. 在 [Notion Integrations](https://www.notion.so/my-integrations) 创建 Integration，复制 **Token**（形如 `ntn_xxx` 或 `secret_xxx`）。
2. 在 Notion 中把要同步的**页面**或**数据库**「分享」给该 Integration（Share → Invite → 选择你的 Integration）。

### 配置项

在插件设置 → **Notion 同步** 中：

- **Notion API Token**：粘贴 Integration 密钥。
- **要同步的页面（多行）**：每行一个 Notion 页面 URL 或 page_id；可选在同一行用 **Tab** 分隔填写「输出文件夹」（如 `notion` 或 `Bike/notion`）。
- **Notion 默认输出文件夹**：未在行内指定时，导出到此 vault 子文件夹（默认 `notion`）。
- **Notion 图片保存目录**：图片保存位置，相对 vault 根目录；默认 `assets` 即根目录下 `assets` 文件夹，可改为如 `notion/assets`。
- **刷新时同步 Notion**：勾选后，侧边栏「刷新」或命令「刷新（按配置更新）」会执行 Notion 同步。

### 使用方式

- **命令**：「从 Notion 导入」—— 按当前配置拉取并写入 Markdown。
- **刷新**：若勾选「刷新时同步 Notion」，点击侧边栏刷新图标会连同 Notion 一起同步。

### 行为说明

- **多页面**：配置里可填多行，每行一个页面或数据库；每行可带 Tab + 输出文件夹，实现不同页面导出到不同目录。
- **页面与数据库**：若为页面，会导出该页及其子页面（子页在「父页标题」子文件夹下）；若为数据库，会逐条导出每条为一张 .md。
- **图片**：按「笔记名-001.ext」命名，保存到配置的图片目录（默认 vault 根 `assets`），正文中用相对路径引用（如 `../assets/笔记名-001.png`），与 Joplin/思源一致。
- **父页不渲染子页内容**：父页的 Markdown 只含自身块，子页面单独为独立 .md 文件。

### 示例配置

- 只同步一个列表、导出到默认目录：在「要同步的页面」填一行 URL 即可。
- 多页且分目录：
  ```
  https://notion.so/页面A-xxx
  https://notion.so/页面B-yyy	Other/notion
  ```

---
## 开发

### 构建

```bash
npm install
npm run build
```

### 部署到本地 vault

```bash
npm run deploy
```

### 发布新版本

```bash
npm run release
```

## 系统要求

- macOS 系统
- Obsidian 1.2.8 或更高版本

### 可选：安装 pandoc 优化表格同步

建议安装 [pandoc](https://pandoc.org/) 以获得更好的表格转换效果：

```bash
brew install pandoc
```

安装后插件会自动检测并使用 pandoc 转换表格，将 macOS 备忘录的 HTML 表格完美转换为 Markdown 表格格式。

如果未安装 pandoc，插件会使用内置的正则方案转换表格（效果较基础）。

## 许可证

MIT



## 注意事项

- **macOS 备忘录**：仅支持 macOS，需授予 Obsidian 访问备忘录的权限；同步时会覆盖已存在的同名文件。
- **Notion**：不依赖 macOS，任意平台均可使用；需网络访问 Notion API，Token 仅保存在本地设置中，请勿泄露。
