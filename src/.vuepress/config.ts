import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "漂泊者及其影子",
      description: "Talk is  not cheap,  code is cheap!!!",
    }
  },

  theme,

  shouldPrefetch: false,

  // Google AdSense 配置
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX',
        crossorigin: 'anonymous'
      }
    ]
  ],
});
