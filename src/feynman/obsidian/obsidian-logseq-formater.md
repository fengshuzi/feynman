---
title: Logseq Formater - 自动转换 Logseq 语法到 Obsidian
subtitle: 块引用渲染、块 ID 转换、LOGBOOK 汇总、TODO 三种渲染模式
date: 2026-07-06
category:
  - Obsidian
tag:
  - 插件开发
  - TypeScript
  - Logseq
  - Markdown
---

# Logseq Formater

一个 Obsidian 插件，用于自动将 Logseq 语法转换为 Markdown，让你从 Logseq 迁移到 Obsidian 时无需手动修改大量笔记。

## 为什么开发这个插件？

Logseq 和 Obsidian 都是优秀的知识管理工具，但两者的语法有一些差异：

- **块引用**：Logseq 使用 `((block-id))`，Obsidian 使用 `^block-id`
- **块 ID**：Logseq 使用 `id:: block-id`，Obsidian 使用 `^block-id`
- **LOGBOOK**：Logseq 用 `:LOGBOOK:` 记录时间，Obsidian 没有原生支持
- **TODO**：Logseq 使用 `TODO` / `DOING` / `DONE`，Obsidian 使用 Markdown 复选框

这个插件在打开 Markdown 文件时自动完成这些转换，减少迁移成本。

## 功能特性

### 块引用渲染

将 Logseq 的 `((block-id))` 渲染为可点击的块内容预览，支持阅读视图和编辑视图实时预览。

```markdown
- 参见 ((a1b2c3d4-1234-1234-1234-123456789abc))
```

渲染效果会显示目标块的实际内容，并附带 ↗ 图标。

### 块 ID 转换

自动将 Logseq 的 `id:: block-id` 转换为 Obsidian 的 `^block-id`：

```markdown
# 转换前
- 这是一个重要块
  id:: a1b2c3d4-1234-1234-1234-123456789abc

# 转换后
- 这是一个重要块 ^a1b2c3d4-1234-1234-1234-123456789abc
```

### LOGBOOK 时间汇总

把 `:LOGBOOK:` 下的多个 `CLOCK` 时长汇总，追加到 `DONE` 任务后面：

```markdown
# 转换前
- DONE 写文档
  :LOGBOOK:
  CLOCK: [2024-01-01 10:00]--[2024-01-01 11:30] => 01:30:00
  :END:

# 转换后
- DONE 写文档 1小时30分钟
```

### TODO 三种渲染模式

在插件设置中可选择 Logseq 的 `TODO` / `DOING` / `DONE` 如何显示：

- **保留原样**：显示为原始的 `TODO` / `DOING` / `DONE` 文本。
- **渲染为任务（推荐）**：在阅读视图中显示为带状态标签的任务复选框，不会修改笔记原文。
- **转换为标准 Markdown 复选框**：打开文件时将 `TODO` / `DOING` 转为 `- [ ]`，`DONE` 转为 `- [x]`，会修改笔记原文。

## 安装方法

### 从 Obsidian 社区市场安装（推荐）

打开 Obsidian 设置 → 社区插件 → 浏览，搜索 **Logseq Formater** 或 **fengshuzi** 即可安装。

### 从 GitHub Release 安装

1. 前往 [Releases](https://github.com/fengshuzi/logseq-formater/releases) 页面下载最新版本
2. 下载以下文件：
   - `main.js`
   - `manifest.json`
   - `styles.css`
3. 在库中创建 `.obsidian/plugins/logseq-formater/`
4. 将上述文件放入该目录
5. 重启 Obsidian 或重新加载插件，在设置中启用「Logseq Formater」

### 手动构建

```bash
cd logseq-formater
npm install
npm run build
# 将 dist/ 下文件复制到 .obsidian/plugins/logseq-formater/
```

## 使用方法

启用插件后，打开任何包含 Logseq 语法的 Markdown 文件，插件会自动进行转换。

### 设置 TODO 渲染方式

1. 打开 Obsidian 设置
2. 进入「第三方插件 → Logseq Formater」
3. 选择「TODO 渲染方式」：
   - 保留原样
   - 渲染为任务（推荐）
   - 转换为标准 Markdown 复选框

## 开发

```bash
# 开发模式
npm run dev

# 构建
npm run build

# 部署到本地 vault
npm run deploy

# 发布到 GitHub
npm run release
```

## 许可证

MIT
