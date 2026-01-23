import{_ as n,V as s,W as a,a0 as i}from"./framework-c954d91f.js";const e={},l=i(`<hr><p>title: 像记笔记一样简单的无痛记账软件 date: 2026-01-10 category:</p><ul><li>Obsidian tag:</li><li>插件开发</li><li>TypeScript</li></ul><hr><h1 id="obsidian-记账管理插件" tabindex="-1"><a class="header-anchor" href="#obsidian-记账管理插件" aria-hidden="true">#</a> Obsidian 记账管理插件</h1><p>基于 Obsidian 日记文件的智能记账管理插件，能够自动识别和统计您在日记中的记账记录。</p><h2 id="功能特点" tabindex="-1"><a class="header-anchor" href="#功能特点" aria-hidden="true">#</a> 功能特点</h2><ul><li>🔍 <strong>自动识别记账记录</strong>：从日记文件中自动解析记账信息</li><li>📊 <strong>统计分析</strong>：提供收支统计、分类统计和时间范围查询</li><li>🏷️ <strong>分类管理</strong>：支持自定义关键词和分类映射</li><li>📅 <strong>时间筛选</strong>：可按日期范围查看记账记录</li><li>💰 <strong>收支管理</strong>：区分收入和支出，计算结余</li><li>🎨 <strong>美观界面</strong>：类似日历插件的现代化界面设计</li></ul><h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法" aria-hidden="true">#</a> 安装方法</h2><h3 id="方式一-从-github-release-安装-推荐" tabindex="-1"><a class="header-anchor" href="#方式一-从-github-release-安装-推荐" aria-hidden="true">#</a> 方式一：从 GitHub Release 安装（推荐）</h3><ol><li>前往 <a href="../../releases">Releases</a> 页面下载最新版本</li><li>下载以下文件： <ul><li><code>main.js</code></li><li><code>manifest.json</code></li><li><code>styles.css</code></li><li><code>config.json</code></li></ul></li><li>在你的 Obsidian 库中创建插件目录：<code>.obsidian/plugins/obsidian-accounting/</code></li><li>将下载的文件复制到该目录</li><li>重启 Obsidian 或刷新插件列表</li><li>在设置中启用&quot;记账管理&quot;插件</li></ol><h3 id="方式二-手动安装" tabindex="-1"><a class="header-anchor" href="#方式二-手动安装" aria-hidden="true">#</a> 方式二：手动安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /path/to/your/vault/.obsidian/plugins
<span class="token function">git</span> clone https://github.com/你的用户名/obsidian-accounting.git
<span class="token builtin class-name">cd</span> obsidian-accounting
<span class="token function">npm</span> <span class="token function">install</span>
<span class="token function">npm</span> run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><h3 id="_1-创建日记目录" tabindex="-1"><a class="header-anchor" href="#_1-创建日记目录" aria-hidden="true">#</a> 1. 创建日记目录</h3><p>在库根目录创建 <code>journals</code> 文件夹（如果还没有的话）</p><h3 id="_2-在日记中记账" tabindex="-1"><a class="header-anchor" href="#_2-在日记中记账" aria-hidden="true">#</a> 2. 在日记中记账</h3><p>在 <code>journals/2024-01-10.md</code> 文件中写入：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 2024年1月10日</span>

早上买早餐
<span class="token title important"><span class="token punctuation">#</span>cy 15.5 豆浆油条</span>

中午吃饭
<span class="token title important"><span class="token punctuation">#</span>cy 45 麻辣烫</span>

打车回家
<span class="token title important"><span class="token punctuation">#</span>jt 28 滴滴打车</span>

收到工资
<span class="token title important"><span class="token punctuation">#</span>sr 8500 1月份工资</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-查看统计" tabindex="-1"><a class="header-anchor" href="#_3-查看统计" aria-hidden="true">#</a> 3. 查看统计</h3><ul><li>点击左侧工具栏的计算器图标 📊</li><li>或使用命令面板 (Cmd/Ctrl + P) 搜索&quot;记账管理&quot;</li></ul><h2 id="记账格式" tabindex="-1"><a class="header-anchor" href="#记账格式" aria-hidden="true">#</a> 记账格式</h2><h3 id="基本格式" tabindex="-1"><a class="header-anchor" href="#基本格式" aria-hidden="true">#</a> 基本格式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#关键词 金额 备注说明
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="格式规则" tabindex="-1"><a class="header-anchor" href="#格式规则" aria-hidden="true">#</a> 格式规则</h3><p>✅ <strong>灵活的格式支持</strong>：</p><ul><li>数字可以在前也可以在后</li><li>备注和数字之间可以有空格，也可以没有空格</li><li>如果一行出现多个数字，<strong>第一个数字</strong>会被识别为记账金额</li></ul><h3 id="支持的格式示例" tabindex="-1"><a class="header-anchor" href="#支持的格式示例" aria-hidden="true">#</a> 支持的格式示例</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 标准格式（推荐）</span>
<span class="token list punctuation">-</span> #cy 15.5 豆浆油条
<span class="token list punctuation">-</span> #cy 45 麻辣烫

<span class="token title important"><span class="token punctuation">#</span> 数字在前</span>
<span class="token list punctuation">-</span> #cy 25.8 午餐麻辣烫

<span class="token title important"><span class="token punctuation">#</span> 数字在后</span>
<span class="token list punctuation">-</span> #cy 午餐麻辣烫 25.8

<span class="token title important"><span class="token punctuation">#</span> 无空格</span>
<span class="token list punctuation">-</span> #cy15.5豆浆油条
<span class="token list punctuation">-</span> #cy午餐25.8

<span class="token title important"><span class="token punctuation">#</span> 带货币符号（会自动忽略）</span>
<span class="token list punctuation">-</span> #cy 早餐消费¥9
<span class="token list punctuation">-</span> #cy 午餐汤饭20

<span class="token title important"><span class="token punctuation">#</span> 多个数字（取第一个）</span>
<span class="token list punctuation">-</span> #cy 87.65 米 面 水煮花生 橘子
<span class="token list punctuation">-</span> #sp 深蹲了 10 个  ← 10 会被识别为金额

<span class="token title important"><span class="token punctuation">#</span> 带单位</span>
<span class="token list punctuation">-</span> #cy 全家早餐11元
<span class="token list punctuation">-</span> #cy 办社保卡路边停车6元
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认关键词" tabindex="-1"><a class="header-anchor" href="#默认关键词" aria-hidden="true">#</a> 默认关键词</h3><ul><li><code>cy</code> = 餐饮</li><li><code>gw</code> = 购物</li><li><code>dk</code> = 贷款</li><li><code>jf</code> = 生活缴费</li><li><code>qt</code> = 其他</li><li><code>sr</code> = 收入 ⭐（特殊关键词）</li></ul><h3 id="完整示例" tabindex="-1"><a class="header-anchor" href="#完整示例" aria-hidden="true">#</a> 完整示例</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 2024年1月10日</span>

早上买早餐
<span class="token list punctuation">-</span> #cy 15.5 豆浆油条
<span class="token list punctuation">-</span> #cy 全家早餐11元

中午吃饭
<span class="token list punctuation">-</span> #cy 45 麻辣烫
<span class="token list punctuation">-</span> #cy 午餐汤饭20

购物
<span class="token list punctuation">-</span> #gw 买 Maner 咖啡¥37
<span class="token list punctuation">-</span> #gw 12.7 瓜子雪糕

收入
<span class="token list punctuation">-</span> #sr 8500 1月份工资
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明" aria-hidden="true">#</a> 配置说明</h2><p>插件使用 <code>config.json</code> 文件进行配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;appName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;每日记账&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;categories&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;cy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;餐饮&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;jt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;交通&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;yl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;娱乐&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gw&quot;</span><span class="token operator">:</span> <span class="token string">&quot;购物&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;yy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;医疗&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;jy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;教育&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fz&quot;</span><span class="token operator">:</span> <span class="token string">&quot;房租&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;qt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;其他&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sr&quot;</span><span class="token operator">:</span> <span class="token string">&quot;收入&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;expenseEmoji&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;journalsPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;journals&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置项说明" tabindex="-1"><a class="header-anchor" href="#配置项说明" aria-hidden="true">#</a> 配置项说明</h3><ul><li><strong>appName</strong>: 插件显示名称</li><li><strong>categories</strong>: 关键词与分类的映射关系 <ul><li><code>key</code>: 记账时使用的关键词</li><li><code>value</code>: 显示的中文分类名称</li><li><code>sr</code>: 特殊关键词，表示收入（其他为支出）</li></ul></li><li><strong>expenseEmoji</strong>: 记账标识符（默认为 #）</li><li><strong>journalsPath</strong>: 日记文件存放路径（默认为 journals）</li></ul><h2 id="界面功能" tabindex="-1"><a class="header-anchor" href="#界面功能" aria-hidden="true">#</a> 界面功能</h2><h3 id="统计概览" tabindex="-1"><a class="header-anchor" href="#统计概览" aria-hidden="true">#</a> 统计概览</h3><ul><li><strong>总收入</strong>：选定时间范围内的收入总额</li><li><strong>总支出</strong>：选定时间范围内的支出总额</li><li><strong>结余</strong>：收入减去支出的余额</li></ul><h3 id="分类统计" tabindex="-1"><a class="header-anchor" href="#分类统计" aria-hidden="true">#</a> 分类统计</h3><ul><li>按支出金额排序显示各分类统计</li><li>显示每个分类的总金额和记录数量</li></ul><h3 id="记录列表" tabindex="-1"><a class="header-anchor" href="#记录列表" aria-hidden="true">#</a> 记录列表</h3><ul><li>按日期分组显示所有记账记录</li><li>支持右键查看原始日记文件</li><li>显示每日收支汇总</li></ul><h2 id="快捷操作" tabindex="-1"><a class="header-anchor" href="#快捷操作" aria-hidden="true">#</a> 快捷操作</h2><ul><li><strong>Ctrl/Cmd + P</strong> → 搜索&quot;记账管理&quot;快速打开</li><li><strong>右键记录</strong> → 查看原文跳转到对应日记</li><li><strong>刷新数据</strong> → 重新扫描所有日记文件</li></ul><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><ol><li>确保日记文件存放在配置的 <code>journalsPath</code> 目录下（默认为 <code>journals</code>）</li><li>记账行必须包含 <code>#关键词</code> 和 <code>数字金额</code></li><li>金额支持小数点，货币符号（¥、元等）会被自动忽略</li><li>关键词必须在配置文件中定义才能被正确识别</li><li>使用 <code>sr</code> 关键词标识收入，其他关键词默认为支出</li><li><strong>如果一行出现多个数字，第一个数字会被识别为金额</strong></li><li>数字和备注的顺序、空格都很灵活，插件会自动识别</li></ol><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><p><strong>Q: 为什么看不到记账记录？</strong><br> A: 检查日记文件是否在 <code>journals</code> 目录下，格式是否正确</p><p><strong>Q: 如何修改分类？</strong><br> A: 编辑 <code>config.json</code> 文件，添加或修改 categories 中的键值对</p><p><strong>Q: 支持其他货币吗？</strong><br> A: 支持，只需要在金额中输入数字即可，不要包含货币符号</p><p><strong>Q: 可以批量导入历史数据吗？</strong><br> A: 可以，按格式在历史日记文件中添加记账记录即可</p><h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开发模式</span>
<span class="token function">npm</span> run dev

<span class="token comment"># 构建</span>
<span class="token function">npm</span> run build

<span class="token comment"># 部署到本地vault</span>
<span class="token function">npm</span> run deploy

<span class="token comment"># 发布到GitHub</span>
<span class="token function">npm</span> run release
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2><p>MIT</p><hr><p>💡 <strong>提示</strong>：建议养成每日记账的好习惯，这样可以更好地了解自己的消费情况！</p>`,60),t=[l];function o(d,c){return s(),a("div",null,t)}const p=n(e,[["render",o],["__file","obsidian-accounting.html.vue"]]);export{p as default};
