# 使用方法ガイド — 迷い人の茶屋

難解な理論書を師匠と弟子の対話物語に変換するシステムの使い方。

---

## 基本ワークフロー

```
Word/PDFを開く → テキストをコピー → このチャットに貼り付け → Skillを実行 → MDファイル保存 → git push → Vercel URLで確認
```

---

## Step 1: テキストを準備する

Word・PDFを開いて、物語化したい章のテキストをコピーする。

---

## Step 2: (任意) 概念を整理する — `/concept-extract`

長文や複雑な章は先にこれを使うと物語化しやすくなる。

```
/concept-extract
[コピーしたテキストをここに貼り付け]
```

出力される内容：
- キーコンセプトの一覧
- 初心者が持つ疑問の想定
- たとえ話の候補
- 物語化の推奨構成

---

## Step 3: 物語化する — `/narrativize`

```
/narrativize
[コピーしたテキストをここに貼り付け]
```

出力される内容：師匠と弟子の対話形式の物語（Markdown形式）

オプション引数：
- `--title "タイトル"` — 話のタイトルを指定
- `--chapter "第X章"` — 章番号を指定
- `--source "書籍名"` — 原典の書籍名を指定

---

## Step 4: ファイルに保存する

生成された物語を `content/stories/` フォルダにMDファイルとして保存する。

**ファイル名の命名規則：**
```
content/stories/[書籍略称]-ch[XX].md
例: content/stories/genri-kouron-ch01.md
```

**フロントマターの形式：**
```markdown
---
title: "第1話：はじまりの問い"
date: "2026-04-18"
source: "原理講論"
chapter: "第1章"
description: "この話の概要を1〜2文で"
---

（物語本文）
```

---

## Step 5: 公開する

```powershell
cd C:\Users\kou56\projects\Article-generation
git add content/stories/[ファイル名].md
git commit -m "第X話を追加"
git push
```

GitHubへのpush後、Vercelが自動でデプロイしてURLに反映される。

---

## Step 6: (任意) 品質チェック — `/story-review`

```
/story-review
[生成した物語のMarkdownを貼り付け]
```

チェック内容：
- 師匠・弟子のキャラクター一貫性
- 原典への忠実度
- 初心者への配慮（専門用語の補足など）
- 物語としての完成度

---

## Skill一覧

| Skill | 用途 | いつ使う |
|-------|------|---------|
| `/narrativize` | テキスト → 師匠・弟子の対話物語を生成 | メインの物語化作業 |
| `/concept-extract` | 物語化前の概念整理 | 長文・複雑な章を扱うとき |
| `/chapter-split` | 長文を複数話に分割する計画を立てる | 1章が長すぎるとき |
| `/story-review` | 生成した物語の品質チェック | 物語を保存する前の確認 |

---

## キャラクター設定（参考）

| キャラ | 役割 | 特徴 |
|--------|------|------|
| **師匠** | 真理を語る側 | 「〜じゃ」口調。たとえ話・比喩を多用。質問で弟子を導く |
| **弟子** | 読者の代弁者 | 丁寧語。素朴な疑問を持ち込む。段階的に理解していく |
| **ナレーター** | 場面設定・内面描写 | 斜体テキストで表現 |

**舞台：** 時と空間の交差点にある「迷い人の茶屋」

---

## ファイル構成

```
Article-generation/
├── content/stories/        ← 生成した物語MDファイルをここに保存
├── .claude/skills/
│   ├── narrativize.md      ← 物語化Skill
│   ├── concept-extract.md  ← 概念抽出Skill
│   ├── chapter-split.md    ← 章分割Skill
│   └── story-review.md     ← レビューSkill
└── src/app/                ← Next.js Webアプリ（自動で物語を表示）
```
