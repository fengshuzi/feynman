---
title: AI Switch - AI 编程工具配置同步插件
date: 2026-06-13
category:
  - Obsidian
tag:
  - 插件开发
  - TypeScript
  - AI
  - 配置管理
---

# AI Switch - AI 编程工具配置同步插件

把本地 AI 编程工具的配置文件同步成 Markdown 快照存进你的 Vault，随时查看、多机器同步、一键回写。

## 为什么开发这个插件？

现在用 AI 编程工具的人越来越多，Codex、Claude Code、OpenCode 等工具各有各的配置文件，散落在系统的不同目录里。日常使用中我遇到了这些痛点：

- **配置分散**：`~/.codex/config.toml`、`~/.claude/settings.json`、`~/.config/opencode` 各管各的，想统一查看很麻烦
- **多机器同步**：公司电脑、家里电脑、笔记本，每台机器都要重新配置一遍，改了一台忘了另一台
- **无法追踪**：改了配置之后不知道改了什么，没有历史记录，回退困难
- **新手门槛高**：刚接触 AI 编程工具时，不知道这些配置文件在哪、长什么样

为了解决这些问题，我开发了 AI Switch。它把这些配置文件读取出来，转成 Markdown 快照存进 Obsidian Vault，让配置管理变得简单透明。

## 核心功能

### 📸 配置快照同步

- **一键同步**：点击侧边栏按钮，自动读取本地 AI 工具配置
- **Markdown 快照**：把配置文件内容存成 `.md` 文件，方便阅读和对比
- **自动分组**：按机器名和工具类型自动归类，结构清晰

快照目录结构如下：

```text
Config Manager/
└── zhang_aifende_macbook-air/
    ├── codex/
    │   └── config.toml.md
    ├── claude/
    │   └── settings.json.md
    └── opencode/
        └── opencode.json.md
```

### 🔄 双向同步

- **Sync to note**：把本地配置读取到 Vault 中
- **Apply to local**：把 Vault 中的快照回写到本地配置文件
- **安全回写**：回写前会弹窗确认，并自动创建带时间戳的备份文件，不怕误操作

### 🖥️ 多机器管理

- **自动识别**：根据机器名自动创建子目录，不同机器的配置互不干扰
- **集中查看**：所有机器的配置都在同一个 Vault 里，一目了然
- **Git 同步**：配合 Obsidian Git 插件，配置变更自动同步到所有设备

### 📁 灵活的文件源

- **预设工具**：内置 Codex、Claude、OpenCode 三个常用工具的默认路径
- **文件夹导入**：支持递归导入 `.toml`、`.json`、`.yaml`、`.yml` 文件
- **自定义路径**：配置文件不在默认位置？在设置里改路径即可
- **自动跳过**：路径不存在时自动跳过，不会报错

## 使用方法

### 安装

1. 从 GitHub Release 下载 `main.js`、`manifest.json`、`styles.css`
2. 复制到 Obsidian Vault 的 `.obsidian/plugins/ai-switch/` 目录
3. 在 Obsidian 设置中启用插件

### 基本操作

1. **启用插件**：安装后在设置中开启 AI Switch
2. **选择工具**：在设置里勾选需要同步的工具（Codex / Claude / OpenCode）
3. **打开侧边栏**：点击左侧边栏的 AI Switch 图标
4. **同步配置**：点击 `Sync to note` 读取本地配置到 Vault
5. **回写配置**：编辑快照后点击 `Apply to local` 写回本地（会自动备份）

### 配置项

在 **设置 → AI Switch** 中：

| 选项 | 说明 |
|------|------|
| Config root folder | 快照存放的根目录，默认 `Config Manager` |
| Codex | 同步 `~/.codex/config.toml` |
| Claude | 同步 `~/.claude/settings.json` |
| OpenCode | 同步 `~/.config/opencode` |

每个工具的路径都可以自定义，适配你的实际安装位置。

## 典型场景

### 场景一：多机器配置同步

你在公司电脑上调好了 Codex 的模型配置，想在家里电脑用同样的配置：

1. 公司电脑上点击 `Sync to note`，配置快照存入 Vault
2. Vault 通过 Git 同步到家里电脑
3. 家里电脑上点击 `Apply to local`，一键应用配置

### 场景二：配置版本管理

你修改了 Claude Code 的设置，改完发现不对想回退：

1. 每次同步都会覆盖快照，配合 Obsidian Git 可以看到配置的变更历史
2. `Apply to local` 会自动创建备份，随时可以回退

### 场景三：团队配置共享

团队成员想统一 AI 工具的配置标准：

1. 把快照目录放进共享 Vault
2. 每个人都能看到标准配置长什么样
3. 需要时 `Apply to local` 一键应用

## 安全说明

AI Switch 在设计上把安全放在第一位：

- **只读系统目录**：同步时只读取本地配置文件，不修改
- **回写需确认**：`Apply to local` 操作会弹窗确认
- **自动备份**：每次回写前自动创建带时间戳的备份文件
- **本地操作**：所有操作都在本地完成，不上传任何数据

## 技术栈

- **TypeScript**：类型安全的开发体验
- **Obsidian API**：深度集成 Vault 文件系统
- **ESBuild**：快速构建

## 下载地址

- **GitHub**: https://github.com/fengshuzi/ai-switch
- **社区插件页**: https://community.obsidian.md/plugins/ai-switch

## 路线图

AI Switch 目前是一个配置快照同步工具，后续计划：

- 🎯 内置常用 AI 编程工具的模型/服务商预设
- 🎯 帮助新手安全地切换模型配置
- 🎯 提供更完善的配置回写流程

## 许可证

MIT

---

**🤖 让 AI 编程工具的配置管理变得简单透明！**
