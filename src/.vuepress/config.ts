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
});
