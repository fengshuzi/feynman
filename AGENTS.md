# AGENTS.md — feynman

VuePress documentation/blog site (feynman learning notes). **Not an Obsidian plugin.**

## Layout

- `src/` — VuePress source (markdown pages, config, theme)
- Uses `vuepress-theme-hope` theme
- `package.json` — project name is `java-tips` (legacy)

## Commands

```bash
npm run docs:dev        # vuepress dev src (local dev server with hot reload)
npm run docs:build      # vuepress build src (production build)
npm run docs:clean-dev  # vuepress dev src --clean-cache
```

## Build

- VuePress 2 (`vuepress` 2.0.0-beta.60)
- Theme: `vuepress-theme-hope` 2.0.0-beta.156
- Output goes to `src/.vuepress/dist/`

## Notes

- This is a content project, not a code project. No lint, no typecheck, no tests.
- Deployment is manual (no deploy/release scripts).
- The `package.json` name `java-tips` is a legacy name; the repo is `feynman`.

## 图文并茂标准（博客文章配图）

博客文章应图文并茂，避免大段纯文字。新写或更新文章时按以下约定配图：

- **什么时候配图**：介绍界面/功能/操作流程时，优先配真实截图。一个功能插件类文章建议至少 2–4 张图，覆盖整体效果和 1–3 个核心功能点。
- **图片位置**：统一放在 `src/feynman/obsidian/assets/`（或对应栏目目录的 `assets/`）下，用相对路径引用：`![描述](./assets/描述性文件名.png)`。
- **文件命名**：用能表达内容的描述性名称（如 `note-tab-reminders.png`、`note-tab-calendar-day.png`），不要只用时间戳或无意义序号。
- **引用格式**：`![有意义的 alt 文本](./assets/xxx.png)`，alt 写这张图展示的内容（会用于无障碍和 SEO）。
- **预留占位**：写稿时图还没好，先按约定文件名插入引用，并在上一行加 HTML 注释说明该放什么图，例如：
  `<!-- 配图：提醒事项标签页（按日期分组的未完成列表） -->`
  后续把同名截图放进 `assets/` 即可直接显示。
- **构建校验**：`docs:build` 会校验图片引用，引用了不存在的图片会导致构建失败（`Rollup failed to resolve`）。提交前确保引用的图片文件真实存在，或先用注释占位暂不引用。
