// ================================================================
// main.tsx — アプリの起動ポイント（エントリーポイント）
// ================================================================
//
// 【Reactアプリの仕組み】
//   Reactは index.html の <div id="root"> の中にアプリ全体を描画します。
//   このファイルがその「橋渡し役」です。
//
// 【StrictMode とは】
//   開発中だけ有効になるモードで、潜在的な問題を検出して警告します。
//   本番ビルドには影響しません。副作用の検出のため、開発中は
//   コンポーネントが2回実行されることがあります。
//
// 【createRoot とは】
//   React 18以降の書き方です。
//   document.getElementById('root') で HTML 上の <div id="root"> を取得し、
//   そこに React アプリを「マウント（取り付け）」します。
//
// ================================================================

// StrictMode: 開発時の警告を強化する仕組み
import { StrictMode } from 'react'
// createRoot: HTMLの要素にReactを取り付ける関数
import { createRoot } from 'react-dom/client'
// グローバルなスタイルシートを読み込む
import './index.css'
// アプリ本体のコンポーネントを読み込む
import App from './App.tsx'

// document.getElementById('root') で <div id="root"> を取得し、
// その中に <App /> を描画する
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
