# tsconfig.json の説明

TypeScript プロジェクトのルートに置く設定ファイルです。
`npx tsc` を実行したとき、このファイルを読んでコンパイルの動作を決めます。

---

## このプロジェクトの tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "skipLibCheck": true,
    "types": ["node"]
  },
  "include": ["var_let_const/*.ts", "ts_vs_js/ts/*.ts"],
  "exclude": ["node_modules", "dist"]
}
```

---

## compilerOptions（コンパイラの動作設定）

### target
```json
"target": "ES2020"
```
コンパイル後の JavaScript をどのバージョンの構文で出力するかを指定します。

| 値 | 意味 |
|----|------|
| `ES5` | 古いブラウザにも対応（`var` や `function` に変換される） |
| `ES2020` | モダンブラウザ・Node.js 向け（`async/await` などをそのまま出力） |
| `ESNext` | 最新の仕様に合わせる |

---

### module
```json
"module": "commonjs"
```
モジュールの形式を指定します。

| 値 | 使う場面 |
|----|---------|
| `commonjs` | Node.js（`require` / `module.exports` の形式） |
| `ESNext` | ブラウザや Vite / webpack などのバンドラー（`import` / `export` の形式） |

---

### strict
```json
"strict": true
```
厳格な型チェックをまとめて有効にするオプションです。

以下の設定を一括で有効にします。

| 設定 | 内容 |
|------|------|
| `strictNullChecks` | `null` / `undefined` の扱いを厳しくチェック |
| `noImplicitAny` | 型が推論できない場合に `any` を自動使用せずエラーにする |
| `strictFunctionTypes` | 関数の引数の型を厳密にチェック |
| `strictPropertyInitialization` | クラスのプロパティが必ずコンストラクタで初期化されているかチェック |

`strict: true` は TypeScript を使う際の標準的な設定です。

---

### outDir
```json
"outDir": "./dist"
```
コンパイル後の `.js` ファイルを出力するディレクトリを指定します。

```
lesson/
├── var_let_const/01_var_hoisting.ts  ← 元のファイル
└── dist/
    └── var_let_const/01_var_hoisting.js  ← コンパイル後のファイル
```

---

### skipLibCheck
```json
"skipLibCheck": true
```
`node_modules` 内の型定義ファイル（`.d.ts`）のチェックをスキップします。
外部ライブラリの型定義の問題でコンパイルが止まるのを防ぎます。

---

### types
```json
"types": ["node"]
```
使用する型定義パッケージを明示的に指定します。
`"node"` を指定すると `process`、`Buffer` など Node.js 固有のAPIの型が使えるようになります。
（`npm install --save-dev @types/node` でインストール済みのものを参照します）

---

## include / exclude（コンパイル対象の指定）

### include
```json
"include": ["var_let_const/*.ts", "ts_vs_js/ts/*.ts"]
```
コンパイル対象のファイルをパターンで指定します。

| パターン | 意味 |
|---------|------|
| `*.ts` | 直下の `.ts` ファイル |
| `**/*.ts` | すべてのサブディレクトリを含む `.ts` ファイル |
| `var_let_const/*.ts` | `var_let_const/` 直下の `.ts` ファイルのみ |

---

### exclude
```json
"exclude": ["node_modules", "dist"]
```
コンパイル対象から除外するディレクトリやファイルを指定します。
`node_modules` と出力先の `dist` は必ず除外します。

---

## よく使うその他のオプション

```json
"rootDir": "./src"
```
ソースファイルのルートディレクトリを指定します。`outDir` と組み合わせてフォルダ構造を保ったまま出力できます。

```json
"sourceMap": true
```
`.js.map` ファイルを生成します。ブラウザのデバッガで TypeScript のコードと対応づけてデバッグできるようになります。

```json
"noImplicitReturns": true
```
関数のすべてのコードパスで値を返すことを強制します。

---

## コンパイルの実行

```bash
# tsconfig.json の設定に従ってコンパイル
npx tsc

# 特定のファイルだけコンパイル（tsconfig.json は使われない）
npx tsc src/index.ts

# ファイルの変更を監視して自動コンパイル
npx tsc --watch
```
