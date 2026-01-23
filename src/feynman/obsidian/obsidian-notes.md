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

从 macOS 备忘录同步笔记到 Obsidian 仓库的备忘录文件夹。

## 功能特性

- 🔄 从 macOS 备忘录同步笔记到 Obsidian
- 📁 支持指定备忘录文件夹
- ⏰ 支持自动定时同步
- 🎯 可自定义 Obsidian 目标文件夹
- 📝 保留笔记的创建和修改时间
- 🖼️ **自动提取并保存图片**：将 base64 图片转换为本地文件
- 📷 支持多种图片格式（PNG、JPEG、GIF 等）
- 🔗 使用相对路径引用图片，便于管理

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

- 此插件仅支持 macOS 系统
- 需要授予 Obsidian 访问备忘录的权限
- 同步时会覆盖已存在的同名文件
