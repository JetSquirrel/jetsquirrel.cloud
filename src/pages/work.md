---
layout: ../layouts/Page.astro
title: "OPEN SOURCE"
description: "JetSquirrel’s open source: DuckLocal, CloudBridge, KhonsuGraph, nsh-graph, gpui-graph, and observability tools in Rust and Go, plus small web projects about Chengdu."
---

<div class="intro compact">
  <p class="eyebrow">CURRENTLY BUILDING</p>
  <h1>OPEN SOURCE</h1>
  <p class="lead">The projects I’m actively building and improving.</p>
</div>

<div class="projects">
  <article class="project featured-project">
    <div class="featured-heading">
      <h2><a href="https://ducklocal.app/">DuckLocal</a></h2>
      <a class="featured-stars" href="https://github.com/JetSquirrel/DuckLocal" aria-label="DuckLocal on GitHub">GitHub ↗</a>
      <p>SQL on your local files.</p>
    </div>
    <div class="featured-body">
      <p class="featured-lead">A desktop app for querying CSV, Parquet, JSON, and Excel files with DuckDB, right where they sit on your computer.</p>
      <p>No server, no upload, no account. DuckDB runs inside the app, so your files never leave the machine. Free and open source under Apache-2.0, built in Rust with GPUI Kit.</p>
      <dl class="featured-capabilities">
        <div><dt>Local files</dt><dd>CSV, Parquet, JSON, Excel, DuckDB databases, and S3—queried in place.</dd></div>
        <div><dt>Dashboards</dt><dd>Save charts as <code>.dash</code> files and leave comments on them.</dd></div>
        <div><dt>Agent-ready</dt><dd>The <code>ducklocal</code> CLI prints JSON for Claude Code, Codex, and Cursor.</dd></div>
      </dl>
      <div class="featured-links"><a href="https://ducklocal.app/">Visit the site →</a><a href="https://github.com/JetSquirrel/DuckLocal">Source on GitHub ↗</a></div>
    </div>
  </article>
  <article class="project featured-project">
    <div class="featured-heading">
      <h2><a href="https://cloudbridge.jetsquirrel.cloud/">CloudBridge</a></h2>
      <a class="featured-stars" href="https://github.com/JetSquirrel/cloudbridge" aria-label="CloudBridge on GitHub">GitHub ↗</a>
      <p>Every cloud and AI bill, in one place.</p>
    </div>
    <div class="featured-body">
      <p class="featured-lead">A local, open-source desktop app that collects bills from cloud and AI providers and shows where the money goes.</p>
      <p>Bills are stored in a local DuckDB file, and credentials stay in the macOS Keychain or Windows Credential Manager. Free under the MIT license, for macOS and Windows.</p>
      <dl class="featured-capabilities">
        <div><dt>Clouds &amp; AI</dt><dd>AWS, Azure, Google Cloud, Alibaba Cloud, Cloudflare, Volcengine, OpenAI, Anthropic, DeepSeek, and Model Studio.</dd></div>
        <div><dt>Alerts</dt><dd>Get notified when costs jump or a budget is reached, from the menu bar.</dd></div>
        <div><dt>Insights</dt><dd>Break Cloudflare bills down to each bucket, Worker, or Durable Object, and scan for savings.</dd></div>
      </dl>
      <div class="featured-links"><a href="https://cloudbridge.jetsquirrel.cloud/">Visit the site →</a><a href="https://github.com/JetSquirrel/cloudbridge">Source on GitHub ↗</a></div>
    </div>
  </article>
  <article class="project featured-project">
    <div class="featured-heading">
      <h2><a href="https://khonsugraph.com/">KhonsuGraph</a></h2>
      <a class="featured-stars" href="https://github.com/JetSquirrel/KhonsuGraph" aria-label="KhonsuGraph on GitHub">GitHub ↗</a>
      <p>Follow the connections. Uncover the evidence.</p>
    </div>
    <div class="featured-body">
      <p class="featured-lead">An open-source, local-first graph investigation workbench, built for hunters.</p>
      <p>For threat hunting, attack-path analysis, SRE dependency mapping, and network research. A native Rust app on the embedded HawDB graph engine; data stays on your machine. Free under Apache-2.0.</p>
      <dl class="featured-capabilities">
        <div><dt>Query</dt><dd>Cypher and PostgreSQL-dialect SQL over the same graph.</dd></div>
        <div><dt>Investigate</dt><dd>Graph canvas, path tracing, PageRank, betweenness, and community detection, with saved investigations and evidence.</dd></div>
        <div><dt>Agent-ready</dt><dd>A <code>khonsu</code> JSON CLI and <code>.dash</code> dashboards for AI agents and people alike.</dd></div>
      </dl>
      <div class="featured-links"><a href="https://khonsugraph.com/">Visit the site →</a><a href="https://github.com/JetSquirrel/KhonsuGraph">Source on GitHub ↗</a></div>
    </div>
  </article>
  <article class="project">
    <h3><a href="https://jetsquirrel.github.io/nsh-graph/">nsh-graph</a></h3>
    <p>Interactive network graphs, native on every platform. One TSX component for Native Shell with force, hierarchical, circular, and grid layouts, pan, zoom, and keyboard navigation, on iOS, Android, desktop, and the web.</p>
    <p class="project-link"><a href="https://github.com/JetSquirrel/nsh-graph">Source on GitHub ↗</a></p>
  </article>
  <article class="project">
    <h3><a href="https://github.com/JetSquirrel/gpui-graph">gpui-graph</a></h3>
    <p>A force-directed network graph component for GPUI, with Barnes–Hut simulation, pan and zoom, selection, and community clustering. The graph view behind KhonsuGraph and the model for nsh-graph.</p>
    <p class="project-link"><a href="https://github.com/JetSquirrel/gpui-graph">Source on GitHub ↗</a></p>
  </article>
</div>

## Chengdu on the Web

Small sites about the city I love.

<div class="projects">
  <article class="project">
    <h3><a href="https://tantan-map.jetsquirrel.cloud/">Tan Tan Traffic Map</a></h3>
    <p>Rediscover Chengdu through <em>Tan Tan Jiao Tong</em>, the traffic-safety show that filmed the city’s streets from 2005. 49 researched filming locations on a map, linked to 345 episodes.</p>
    <p class="project-link"><a href="https://tantan-map.jetsquirrel.cloud/">Visit site ↗</a></p>
  </article>
  <article class="project">
    <h3><a href="https://cd-metro-typing.jetsquirrel.cloud/">Chengdu Metro Typing</a></h3>
    <p>Typing practice on the real Chengdu Metro network. Pick one of 17 lines and type the station names one by one in Chinese or English, with Mandarin or Sichuanese announcements.</p>
    <p class="project-link"><a href="https://cd-metro-typing.jetsquirrel.cloud/">Visit site ↗</a></p>
  </article>
</div>

## Observability &amp; Infrastructure

* [terraform-provider-nightingale](https://github.com/JetSquirrel/terraform-provider-nightingale) — A Terraform provider for managing Nightingale alerting resources.
* [openclaw_exporter](https://github.com/JetSquirrel/openclaw_exporter) — A Prometheus exporter for OpenClaw.

## More Open Source

* [kiro-acp](https://github.com/JetSquirrel/kiro-acp) — An ACP (Agent Client Protocol) adapter for Kiro CLI, so editors like Zed can use Kiro as a coding assistant.

[More projects on GitHub →](https://github.com/JetSquirrel?tab=repositories)
