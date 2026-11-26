---
layout: ../../layouts/Page.astro
title: "Profile · SRE、可观测性与本地优先工具"
description: "JetSquirrel，SRE，AWS User Group China 可观测 UGL、GreptimeDB Advocator，用 Rust 构建本地优先的桌面工具：DuckLocal、CloudBridge 与 KhonsuGraph。"
---

<div class="intro">
  <p class="eyebrow">OBSERVABILITY / AI SECURITY</p>
  <h1>JetSquirrel</h1>
  <p class="role">SRE</p>
  <p class="lead">GreptimeDB Advocator，AWS Community Builder，关注可观测性与 AI 安全。<br>构建面向数据、云成本与安全调查的本地优先工具。</p>
  <div class="contact-links">
    <a href="https://github.com/JetSquirrel">GitHub</a>
    <a href="https://x.com/JetSquirrel2048">X / Twitter</a>
    <a href="https://medium.com/@jetdeng">Medium</a>
    <a href="https://bonjour.bio/jetdeng">Bonjour</a>
  </div>
</div>

## 稳定性与可观测性

我的工作是 SRE，让线上系统保持健康、可被理解。日常主要和 Kubernetes、AWS 以及围绕它们的可观测性体系打交道——指标、日志、链路与告警。

我是 **AWS User Group China** 可观测方向的 UGL（User Group Leader），也是 **AWS Community Builder** 和 **GreptimeDB Advocator**。我关注可观测性（O11y）、AIOps、AI 安全与云原生基础设施。

## DuckLocal

[DuckLocal](https://ducklocal.app) 是一个基于 DuckDB 原生构建的本地优先数据工作台。打开 CSV、Parquet、JSON 或 Excel 文件，用 SQL 查询，数据始终留在自己的电脑上。它用 Rust 和 GPUI Kit 编写，并提供 JSON CLI，方便 AI agent 调用。

## CloudBridge

[CloudBridge](https://cloudbridge.jetsquirrel.cloud) 把所有云和 AI 账单汇总到一处。它从 AWS、Azure、Google Cloud、阿里云、Cloudflare、OpenAI、Anthropic 等服务收集费用，存进本地 DuckDB 文件，费用突增时提醒你——不需要再多开一个 SaaS 仪表盘。

## KhonsuGraph

[KhonsuGraph](https://khonsugraph.com) 是一个开源、本地优先的图调查工作台：支持 Cypher 与 SQL、路径探索、可追溯到原始记录的证据，以及面向 AI agent 的 JSON CLI。适合威胁狩猎、影响面分析，以及一切本质上是“关系”的问题。

## Native Shell

最近我在用 [Native Shell](https://nsh.dev) 做东西：[nsh-o11y](https://jetsquirrel.github.io/nsh-o11y/)，百万级数据点依然流畅的可观测性图表；[Petal](https://github.com/JetSquirrel/petal)，面向 Neo4j、Neptune、NebulaGraph 等图数据库的可视化浏览器；以及 [Pager](https://github.com/JetSquirrel/pager)，跑在 Cloudflare Worker 上、能把你所有设备都叫响的值班呼叫器。

## 社区

我参与运营 AWS User Group China 的可观测性小组，并为 2026 年亚马逊云科技 Community Day 的夏季、秋季、冬季三站搭建了官网。

[查看社区工作 →](/zh/community/)

## 我的方式

我主要使用 Rust、Go、Python、Kubernetes 和 AWS。我喜欢在本地运行、足够快、既方便人用也方便 AI agent 调用的工具。

你可以在 [GitHub](https://github.com/JetSquirrel) 找到我的代码，在 [Medium](https://medium.com/@jetdeng) 读到我的文章，在 [X / Twitter](https://x.com/JetSquirrel2048) 看到我正在做的东西。

[查看我的开源作品 →](/zh/work/)
