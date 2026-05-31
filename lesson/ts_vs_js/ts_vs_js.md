# TypeScriptとJavaScriptの違い

---

## TypeScriptとは

TypeScriptはMicrosoftが開発した、JavaScriptに**型システム**を追加したプログラミング言語です。
TypeScriptで書いたコードは、最終的にJavaScriptに変換（トランスパイル）されてブラウザやNode.jsで動きます。

```
TypeScriptのコード (.ts) → トランスパイル → JavaScriptのコード (.js) → 実行
```

---

## 主な違い

### 1. 型の宣言

**JavaScript**: 型を書かなくてよい（動的型付け）
```javascript
let name = "Alice";
name = 42; // 文字列から数値に変えてもエラーにならない
```

**TypeScript**: 型を明示的に書ける（静的型付け）
```typescript
let name: string = "Alice";
name = 42; // エラー：Type 'number' is not assignable to type 'string'
```

---

### 2. 関数の引数と戻り値の型

**JavaScript**:
```javascript
function add(a, b) {
  return a + b;
}
add(1, "2"); // "12" になる（文字列結合）。バグだが実行できてしまう
```

**TypeScript**:
```typescript
function add(a: number, b: number): number {
  return a + b;
}
add(1, "2"); // コンパイルエラー：型が違うと事前に検出できる
```

---

### 3. インターフェースと型定義

**TypeScript** では、オブジェクトの形（構造）を型として定義できます。

```typescript
interface User {
  name: string;
  age: number;
  email?: string; // ? は省略可能を意味する
}

const user: User = {
  name: "Alice",
  age: 30,
};
```

JavaScriptにはこのような仕組みがないため、実行するまで型の間違いがわかりません。

---

### 4. エラーの検出タイミング

| 項目 | JavaScript | TypeScript |
|------|-----------|-----------|
| 型エラーの検出 | 実行時（動いてから気づく） | コンパイル時（実行前に気づく） |
| IDEの補完 | 限定的 | 強力（型情報をもとに補完） |
| リファクタリング | 影響範囲が見えにくい | 型チェックで影響範囲を把握できる |

---

### 5. 将来の構文のサポート

TypeScriptは最新のJavaScript構文（ES2023など）を使いつつ、古いブラウザ向けのJavaScriptに変換できます。

---

## TypeScriptのデメリット

- 事前にコンパイル（トランスパイル）が必要
- 型定義を書く手間がかかる（学習コストがある）
- 小さなプロジェクトでは過剰になることがある

---

## どちらを使うべきか

| プロジェクト規模 | 推奨 |
|-----------------|------|
| 小さなスクリプト | JavaScript |
| 中〜大規模なアプリ | TypeScript |
| チーム開発 | TypeScript（型で意図を共有できる） |

---

## プログラムで確認する

### JavaScript ファイルの実行

`ts_vs_js/js/` フォルダ内で以下のコマンドを実行します。型チェックがないため、型の違いがバグとしてどう現れるかを確認できます。

```bash
node js/01_type_coercion.js
node js/02_missing_property.js
node js/03_wrong_arguments.js
node js/04_manual_type_check.js
node js/05_object_structure.js
```

---

### TypeScript ファイルの実行

TypeScript ファイルはそのままでは実行できないため、先にコンパイルが必要です。

**1. `lesson/` フォルダ（`tsconfig.json` がある場所）でコンパイルする**

```bash
npx tsc
```

コンパイルに成功すると `lesson/dist/ts_vs_js/ts/` に `.js` ファイルが生成されます。

**2. 生成された `.js` ファイルを実行する**

```bash
node dist/ts_vs_js/ts/01_type_annotation.js
node dist/ts_vs_js/ts/02_interface.js
node dist/ts_vs_js/ts/03_type_alias.js
node dist/ts_vs_js/ts/04_generics.js
node dist/ts_vs_js/ts/05_type_inference.js
node dist/ts_vs_js/ts/06_access_modifier.js
node dist/ts_vs_js/ts/07_null_safety.js
```

> **補足**: 各 `.ts` ファイルのコメントにも `コンパイル: npx tsc  実行: node dist/...` と記載しています。
