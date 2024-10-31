import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "并发编程",
      icon: "note",
      collapsible: true,
      link: "concurrent/",
      prefix: "concurrent/",
      children: "structure",
    },
    {
      text: "alfred小手段",
      icon: "creative",
      prefix: "feynman/alfred",
      collapsible: true,
      link: "jvm/",
      children: "structure",
    },
    {
      text: "读书笔记",
      icon: "note",
      collapsible: true,
      prefix: "feynman/reading/",
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
    }

    ,
    "about"
  ],
});