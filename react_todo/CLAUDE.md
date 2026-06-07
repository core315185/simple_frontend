# React ToDo アプリ — プロジェクト概要

React + TypeScript の学習用シンプルToDoアプリ。タスクの追加・完了トグルができる。

## 技術スタック

- React 19
- TypeScript 6
- Vite 8（開発サーバー・ビルド）
- ESLint（コードチェック）

## 開発コマンド

```bash
npm install       # 依存パッケージのインストール（初回のみ）
npm run dev       # 開発サーバー起動 → http://localhost:5173
npm run lint      # ESLintによるコードチェック
npm run build     # 本番用ビルド（dist/ に出力）
```

## ファイル構成

```
src/
├── main.tsx          # エントリーポイント（createRoot）
├── App.tsx           # ルートコンポーネント（todos の state 管理）
├── App.css           # アプリスタイル
├── index.css         # グローバルスタイル
├── types.ts          # 共通型定義（Todo interface）
└── components/
    ├── TodoInput.tsx  # 入力欄コンポーネント
    └── TodoItem.tsx   # タスク1件のコンポーネント
```

## コーディング規約

- コンポーネント名・ファイル名は PascalCase（`TodoItem.tsx`）
- イベントハンドラは `handle〇〇`、propsで受け取る関数は `on〇〇`
- コンポーネントは `export default`、型定義は名前付きエクスポート
- ファイルの書き順: import → 型定義 → コンポーネント本体 → export

## データ構造

```ts
interface Todo {
  id: number;        // Date.now() で生成
  text: string;
  completed: boolean;
}
```

データは App.tsx の `useState<Todo[]>` で一元管理し、子コンポーネントへ props で渡す。

## 目的

学習用プロジェクト（Lesson用）。ファイル内のコメントは React / TypeScript の概念解説を含む教育目的のもの。コードを変更する際は解説コメントとの整合性に注意。
