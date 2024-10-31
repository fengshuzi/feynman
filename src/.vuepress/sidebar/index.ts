import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
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
    }

    ,
    "about"
  ],
});