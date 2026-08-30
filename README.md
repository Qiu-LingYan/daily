# GitHub Daily Blog

一个由 GitHub Markdown 驱动的个人日记站点。

## 写一篇日记

在 `daily/` 下创建 `YYYYMMDD.md`，例如 `daily/20260831.md`：

```md
---
title: "今天的标题"
date: 2026-08-31
writer: QiuLingYan
---

正文写在这里。
```

提交并推送到 `main`（或 `master`）后，GitHub Actions 会自动构建并发布到 GitHub Pages。

## 本地运行

```bash
npm install
npm run dev
```

生产构建：`npm run build`。如果是项目 Pages，设置仓库变量 `BASE_PATH` 为 `/<仓库名>`；用户站点可留空。

## GitHub Pages

在仓库 Settings → Pages → Build and deployment 中选择 **GitHub Actions**。
