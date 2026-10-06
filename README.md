# nantocorn

とうもろこしと玉ねぎを中心に育てる農園のブランドサイトです。トップページで農園の想い、作物、収穫時期、ブログ記事を紹介し、MicroCMS と連携して記事更新を行える構成になっています。

## 画面構成

- トップページ
  - ヒーローセクション
  - 農園の想い
  - 作物紹介
  - 収穫カレンダー
  - ブログ最新記事
  - お問い合わせ
- ブログ一覧ページ
- ブログ詳細ページ

## 主な機能

- Next.js 16 + App Router を使った静的/動的ページ構成
- Tailwind CSS によるデザイン
- MicroCMS からブログ記事を取得して表示
- 収穫時期の月別カレンダー表示
- Instagram / メール / 所在地の連絡先表示
- Vercel Analytics の組み込み

## 技術スタック

- Next.js 16.3.3
- React 19
- TypeScript 5.7
- Tailwind CSS 4
- microcms-js-sdk
- pnpm

## ディレクトリ構成

```text
.
├── app/                  # App Router のページ
│   ├── blog/             # ブログ一覧・詳細ページ
│   ├── layout.tsx        # ルートレイアウト
│   └── page.tsx          # トップページ
├── components/           # UI コンポーネント
│   └── site/             # サイト専用コンポーネント
├── lib/                  # 共通ロジックと設定
│   ├── blog-posts.ts     # MicroCMS 連携
│   ├── site-config.ts    # サイト名・連絡先・設定
│   └── utils.ts          # ユーティリティ
├── public/               # 画像・ロゴなどの静的ファイル
├── .env.example          # 環境変数サンプル
├── next.config.mjs       # Next.js 設定
├── package.json           # 依存関係とスクリプト
├── pnpm-lock.yaml        # pnpm ロックファイル
├── tsconfig.json         # TypeScript 設定
└── README.md
```

## 必要条件

- Node.js 24.x
- pnpm 12.3.4 以上（package.json の `packageManager` に記載）

## セットアップ

1. リポジトリをクローン

```bash
git clone https://github.com/kidatakuya/nantocorn.git
cd nantocorn
```

2. 依存関係をインストール

```bash
pnpm install
```

3. 環境変数を設定

```bash
cp .env.example .env.local
```

`.env.local` を編集して MicroCMS の API キーを設定します。

```env
MICROCMS_API_KEY=your_microcms_api_key
```

`lib/blog-posts.ts` では `serviceDomain: 'nantocorn'` を使用しているため、MicroCMS のサービスドメインが異なる場合は合わせて変更してください。

## 開発サーバー起動

```bash
pnpm dev
```

ブラウザで `http://localhost:3000` を開くとサイトを確認できます。

## 本番ビルド

```bash
pnpm build
```

ビルド後、次のコマンドで起動できます。

```bash
pnpm start
```

## サイト設定のカスタマイズ

`lib/site-config.ts` で以下の項目を編集できます。

- 農園名
- 説明文
- ロゴ
- 所在地
- メールアドレス
- Instagram URL

コンテンツを更新したい場合は、このファイルと各コンポーネントを編集します。

## MicroCMS 連携について

ブログ記事は `lib/blog-posts.ts` で以下のエンドポイントを利用しています。

```ts
const endpoint = 'blogs'
```

記事が存在しない場合は `404` を返して記事詳細ページで `notFound()` されます。

## デプロイ

本プロジェクトは Vercel でのデプロイを想定しています。

1. GitHub リポジトリを Vercel に接続
2. `MICROCMS_API_KEY` を環境変数として設定
3. デプロイを実行

## ライセンス

このリポジトリには明示的なライセンスファイルが含まれていないため、個別の利用条件は管理者に確認してください。
