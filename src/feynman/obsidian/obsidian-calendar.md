
---
title: Obsidian 日历 同步插件
date: 2026-01-10
category:
  - Obsidian
tag:
  - 插件开发
  - TypeScript
---
# Obsidian Calendar Plugin

macOS 系统日历集成插件，使用闪念笔记的交互方式。

## 功能特性

- ✅ 查询未来3天的日历事件
- ✅ 创建新的日历事件
- ✅ 编辑现有事件
- ✅ 删除事件
- ✅ 支持多个日历
- ✅ 支持全天事件
- ✅ 支持事件备注和位置
- ✅ Thino 风格的交互界面

## 系统要求

- macOS 系统
- Obsidian 1.2.8 或更高版本
- 需要授权访问系统日历

## 安装

1. 将插件文件复制到 vault 的 `.obsidian/plugins/obsidian-calendar/` 目录
2. 在 Obsidian 设置中启用插件
3. 首次使用时会请求日历访问权限

## 使用方法

### 打开日历视图

- 点击左侧边栏的日历图标
- 或使用命令面板：`打开日历事项`

### 添加事件

1. 在顶部输入框输入事件标题
2. 选择日历
3. 点击时间按钮设置开始和结束时间
4. 点击"添加"按钮

### 编辑事件

- 双击事件卡片进入编辑模式
- 或右键点击事件选择"编辑"

### 删除事件

- 右键点击事件选择"删除"
- 确认后删除

## 开发

### 构建

\`\`\`bash
npm install
npm run build
\`\`\`

### 开发模式

\`\`\`bash
npm run dev
\`\`\`

### 部署

\`\`\`bash
npm run build-deploy
\`\`\`

## 技术实现

- 使用 JXA (JavaScript for Automation) 访问 macOS EventKit
- 通过 osascript 执行 JXA 脚本
- TypeScript + Obsidian API
- 响应式 UI 设计

## 许可证

MIT
