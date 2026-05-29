---
title: "Keyword Notes Editor - 在 Obsidian 中像 Logseq 一样用标签管理笔记"
date: 2026-05-29
category:
  - Obsidian
tag:
  - 插件
  - 效率工具
  - 知识管理
---

# Keyword Notes Editor - 在 Obsidian 中像 Logseq 一样用标签管理笔记

如果你同时使用 Logseq 和 Obsidian，一定会被 Logseq 的标签视图功能吸引——点击一个标签，所有相关笔记一目了然。然而当你在 Obsidian 中工作时，这个功能却缺失了。

**Keyword Notes Editor** 正是为了填补这个空白而生的插件。它将 Logseq 的标签视图体验带入了 Obsidian，让你可以用关键词、文件夹、甚至多标签聚合来组织和浏览笔记。

## 插件地址

- **GitHub**: https://github.com/fengshuzi/keyword-notes-editor
- **Obsidian 社区市场**: 搜索 `Keyword Notes Editor` 或 `fengshuzi`

## 核心功能

### 关键词侧边栏

配置你关心的关键词后，它们会出现在左侧边栏。点击任意关键词，所有带该标签的笔记就会在一个可滚动视图中展示出来——不需要切换标签页，不需要来回翻找。

```
配置格式: tag|显示名|图标
示例: work|工作|💼,project|项目|📋
```

### 多级子标签树

如果你的标签体系有层级结构（如 `test/work/meeting`），插件会自动识别并构建可折叠的树状导航。展开父标签可以浏览子标签，点击叶子标签则精准筛选。

### 标签聚合查询

通过 `+` 分隔符组合多个标签，可以实现「或」查询——命中任一标签的笔记都会被纳入：

```
p1+p2+p3+p4|四象限
```

点击「四象限」，所有标记了 `p1`、`p2`、`p3` 或 `p4` 的笔记都会显示出来。

### 文件夹视角

除了标签，你还可以在侧边栏添加文件夹路径。一键查看某个目录下所有笔记，特别适合项目文档管理：

```
配置格式: path|显示名|图标
示例: projects/work|工作项目|📁,archive|归档|🗄️
```

### 时间筛选

用顶部的日历图标按时间范围筛选笔记：本周、上月、本季度，甚至自定义日期区间。

### 批量浏览与编辑

所有匹配的笔记会在一个页面中按顺序展示。你可以用上下方向键在笔记之间快速跳转，可以展开/折叠所有笔记，可以隐藏 frontmatter 和反向链接——界面完全可定制。

## 典型使用场景

| 场景 | 配置 | 操作 |
|------|------|------|
| 周回顾 | 日记文件夹 | 点击即看本周所有日记 |
| 项目管理 | `project/work` | 聚合一个项目的所有相关笔记 |
| 优先级整理 | `p1+p2+p3+p4` | 四象限法分类的任务总览 |
| 写作素材 | `idea+draft+writing` | 收集某个主题的所有草稿和成品 |
| 归档整理 | `archive/2024` | 按年份归档的旧笔记浏览 |

## 安装

> 该插件已上架 Obsidian 社区市场。打开 **设置 → 第三方插件 → 浏览**，搜索 **Keyword Notes Editor** 或 **fengshuzi** 即可一键安装。

### 从 GitHub 手动安装

1. 前往 [Releases](https://github.com/fengshuzi/keyword-notes-editor/releases) 下载最新版
2. 下载 `main.js`、`manifest.json`、`styles.css` 三个文件
3. 放入 vault 的 `.obsidian/plugins/keyword-notes-editor/` 目录
4. 重启 Obsidian 并启用插件

### 从源码构建

```bash
git clone https://github.com/fengshuzi/keyword-notes-editor.git
cd keyword-notes-editor
npm install
npm run build
```

## 配置示例

打开插件设置，填入你的关键词和文件夹配置：

```
# 关键词（标签）
work|工作|💼,project|项目|📋,p1+p2+p3+p4|四象限|🎯

# 文件夹
journal|日记|📓,projects|项目文档|📁
```

保存后，侧边栏就会出现对应的入口。

## 结语

Keyword Notes Editor 将 Logseq 的标签视图体验完整地移植到了 Obsidian。无论你是需要做周回顾、整理项目文档，还是按主题聚合素材，这个插件都能显著提升笔记浏览效率。配合键盘导航和折叠/展开功能，即使面对大量笔记也能从容应对。

---

💡 **试试看**: 从 Obsidian 社区市场安装后，先配置一个你最常用的标签或文件夹，感受一下「一键总览」的体验。
