---
title: Logseq 插件开发基础
date: 2026-01-10
category:
  - Logseq
tag:
  - 插件开发
  - JavaScript
---

# Logseq 插件开发基础

## 环境搭建

开发 Logseq 插件需要：

- Node.js
- pnpm 或 npm
- Logseq 应用

## 创建插件

```bash
# 使用官方脚手架
npx @logseq/create-plugin my-plugin
cd my-plugin

# 安装依赖
pnpm install
```

## 插件入口

```javascript
import '@logseq/libs';

const main = () => {
  console.log('Logseq 插件加载');
  
  // 注册命令
  logseq.Editor.registerSlashCommand('我的命令', async () => {
    await logseq.Editor.insertAtEditingCursor('Hello Logseq!');
  });
  
  // 注册快捷键
  logseq.App.registerCommandPalette({
    key: 'my-command',
    label: '我的命令',
    keybinding: {
      binding: 'mod+shift+m'
    }
  }, async () => {
    console.log('快捷键触发');
  });
};

logseq.ready(main).catch(console.error);
```

## 开发调试

1. 运行 `pnpm dev` 启动开发模式
2. 在 Logseq 中加载插件目录
3. 修改代码后自动重新加载

## 常用 API

- `logseq.Editor` - 编辑器操作
- `logseq.App` - 应用级操作
- `logseq.DB` - 数据库查询
- `logseq.UI` - 界面操作

## 发布插件

```bash
# 构建
pnpm build

# 发布到 Logseq 市场
# 提交 PR 到 https://github.com/logseq/marketplace
```

持续更新中...
