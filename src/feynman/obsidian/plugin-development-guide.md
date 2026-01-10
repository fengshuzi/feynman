---
title: Obsidian 插件开发入门指南
date: 2026-01-10
category:
  - Obsidian
tag:
  - 插件开发
  - TypeScript
---

# Obsidian 插件开发入门指南

## 环境准备

开发 Obsidian 插件需要以下环境：

- Node.js (推荐 v16+)
- TypeScript
- Obsidian 应用

## 创建插件项目

```bash
# 克隆官方模板
git clone https://github.com/obsidianmd/obsidian-sample-plugin.git my-plugin
cd my-plugin

# 安装依赖
npm install
```

## 基本结构

```typescript
import { Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
  async onload() {
    console.log('插件加载');
    
    // 添加命令
    this.addCommand({
      id: 'my-command',
      name: '我的命令',
      callback: () => {
        console.log('命令执行');
      }
    });
  }

  onunload() {
    console.log('插件卸载');
  }
}
```

## 开发调试

1. 在 Obsidian 中打开开发者工具（Ctrl/Cmd + Shift + I）
2. 修改代码后运行 `npm run dev`
3. 重新加载插件查看效果

## 常用 API

- `this.app` - 访问 Obsidian 应用实例
- `this.addCommand()` - 添加命令
- `this.registerEvent()` - 注册事件监听
- `this.addRibbonIcon()` - 添加侧边栏图标

持续更新中...
