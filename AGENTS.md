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