import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "alfred小手段",
      icon: "creative",
      prefix: "feynman/alfred",
      collapsible: true,
      children: "structure",
    },
    {
      text: "随笔杂谈",
      icon: "note",
      collapsible: true,
      prefix: "feynman/diary/",
      children: "structure",
    },
    {
      text: "运动健身",
      icon: "note",
      collapsible: true,
      prefix: "feynman/sport/",
      children: "structure",
    },
    {
      text: "Obsidian 插件",
      icon: "plugin",
      collapsible: true,
      prefix: "feynman/obsidian/",
      children: "structure",
    },
    {
      text: "Logseq 二次开发",
      icon: "code",
      collapsible: true,
      prefix: "feynman/logseq/",
      children: "structure",
    },
    "about"
  ],
});