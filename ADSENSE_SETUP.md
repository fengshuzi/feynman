# Google AdSense 集成指南

## 已完成的配置

### 1. 自动广告配置
已在 `src/.vuepress/config.ts` 中添加了 Google AdSense 脚本配置。

**需要修改的地方：**
- 将 `ca-pub-XXXXXXXXXXXXXXXX` 替换为你的 AdSense 发布商 ID

### 2. 广告组件
已创建 `src/.vuepress/components/GoogleAd.vue` 组件，可在文章中插入广告。

## 使用步骤

### 第一步：获取 AdSense 发布商 ID

1. 登录 [Google AdSense](https://www.google.com/adsense/)
2. 在"账号" → "账号信息"中找到你的发布商 ID（格式：ca-pub-xxxxxxxxxxxxxxxx）
3. 复制这个 ID

### 第二步：更新配置文件

1. 打开 `src/.vuepress/config.ts`
2. 找到这一行：
   ```typescript
   src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX',
   ```
3. 将 `ca-pub-XXXXXXXXXXXXXXXX` 替换为你的实际发布商 ID

### 第三步：更新广告组件（可选）

如果要使用广告组件，打开 `src/.vuepress/components/GoogleAd.vue`：
1. 找到 `adClient: 'ca-pub-XXXXXXXXXXXXXXXX'`
2. 替换为你的实际发布商 ID

### 第四步：在文章中使用广告

#### 方式 1：自动广告（推荐新手）
配置好 config.ts 后，Google 会自动在页面合适位置显示广告，无需额外操作。

#### 方式 2：手动放置广告单元
在你的 Markdown 文件中使用广告组件：

```markdown
# 文章标题

这是文章内容...

<GoogleAd ad-slot="1234567890" />

继续文章内容...
```

**获取 ad-slot：**
1. 在 AdSense 后台创建广告单元
2. 复制广告代码中的 `data-ad-slot` 值
3. 在组件中使用这个值

## 常见广告位置建议

### 1. 文章顶部广告
在 `src/README.md` 或其他文章开头添加：
```markdown
---
home: true
---

<GoogleAd ad-slot="你的广告位ID" ad-format="horizontal" />
```

### 2. 文章底部广告
在文章末尾添加：
```markdown
## 总结

文章内容...

<GoogleAd ad-slot="你的广告位ID" />
```

### 3. 侧边栏广告
可以通过修改主题配置添加到侧边栏。

## 注意事项

1. **等待审核**：首次申请 AdSense 需要等待审核，通常需要：
   - 网站有一定的原创内容
   - 网站运行至少 6 个月（建议）
   - 有稳定的访问量

2. **内容要求**：
   - 确保内容原创且有价值
   - 避免违规内容（暴力、色情等）
   - 遵守 Google AdSense 政策

3. **广告密度**：
   - 不要在一个页面放置过多广告
   - 保持良好的用户体验

4. **测试环境**：
   - 本地开发时广告可能不显示
   - 需要部署到 GitHub Pages 后才能正常显示

## 部署到 GitHub Pages

确保你的 GitHub Pages 已正确配置：

1. 构建项目：
   ```bash
   npm run docs:build
   ```

2. 部署到 GitHub Pages（根据你的部署方式）

3. 等待几分钟后访问你的网站，检查广告是否显示

## 验证广告是否生效

1. 打开浏览器开发者工具（F12）
2. 查看 Console 是否有 AdSense 相关错误
3. 检查 Network 标签，看是否加载了 `adsbygoogle.js`
4. 在 AdSense 后台查看展示次数统计

## 收益优化建议

1. **内容质量**：持续产出高质量原创内容
2. **SEO 优化**：提高搜索引擎排名，增加流量
3. **广告位置**：测试不同位置的广告效果
4. **响应式设计**：确保移动端广告显示正常
5. **页面速度**：优化网站加载速度

## 故障排查

### 广告不显示？
- 检查发布商 ID 是否正确
- 确认 AdSense 账号已审核通过
- 查看浏览器控制台是否有错误
- 确认网站已部署到线上（本地可能不显示）

### 广告显示空白？
- 可能是广告还在审核中
- 检查广告单元 ID 是否正确
- 确认页面内容符合 AdSense 政策

需要帮助？查看 [Google AdSense 帮助中心](https://support.google.com/adsense/)
