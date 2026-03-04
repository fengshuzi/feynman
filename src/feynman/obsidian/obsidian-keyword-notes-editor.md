---
title: Obsidian 多笔记编辑器插件
date: 2026-03-04
category:
  - Obsidian
tag:
  - 插件开发
  - TypeScript
  - 效率工具
---

# Keyword Notes Editor

基于关键词标签查看和编辑多篇笔记的 Obsidian 插件，类似 Logseq 的标签视图功能，让你在一个页面内同时编辑多篇笔记。

## 为什么开发这个插件？

在使用 Obsidian 进行知识管理时，经常会遇到需要同时查看和编辑多篇相关笔记的场景：

- **周回顾**：想查看本周所有日记
- **项目整理**：需要编辑某个文件夹下的所有笔记
- **标签管理**：查看带有特定标签的所有内容

Obsidian 原生不支持在一个页面内同时编辑多篇笔记，需要来回切换。这个插件就是为了解决这个问题而开发的。

## 功能特性

### 核心功能

- 📝 **多笔记编辑**：在一个页面内同时编辑多篇笔记，无需切换
- 📅 **日记视图**：快速查看和编辑日记笔记
- 📁 **文件夹视图**：查看特定文件夹下的所有笔记
- 🏷️ **标签视图**：查看带有特定标签的所有笔记

### 时间筛选

- 本周、上周
- 本月、上月
- 本年、去年
- 本季度、上季度
- 全部笔记
- 自定义日期范围

### 快捷操作

- ⏰ **日记按钮**：快速查看最近N天或本周的日记
- 🎯 **自定义预设**：保存常用的文件夹或标签配置
- ⌨️ **键盘导航**：使用上下键在笔记间快速导航

### 显示选项

- 隐藏 frontmatter
- 隐藏反向链接
- 自定义排序（按创建时间/修改时间）

## 系统要求

- Obsidian 1.2.8 或更高版本

## 安装

### 方式一：从 GitHub Release 安装（推荐）

1. 前往 [Releases](https://github.com/你的用户名/keyword-notes-editor/releases) 页面下载最新版本
2. 下载以下文件：
   - `main.js`
   - `manifest.json`
   - `styles.css`
3. 在你的 Obsidian 库中创建插件目录：`.obsidian/plugins/keyword-notes-editor/`
4. 将下载的文件复制到该目录
5. 重启 Obsidian 或刷新插件列表
6. 在设置中启用"Keyword Notes Editor"插件

### 方式二：手动编译

```bash
cd /path/to/your/vault/.obsidian/plugins
git clone https://github.com/你的用户名/keyword-notes-editor.git
cd keyword-notes-editor
npm install
npm run build
```

## 使用方法

### 打开编辑器

- 点击左侧边栏的日历图标
- 或使用命令面板搜索 "Open Daily Notes Editor"

### 日记快捷按钮

侧边栏提供两个快捷按钮：

- **📔 按钮**：查看最近N天的日记（默认3天，可在设置中配置）
- **📅 按钮**：查看本周的日记

### 视图模式切换

1. **日记模式**：查看日记笔记
2. **文件夹模式**：查看特定文件夹下的笔记
3. **标签模式**：查看带有特定标签的笔记

### 保存预设

将当前的文件夹或标签选择保存为预设，方便下次快速访问。

### 右键菜单

在文件浏览器中右键点击文件夹，可以快速在编辑器中打开该文件夹的所有笔记。

## 设置选项

| 选项 | 说明 |
|------|------|
| 隐藏 frontmatter | 在日记中隐藏 frontmatter |
| 隐藏反向链接 | 在日记中隐藏反向链接 |
| 启动时打开 | Obsidian 启动时自动创建今日日记并打开编辑器 |
| 最近天数 | 配置"最近N天"按钮显示的天数（默认3天） |
| 显示关键词按钮 | 是否在侧边栏显示关键词/文件夹按钮 |

## 特殊功能

### journals 文件夹优化

当查看 `journals` 文件夹时，插件会：

- 根据文件名日期（yyyy-mm-dd.md）进行筛选
- 而不是根据文件修改时间
- 确保日记按正确的日期范围显示

## 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 部署到本地vault
npm run deploy

# 发布到GitHub
npm run release
```

## 技术实现

- TypeScript + Obsidian API
- 响应式 UI 设计
- 基于 Hover Editor 的工作区叶子生成
- 使用 Obsidian Daily Notes Interface 处理日记

## 致谢

- [Hover Editor](https://github.com/nothingislost/obsidian-hover-editor)：工作区叶子生成代码
- [Obsidian Daily Notes Interface](https://github.com/liamcain/obsidian-daily-notes-interface)：日记API

## 许可证

MIT

---

📝 **开始在一个页面编辑多篇笔记吧！**
