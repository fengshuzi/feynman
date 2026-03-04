---
title: Alfred - Mac 效率神器入门指南
date: 2026-03-04
category:
  - Alfred
tag:
  - 效率工具
  - Mac
  - 自动化
---

# Alfred - Mac 效率神器入门指南

Alfred 是 macOS 平台上最著名的效率提升工具，被誉为"Mac 用户的必备神器"。本文将介绍 Alfred 的核心功能、使用技巧以及类似的替代软件。

## 什么是 Alfred？

Alfred 是一款用于 macOS 的生产力应用，它通过键盘快捷键快速启动应用、搜索文件、执行各种自动化操作。它的核心理念是：**让手不离开键盘，高效完成各种操作**。

### 核心价值

- ⚡ **极速启动**：快捷键呼出，无需鼠标点击
- 🔍 **全局搜索**：快速查找文件、应用、网页书签
- 🤖 **工作流自动化**：通过 Workflow 实现复杂自动化
- 📋 **剪贴板历史**：管理复制粘贴历史
- ⌨️ **文本片段**：快速输入常用文本

## 核心功能详解

### 1. 应用启动器

最基本的用法：按快捷键（默认 `Cmd + Space`）呼出 Alfred，输入应用名称的首字母即可快速启动应用。

```
输入：chr → 回车
结果：启动 Chrome 浏览器
```

### 2. 文件搜索与操作

Alfred 可以快速搜索文件并执行操作：

- `find 文件名`：搜索文件并在 Finder 中显示
- `open 文件名`：直接打开文件
- `in 文件名`：在文件中搜索内容

### 3. Web 搜索

自定义搜索引擎，快速搜索：

```
google 关键词     → Google 搜索
baidu 关键词      → 百度搜索
gh 关键词         → GitHub 搜索
```

### 4. 计算器

直接输入数学表达式进行计算：

```
输入：123 * 45 + 678
结果：6213
```

### 5. 词典

快速查词：

```
define programming
```

### 6. 系统命令

控制系统功能：

- `lock`：锁屏
- `sleep`：休眠
- `emptytrash`：清空废纸篓
- `screensaver`：启动屏幕保护
- `eject`：弹出磁盘

### 7. 剪贴板历史（Powerpack）

保留剪贴板历史记录，随时调用之前复制的内容：

- 快捷键查看剪贴板历史
- 支持文本、图片等多种格式
- 可设置保留条数和时间

### 8. 文本片段（Snippets）

快速插入常用文本：

```
输入：;email
展开为：your-email@example.com
```

### 9. 工作流（Workflows）

Alfred 最强大的功能，可以创建复杂的自动化工作流：

- **触发器**：热键、关键词、文件变化等
- **动作**：打开应用、运行脚本、发送通知等
- **条件**：根据条件执行不同分支

## 使用技巧

### 自定义关键词

为常用操作设置简短的关键词：

| 关键词 | 功能 |
|--------|------|
| `ip` | 显示本机 IP 地址 |
| `time` | 显示当前时间 |
| `date` | 显示当前日期 |
| `dl` | 下载剪贴板中的链接 |

### 搜索引擎配置

在 Features → Web Search 中添加自定义搜索：

```
关键词：bd
搜索 URL：https://www.baidu.com/s?wd={query}
```

使用：`bd 搜索内容`

### 文件过滤器

设置特定文件夹的快速访问：

```
关键词：doc
路径：~/Documents
```

使用：`doc 文件名` 直接搜索文档文件夹

## 类似软件推荐

除了 Alfred，macOS 平台还有其他优秀的启动器/效率工具：

### Raycast

[Raycast](https://www.raycast.com/) 是目前最流行的 Alfred 替代品。

**优势：**
- 🎨 现代化 UI 设计
- 🤖 内置 AI 功能
- 🔌 丰富的扩展商店
- 👥 团队协作功能
- 💰 免费版功能已足够强大

**适合人群：** 喜欢现代化界面、需要 AI 功能的年轻用户

**价格：** 免费版 / Pro 版 $12/月

---

### LaunchBar

[LaunchBar](https://www.obdev.at/products/launchbar/index.html) 是 Alfred 的老牌竞争对手。

**优势：**
- 📁 强大的文件浏览功能
- ⌨️ 缩写快速启动（输入应用首字母缩写）
- 📋 剪贴板和文本片段管理
- 🔧 AppleScript 集成

**适合人群：** 传统 Mac 用户、文件操作频繁的用户

**价格：** $29（买断制）

---

### Spotlight

macOS 系统自带的搜索工具，近年来越来越强大。

**优势：**
- 💰 完全免费
- 🔒 系统级集成
- 🔍 文件搜索能力强
- 📱 跨设备搜索

**适合人群：** 轻度用户、不想安装额外软件的用户

**价格：** 免费

---

### Quicksilver

[Quicksilver](https://qsapp.com/) 是开源的 Mac 启动器先驱。

**优势：**
- 🔓 开源免费
- 🔌 插件系统
- ⚙️ 高度可定制

**适合人群：** 开源爱好者、喜欢折腾的用户

**价格：** 免费开源

---

### uBar

[uBar](https://brawersoftware.com/products/ubar) 主要作为 Dock 替代品，但也包含启动功能。

**优势：**
- 📌 Dock 替代
- 🪟 窗口管理
- 📊 任务管理器风格

**适合人群：** 从 Windows 转到 Mac 的用户

**价格：** $30/年

---

## 功能对比

| 功能 | Alfred | Raycast | LaunchBar | Spotlight |
|------|--------|---------|-----------|-----------|
| 应用启动 | ✅ | ✅ | ✅ | ✅ |
| 文件搜索 | ✅ | ✅ | ✅ | ✅ |
| Web 搜索 | ✅ | ✅ | ✅ | ✅ |
| 剪贴板历史 | 💰 | ✅ | ✅ | ❌ |
| 文本片段 | ✅ | ✅ | ✅ | ❌ |
| 工作流/扩展 | 💰 | ✅ | ✅ | ❌ |
| AI 功能 | ❌ | ✅ | ❌ | ✅(Apple Intelligence) |
| 价格 | 免费/£34 | 免费/$12/月 | $29 | 免费 |

💰 = 需要付费版本

## 我的推荐

1. **轻度用户**：使用系统自带的 Spotlight 即可
2. **重度用户**：Alfred 或 Raycast 二选一
   - 喜欢传统稳定 → **Alfred**
   - 喜欢现代 UI 和 AI → **Raycast**
3. **文件操作多**：LaunchBar 的文件浏览更强大
4. **预算有限**：Raycast 免费版功能已经很强大

## 相关链接

- [Alfred 官网](https://www.alfredapp.com/)
- [Alfred Workflow 仓库](https://awesomeopensource.com/projects/alfred-workflow)
- [Raycast 官网](https://www.raycast.com/)
- [LaunchBar 官网](https://www.obdev.at/products/launchbar/index.html)
