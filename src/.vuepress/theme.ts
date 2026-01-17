import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://www.fengshuzi.com",

  author: {
    name: "程序员费曼",
    url: "https://www.fengshuzi.com",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "fengshuzi/feynman",

  docsDir: "src",
  prev: false,

  next: false,
  lastUpdated: false,
  contributors: false,

  editLink: false,
  blog: {
    medias: {
      Baidu: "https://example.com",
      Zhihu: "https://example.com"
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "程序员费曼",



      displayFooter: true,

      blog: {
        description: "分享java小手段",
        intro: "about.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    }

  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"]
    },
  },

  plugins: {
    blog: true,
    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      // presentation: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

  },
});
