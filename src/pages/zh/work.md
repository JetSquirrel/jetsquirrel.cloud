---
layout: ../../layouts/Page.astro
title: "开源"
description: "JetSquirrel 的开源作品：DuckLocal、CloudBridge、KhonsuGraph、nsh-graph、gpui-graph，Rust 和 Go 编写的可观测性工具，以及关于成都的小网站。"
---

<div class="intro compact">
  <p class="eyebrow">最近的工作</p>
  <h1>开源</h1>
  <p class="lead">我最近持续开发和完善的开源项目。</p>
</div>

<div class="projects">
  <article class="project featured-project">
    <div class="featured-heading">
      <h2><a href="https://ducklocal.app/">DuckLocal</a></h2>
      <a class="featured-stars" href="https://github.com/JetSquirrel/DuckLocal" aria-label="DuckLocal on GitHub">GitHub ↗</a>
      <p>在本地文件上直接跑 SQL。</p>
    </div>
    <div class="featured-body">
      <p class="featured-lead">一个桌面应用，用 DuckDB 直接查询电脑上的 CSV、Parquet、JSON 和 Excel 文件。</p>
      <p>不需要服务器，不上传，不注册。DuckDB 运行在应用内部，文件不会离开你的电脑。以 Apache-2.0 协议免费开源，使用 Rust 与 GPUI Kit 构建。</p>
      <dl class="featured-capabilities">
        <div><dt>本地文件</dt><dd>CSV、Parquet、JSON、Excel、DuckDB 数据库与 S3，原地查询。</dd></div>
        <div><dt>仪表盘</dt><dd>把图表保存为 <code>.dash</code> 文件，并在图表上留下评论。</dd></div>
        <div><dt>面向 Agent</dt><dd><code>ducklocal</code> CLI 输出 JSON，可配合 Claude Code、Codex 与 Cursor 使用。</dd></div>
      </dl>
      <div class="featured-links"><a href="https://ducklocal.app/">访问网站 →</a><a href="https://github.com/JetSquirrel/DuckLocal">GitHub 源代码 ↗</a></div>
    </div>
  </article>
  <article class="project featured-project">
    <div class="featured-heading">
      <h2><a href="https://cloudbridge.jetsquirrel.cloud/">CloudBridge</a></h2>
      <a class="featured-stars" href="https://github.com/JetSquirrel/cloudbridge" aria-label="CloudBridge on GitHub">GitHub ↗</a>
      <p>所有云和 AI 账单，一处看清。</p>
    </div>
    <div class="featured-body">
      <p class="featured-lead">一个本地运行的开源桌面应用，汇总各家云厂商和 AI 服务的账单，看清钱花在哪里。</p>
      <p>账单保存在本地 DuckDB 文件中，凭证存放在 macOS 钥匙串或 Windows 凭据管理器里。以 MIT 协议免费开源，支持 macOS 与 Windows。</p>
      <dl class="featured-capabilities">
        <div><dt>云与 AI</dt><dd>AWS、Azure、Google Cloud、阿里云、Cloudflare、火山引擎、OpenAI、Anthropic、DeepSeek 与百炼。</dd></div>
        <div><dt>告警</dt><dd>费用突增或达到预算时提醒你，关闭窗口后常驻菜单栏。</dd></div>
        <div><dt>洞察</dt><dd>把 Cloudflare 账单拆到每个 bucket、Worker 或 Durable Object，并扫描可节省的开销。</dd></div>
      </dl>
      <div class="featured-links"><a href="https://cloudbridge.jetsquirrel.cloud/">访问网站 →</a><a href="https://github.com/JetSquirrel/cloudbridge">GitHub 源代码 ↗</a></div>
    </div>
  </article>
  <article class="project featured-project">
    <div class="featured-heading">
      <h2><a href="https://khonsugraph.com/">KhonsuGraph</a></h2>
      <a class="featured-stars" href="https://github.com/JetSquirrel/KhonsuGraph" aria-label="KhonsuGraph on GitHub">GitHub ↗</a>
      <p>顺着关系，找到证据。</p>
    </div>
    <div class="featured-body">
      <p class="featured-lead">一个开源、本地优先的图调查工作台，为猎手而生。</p>
      <p>适用于威胁狩猎、攻击路径分析、SRE 依赖梳理与网络研究。基于内嵌 HawDB 图引擎的原生 Rust 应用，数据留在本机。以 Apache-2.0 协议免费开源。</p>
      <dl class="featured-capabilities">
        <div><dt>查询</dt><dd>在同一张图上使用 Cypher 与 PostgreSQL 方言 SQL。</dd></div>
        <div><dt>调查</dt><dd>图画布、路径追踪、PageRank、介数中心性与社区发现，调查过程和证据都能保存。</dd></div>
        <div><dt>面向 Agent</dt><dd><code>khonsu</code> JSON CLI 与 <code>.dash</code> 仪表盘，人和 AI agent 都能用。</dd></div>
      </dl>
      <div class="featured-links"><a href="https://khonsugraph.com/">访问网站 →</a><a href="https://github.com/JetSquirrel/KhonsuGraph">GitHub 源代码 ↗</a></div>
    </div>
  </article>
  <article class="project">
    <h3><a href="https://jetsquirrel.github.io/nsh-graph/">nsh-graph</a></h3>
    <p>交互式网络图，在每个平台上都是原生的。一个用于 Native Shell 的 TSX 组件，支持力导向、层级、环形与网格布局，平移、缩放与键盘导航，运行在 iOS、Android、桌面与 Web 上。</p>
    <p class="project-link"><a href="https://github.com/JetSquirrel/nsh-graph">GitHub 源代码 ↗</a></p>
  </article>
  <article class="project">
    <h3><a href="https://github.com/JetSquirrel/gpui-graph">gpui-graph</a></h3>
    <p>基于 GPUI 的力导向网络图组件，支持 Barnes–Hut 模拟、平移缩放、选择与社区聚类。KhonsuGraph 的图视图就是用它做的，也是 nsh-graph 的原型。</p>
    <p class="project-link"><a href="https://github.com/JetSquirrel/gpui-graph">GitHub 源代码 ↗</a></p>
  </article>
</div>

## 成都小站

写给我喜欢的这座城市。

<div class="projects">
  <article class="project">
    <h3><a href="https://tantan-map.jetsquirrel.cloud/">谭谈交通地图</a></h3>
    <p>沿着《谭谈交通》的影像重新认识成都：49 处考证过的取景地标注在地图上，关联哔哩哔哩官方合集 345 期节目。</p>
    <p class="project-link"><a href="https://tantan-map.jetsquirrel.cloud/">访问网站 ↗</a></p>
  </article>
  <article class="project">
    <h3><a href="https://cd-metro-typing.jetsquirrel.cloud/">成都地铁打字</a></h3>
    <p>沿着成都，打一站是一站。在真实线网里选一条线路，把中英文站名一站一站敲过去，还能选普通话或四川话到站播报。</p>
    <p class="project-link"><a href="https://cd-metro-typing.jetsquirrel.cloud/">访问网站 ↗</a></p>
  </article>
</div>

## 可观测性与基础设施

* [terraform-provider-nightingale](https://github.com/JetSquirrel/terraform-provider-nightingale) — 用 Terraform 管理夜莺（Nightingale）告警资源。
* [openclaw_exporter](https://github.com/JetSquirrel/openclaw_exporter) — OpenClaw 的 Prometheus exporter。

## 更多开源

* [kiro-acp](https://github.com/JetSquirrel/kiro-acp) — Kiro CLI 的 ACP（Agent Client Protocol）适配器，让 Zed 等编辑器可以把 Kiro 当作编程助手。

[GitHub 上的更多项目 →](https://github.com/JetSquirrel?tab=repositories)
