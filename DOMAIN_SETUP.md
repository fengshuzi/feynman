# 域名配置完整指南

将 www.fengshuzi.com 和 blog.fengshuzi.com 都指向 GitHub Pages 博客，并支持 HTTPS。

## 配置概览

- **主域名**：www.fengshuzi.com
- **备用域名**：blog.fengshuzi.com（自动跳转到主域名）
- **托管平台**：GitHub Pages
- **DNS 服务商**：阿里云

---

## 第一步：修改本地 CNAME 文件

CNAME 文件位置：`src/.vuepress/public/CNAME`

内容应该是：
```
www.fengshuzi.com
```

✅ 已完成

---

## 第二步：提交代码到 GitHub

```bash
# 查看状态
git status

# 添加文件
git add src/.vuepress/public/CNAME

# 提交
git commit -m "Update CNAME to www.fengshuzi.com"

# 推送到 GitHub
git push origin main
```

✅ 已完成

---

## 第三步：配置阿里云 DNS

登录阿里云控制台：https://dns.console.aliyun.com/

进入域名 `fengshuzi.com` 的解析设置，添加/修改以下两条记录：

### 记录 1：www 指向 GitHub Pages

```
记录类型：CNAME
主机记录：www
记录值：fengshuzi.github.io
TTL：10分钟
```

### 记录 2：blog 指向 www

```
记录类型：CNAME
主机记录：blog
记录值：www.fengshuzi.com
TTL：10分钟
```

### 验证 DNS 配置

```bash
# 查询 www 解析
dig @8.8.8.8 www.fengshuzi.com

# 查询 blog 解析
dig @8.8.8.8 blog.fengshuzi.com

# 应该看到：
# www.fengshuzi.com → fengshuzi.github.io → GitHub IP
# blog.fengshuzi.com → www.fengshuzi.com → fengshuzi.github.io → GitHub IP
```

✅ 已完成

---

## 第四步：配置 GitHub Pages

### 访问 GitHub Pages 设置页面

https://github.com/fengshuzi/feynman/settings/pages

### 配置步骤

1. **Custom domain** 部分：
   - 在输入框中填写：`www.fengshuzi.com`
   - 点击 **Save** 按钮

2. **等待 DNS 检查**：
   - GitHub 会自动检查 DNS 配置
   - 如果配置正确，会显示绿色的 ✓ 标记
   - 如果显示错误，等待几分钟后刷新页面

3. **启用 HTTPS**：
   - 等待 5-30 分钟，GitHub 会自动配置 SSL 证书
   - 证书配置完成后，勾选 **Enforce HTTPS** 选项
   - 这样所有 HTTP 请求会自动跳转到 HTTPS

### 常见问题

**问题 1：DNS 检查失败**
- 等待 10-20 分钟，DNS 传播需要时间
- 清除本地 DNS 缓存后重试
- 使用在线工具检查 DNS 是否全球生效：https://www.whatsmydns.net/

**问题 2：HTTPS 选项无法勾选**
- 确保 Custom domain 已保存
- 等待 GitHub 自动配置 SSL 证书（10-30 分钟）
- 如果超过 1 小时还不行，尝试删除域名重新添加

**问题 3：显示 404 错误**
- 确认 CNAME 文件已推送到 GitHub
- 检查 GitHub Actions 构建是否成功
- 确认 Pages 的 Source 设置正确（通常是 gh-pages 分支或 main 分支的 /docs 目录）

⚠️ **待完成**

---

## 第五步：验证配置

### 等待生效时间

- DNS 解析生效：5-10 分钟
- GitHub SSL 证书配置：10-30 分钟
- 全球 DNS 传播：最多 24-48 小时

### 测试访问

```bash
# 测试 www 域名
curl -I https://www.fengshuzi.com

# 测试 blog 域名
curl -I https://blog.fengshuzi.com

# 或者直接在浏览器打开
open https://www.fengshuzi.com
open https://blog.fengshuzi.com
```

### 预期结果

- ✅ https://www.fengshuzi.com - 直接访问博客
- ✅ https://blog.fengshuzi.com - 自动跳转到 www.fengshuzi.com
- ✅ 两个域名都支持 HTTPS
- ✅ HTTP 自动跳转到 HTTPS

---

## 第六步：刷新本地 DNS 缓存

如果配置完成后本地访问还有问题，刷新 DNS 缓存：

### macOS

```bash
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

### 浏览器缓存

**Chrome**
1. 访问：`chrome://net-internals/#dns`
2. 点击 "Clear host cache"

**Firefox**
1. 访问：`about:networking#dns`
2. 点击 "Clear DNS Cache"

**Safari**
- 使用系统 DNS，刷新系统缓存即可
- 或：开发菜单 → 清空缓存

---

## 配置总结

### 文件修改
- ✅ `src/.vuepress/public/CNAME` → `www.fengshuzi.com`

### 阿里云 DNS
- ✅ www.fengshuzi.com → CNAME → fengshuzi.github.io
- ✅ blog.fengshuzi.com → CNAME → www.fengshuzi.com

### GitHub Pages
- ⚠️ Custom domain → `www.fengshuzi.com`
- ⚠️ Enforce HTTPS → 勾选（等待证书配置完成后）

### 最终效果
- www.fengshuzi.com - 主域名，直接访问
- blog.fengshuzi.com - 自动跳转到 www
- 两个域名都支持 HTTPS

---

## 故障排查

### 1. 访问显示 404

**可能原因**：
- CNAME 文件未正确推送
- GitHub Pages 未正确构建

**解决方法**：
```bash
# 触发重新构建
git commit --allow-empty -m "Trigger rebuild"
git push origin main
```

### 2. SSL 证书错误

**可能原因**：
- GitHub 还在配置证书
- Custom domain 未正确设置

**解决方法**：
- 等待 30 分钟
- 检查 GitHub Pages 设置
- 尝试删除域名重新添加

### 3. DNS 解析错误

**检查命令**：
```bash
# 使用 Google DNS 查询
dig @8.8.8.8 www.fengshuzi.com

# 使用 Cloudflare DNS 查询
dig @1.1.1.1 www.fengshuzi.com
```

**解决方法**：
- 检查阿里云 DNS 配置是否正确
- 等待 DNS 传播（最多 24 小时）
- 使用 https://www.whatsmydns.net/ 检查全球传播状态

### 4. 浏览器显示旧内容

**解决方法**：
```bash
# 清除浏览器缓存
# Chrome: Cmd+Shift+Delete
# Safari: Cmd+Option+E

# 或使用隐私模式访问
```

---

## 相关链接

- GitHub Pages 文档：https://docs.github.com/en/pages
- 阿里云 DNS 控制台：https://dns.console.aliyun.com/
- DNS 传播检查：https://www.whatsmydns.net/
- SSL 证书检查：https://www.ssllabs.com/ssltest/

---

## 下一步

配置完成后，可以继续：
1. 配置 Google AdSense（参考 `ADSENSE_SETUP.md`）
2. 优化 SEO 设置
3. 添加 Google Analytics
4. 配置 CDN 加速

---

**最后更新**：2026-01-10
