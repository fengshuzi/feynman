---
title: Obsidian AI Search - 一键多 AI 搜索插件
date: 2026-03-17
category:
  - Obsidian
tag:
  - 插件开发
  - TypeScript
  - AI
  - 油猴脚本
---

# Obsidian AI Search - 一键多 AI 搜索插件

在 Obsidian 中一键打开多个 AI 搜索引擎（DeepSeek、ChatGPT、Kimi、腾讯元宝、Grok、Gemini），配合油猴脚本实现自动填充问题并提交。

## 下载地址

- **GitHub**: https://github.com/fengshuzi/obsidian-ai-search
- **油猴脚本**: 见本文底部

## 功能特性

- 🔍 **一键多搜**：输入问题后同时打开多个 AI 网站
- 🌐 **系统浏览器**：默认使用系统默认浏览器，也可选择 Obsidian 内部浏览器
- ✅ **追问模式**：支持 URL 带 `append` 参数，用于追问场景
- 📝 **选中即搜**：选中文字后点击侧边栏图标或右键菜单直接搜索
- ⚙️ **可配置网站**：支持启用/禁用、添加自定义 AI 网站
- 🖥️ **跨平台**：支持 macOS、Windows、Linux

## 使用方法

### 安装

1. 从 GitHub Release 下载 `main.js`、`manifest.json`、`styles.css`
2. 复制到 Obsidian vault 的 `.obsidian/plugins/ai-search/` 目录
3. 在 Obsidian 设置中启用插件

### 基本使用

1. **侧边栏图标**：点击左侧边栏的 🧠 图标
2. **命令面板**：`Cmd/Ctrl + P` → 搜索 "AI Search"
3. **选中搜索**：选中文字 → 右键 → "🔍 AI 搜索"

### 配置项

在 **设置 → AI Search** 中：

- **使用 Obsidian 内部浏览器**：开启后在 Obsidian 内打开链接，关闭则使用系统浏览器
- **AI 网站列表**：启用/禁用各个 AI 网站
- **添加自定义网站**：填写网站名称、URL、查询参数

## 技术实现

### URL 参数方案

插件通过 URL 参数传递问题：

```
https://chat.deepseek.com/?q=你的问题
https://chatgpt.com/?q=你的问题
https://kimi.moonshot.cn/?q=你的问题
https://yuanbao.tencent.com/chat/naQivTmsDa?q=你的问题
https://grok.com/?q=你的问题
https://gemini.google.com/?q=你的问题
```

追问模式会额外带上 `append` 参数：

```
https://yuanbao.tencent.com/chat/naQivTmsDa?q=你的问题&append=你的问题
```

### 油猴脚本配合

由于各 AI 网站不会自动读取 URL 参数并填充，需要配合油猴脚本实现：

1. 读取 URL 中的 `q` 参数
2. 找到输入框元素
3. 填充问题内容
4. 自动点击发送按钮

---

## 油猴脚本

### 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 创建新脚本，粘贴以下代码
3. 保存即可

### 完整脚本

```javascript
// ==UserScript==
// @name         AI Auto Ask Universal v8.0 Strategy
// @namespace    ai-auto-ask
// @version      8.0
// @description  策略模式：每个 AI 独立实现，Kimi Lexial 兼容
// @match        https://grok.com/*
// @match        https://www.grok.com/*
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @match        https://chat.deepseek.com/*
// @match        https://www.kimi.com/*
// @match        https://kimi.moonshot.cn/*
// @match        https://yuanbao.tencent.com/*
// @match        https://gemini.google.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const host = location.hostname;

    if (/kimi\.moonshot\.cn|www\.kimi\.com/.test(host)) {
        const query = new URLSearchParams(location.search).get('q');
        if (!query) return;
        runKimi(query);
        return;
    }

    // ========== 其它 AI：通用逻辑 ==========
    const url = new URL(window.location.href);
    const prompt = url.searchParams.get("q") || url.searchParams.get("prompt");
    if (!prompt) return;

    const runKey = "ai_auto_asked_" + location.pathname + "?" + prompt;
    if (sessionStorage.getItem(runKey)) return;
    sessionStorage.setItem(runKey, "1");
    const text = decodeURIComponent(prompt);

    if (/grok\.com/.test(host)) {
        runGrok();
        return;
    }
    if (/chatgpt\.com|chat\.openai\.com/.test(host)) {
        runChatGPT();
        return;
    }
    if (/chat\.deepseek\.com/.test(host)) {
        runDeepSeek();
        return;
    }
    if (/yuanbao\.tencent\.com/.test(host)) {
        runYuanBao();
        return;
    }
    if (/gemini\.google\.com/.test(host)) {
        runGemini();
        return;
    }

    // ========== Kimi 策略（完全独立实现，与 standalone 逻辑一致） ==========
    function runKimi(query) {
        console.log('[Kimi脚本] 检测到参数 q:', decodeURIComponent(query));

        const interval = setInterval(() => {
            // 精确选择器：基于实际 DOM 结构
            const input = document.querySelector('.chat-input-editor');
            const sendContainer = document.querySelector('.send-button-container');

            if (!input || !sendContainer) return;

            clearInterval(interval);

            const text = decodeURIComponent(query);

            // 填入内容（使用 Lexical 编辑器兼容方式）
            input.focus();

            // 清除现有内容
            input.innerHTML = `<p dir="ltr"><span data-lexical-text="true">${text.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span></p>`;

            // 触发输入事件（React/Lexical 需要）
            input.dispatchEvent(new InputEvent('input', {
                bubbles: true,
                data: text,
                inputType: 'insertText'
            }));

            // 触发 compositionend（某些富文本编辑器需要）
            input.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true }));

            console.log('[Kimi脚本] 已填入内容');

            // 延迟点击发送按钮容器
            setTimeout(() => {
                // 点击 send-button-container（不是 SVG 本身）
                const clickEvent = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                sendContainer.dispatchEvent(clickEvent);

                console.log('[Kimi脚本] 已触发发送');
            }, 800);

        }, 300);

        setTimeout(() => clearInterval(interval), 10000);
    }

    // ========== Grok 策略（完全独立实现） ==========
    function runGrok() {
        const isSession = /^\/c\/[a-zA-Z0-9-]+/.test(location.pathname);

        function grokFindInput() {
            const nodes = document.querySelectorAll("textarea, .ProseMirror, .tiptap, div[contenteditable='true']");
            if (!nodes.length) return null;
            if (isSession) {
                let best = nodes[0], maxBottom = 0;
                nodes.forEach(el => {
                    if (!el || el.offsetParent === null || el.disabled) return;
                    const rect = el.getBoundingClientRect();
                    if (rect.bottom > maxBottom) {
                        maxBottom = rect.bottom;
                        best = el;
                    }
                });
                return best;
            }
            for (const el of nodes) {
                if (!el || el.offsetParent === null || el.disabled) continue;
                return el;
            }
            return null;
        }

        function grokFindSend() {
            return document.querySelector("button[type='submit']:not([disabled])");
        }

        function grokSetInput(el) {
            if (!el) return;
            el.focus();
            const tag = el.tagName;
            if (tag === "TEXTAREA" || tag === "INPUT") {
                const setter = Object.getOwnPropertyDescriptor(el.__proto__, "value")?.set;
                if (setter) setter.call(el, text);
                else el.value = text;
            } else {
                el.innerHTML = text;
            }
            el.dispatchEvent(new Event("input", { bubbles: true }));
        }

        function grokTrySend() {
            const input = grokFindInput();
            if (!input) {
                setTimeout(grokTrySend, 500);
                return;
            }
            grokSetInput(input);
            const btn = grokFindSend();
            setTimeout(() => (btn ? btn.click() : input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", bubbles: true }))), 400);
        }

        const obs = new MutationObserver((_, o) => {
            if (grokFindInput()) {
                grokTrySend();
                o.disconnect();
            }
        });
        obs.observe(document.body, { childList: true, subtree: true });
        setTimeout(grokTrySend, isSession ? 2000 : 1000);
    }

    // ========== ChatGPT 策略（完全独立实现） ==========
    function runChatGPT() {
        function chatgptFindInput() {
            const sel = ["#prompt-textarea", "textarea", "[role='textbox']", "div[contenteditable='true']"];
            for (const s of sel) {
                const el = document.querySelector(s);
                if (el && el.offsetParent !== null && !el.disabled) return el;
            }
            return null;
        }

        function chatgptFindSend() {
            return Array.from(document.querySelectorAll("button")).find(b => !b.disabled && /(发送|send|提交)/i.test(b.textContent));
        }

        function chatgptSetInput(el) {
            if (!el) return;
            el.focus();
            const tag = el.tagName;
            if (tag === "TEXTAREA" || tag === "INPUT") {
                const setter = Object.getOwnPropertyDescriptor(el.__proto__, "value")?.set;
                if (setter) setter.call(el, text);
                else el.value = text;
            } else {
                el.innerHTML = text;
            }
            el.dispatchEvent(new Event("input", { bubbles: true }));
        }

        function chatgptTrySend() {
            const input = chatgptFindInput();
            if (!input) {
                setTimeout(chatgptTrySend, 500);
                return;
            }
            chatgptSetInput(input);
            const btn = chatgptFindSend();
            setTimeout(() => (btn ? btn.click() : input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", bubbles: true }))), 400);
        }

        const obs = new MutationObserver((_, o) => {
            if (chatgptFindInput()) {
                chatgptTrySend();
                o.disconnect();
            }
        });
        obs.observe(document.body, { childList: true, subtree: true });
        setTimeout(chatgptTrySend, 1000);
    }

    // ========== DeepSeek 策略（完全独立实现） ==========
    function runDeepSeek() {
        function deepseekFindInput() {
            const sel = ["#search-bar .ql-editor", ".ql-editor[data-placeholder*='有问题']", ".ql-editor", "textarea", "[role='textbox']", "div[contenteditable='true']"];
            for (const s of sel) {
                const el = document.querySelector(s);
                if (el && el.offsetParent !== null && !el.disabled) return el;
            }
            return null;
        }

        function deepseekFindSend() {
            return Array.from(document.querySelectorAll("button")).find(b => !b.disabled && /(发送|send|提交)/i.test(b.textContent));
        }

        function deepseekSetInput(el) {
            if (!el) return;
            el.focus();
            const tag = el.tagName;
            if (tag === "TEXTAREA" || tag === "INPUT") {
                const setter = Object.getOwnPropertyDescriptor(el.__proto__, "value")?.set;
                if (setter) setter.call(el, text);
                else el.value = text;
            } else {
                el.innerHTML = text;
            }
            el.dispatchEvent(new Event("input", { bubbles: true }));
        }

        function deepseekTrySend() {
            const input = deepseekFindInput();
            if (!input) {
                setTimeout(deepseekTrySend, 500);
                return;
            }
            deepseekSetInput(input);
            const btn = deepseekFindSend();
            setTimeout(() => (btn ? btn.click() : input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", bubbles: true }))), 400);
        }

        const obs = new MutationObserver((_, o) => {
            if (deepseekFindInput()) {
                deepseekTrySend();
                o.disconnect();
            }
        });
        obs.observe(document.body, { childList: true, subtree: true });
        setTimeout(deepseekTrySend, 1000);
    }

    // ========== 元宝 策略（完全独立实现） ==========
    function runYuanBao() {
        function yuanbaoFindInput() {
            const sel = ["textarea", ".ql-editor", "[role='textbox']", "div[contenteditable='true']"];
            for (const s of sel) {
                const el = document.querySelector(s);
                if (el && el.offsetParent !== null && !el.disabled) return el;
            }
            return null;
        }

        function yuanbaoFindSend() {
            return Array.from(document.querySelectorAll("button")).find(b => !b.disabled && /(发送|send|提交)/i.test(b.textContent));
        }

        function yuanbaoSetInput(el) {
            if (!el) return;
            el.focus();
            const tag = el.tagName;
            if (tag === "TEXTAREA" || tag === "INPUT") {
                const setter = Object.getOwnPropertyDescriptor(el.__proto__, "value")?.set;
                if (setter) setter.call(el, text);
                else el.value = text;
            } else {
                el.innerHTML = text;
            }
            el.dispatchEvent(new Event("input", { bubbles: true }));
        }

        function yuanbaoTrySend() {
            const input = yuanbaoFindInput();
            if (!input) {
                setTimeout(yuanbaoTrySend, 500);
                return;
            }
            yuanbaoSetInput(input);
            const btn = yuanbaoFindSend();
            setTimeout(() => (btn ? btn.click() : input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", bubbles: true }))), 400);
        }

        const obs = new MutationObserver((_, o) => {
            if (yuanbaoFindInput()) {
                yuanbaoTrySend();
                o.disconnect();
            }
        });
        obs.observe(document.body, { childList: true, subtree: true });
        setTimeout(yuanbaoTrySend, 1000);
    }

    // ========== Gemini 策略（execCommand insertText + 点击发送，提交后清除 URL 参数） ==========
    function runGemini() {
        function autoSubmit() {
            const editor = document.querySelector('div[contenteditable="true"], textarea');

            if (editor && editor.offsetParent !== null) {
                editor.focus();
                document.execCommand('insertText', false, text);
                editor.dispatchEvent(new Event('input', { bubbles: true }));

                setTimeout(() => {
                    const finalSendButton = document.querySelector('button[aria-label*="发送"], button[aria-label*="Send"]');
                    if (finalSendButton && !finalSendButton.disabled && finalSendButton.getAttribute('aria-disabled') !== 'true') {
                        finalSendButton.click();
                        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                        window.history.replaceState({ path: newUrl }, '', newUrl);
                    }
                }, 500);
                return true;
            }
            return false;
        }

        const checkTimer = setInterval(() => {
            if (autoSubmit()) clearInterval(checkTimer);
        }, 500);
        setTimeout(() => clearInterval(checkTimer), 10000);
    }

})();
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

## 许可证

MIT
