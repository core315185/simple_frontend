# strictモードと通常モードの違い

---

## strictモードとは

`"use strict";` という文字列をファイルや関数の先頭に書くことで有効になるモードです。
JavaScriptの「危険な書き方」や「バグになりやすい書き方」を禁止し、エラーとして検出してくれます。

ES6（2015年）以降のモジュール構文（`import`/`export`）では自動的にstrictモードになります。

---

## 主な違い

### 1. 未宣言の変数への代入

| モード | 動作 |
|--------|------|
| 通常 | グローバル変数として勝手に作られる（バグの原因） |
| strict | `ReferenceError` が発生する |

```javascript
// 通常モード
x = 10; // エラーにならず、グローバル変数 x が作られる

// strictモード
"use strict";
x = 10; // ReferenceError: x is not defined
```

---

### 2. 読み取り専用プロパティへの代入

| モード | 動作 |
|--------|------|
| 通常 | 無視される（エラーにならない） |
| strict | `TypeError` が発生する |

```javascript
"use strict";
const obj = {};
Object.defineProperty(obj, "x", { value: 1, writable: false });
obj.x = 2; // TypeError: Cannot assign to read only property
```

---

### 3. 重複した引数名

| モード | 動作 |
|--------|------|
| 通常 | 許可される |
| strict | `SyntaxError` が発生する |

```javascript
// 通常モード
function add(a, a) { return a + a; } // 許可される

// strictモード
"use strict";
function add(a, a) { return a + a; } // SyntaxError
```

---

### 4. `this` の扱い（関数内）

| モード | 動作 |
|--------|------|
| 通常 | `this` はグローバルオブジェクト（`window` や `global`）になる |
| strict | `this` は `undefined` になる |

```javascript
function showThis() {
  console.log(this);
}

// 通常モード: グローバルオブジェクトが表示される
// strictモード: undefined が表示される
```

---

### 5. `delete` の使用制限

| モード | 動作 |
|--------|------|
| 通常 | 変数や関数の削除を黙って無視する |
| strict | `SyntaxError` が発生する |

```javascript
"use strict";
let x = 1;
delete x; // SyntaxError
```

---

## なぜstrictモードを使うべきか

- バグを早期に発見できる
- 意図しないグローバル変数の汚染を防げる
- コードの意図が明確になる
- JavaScriptエンジンが最適化しやすくなる（パフォーマンス向上）

---

## プログラムで確認する

`strict_mode.js` を Node.js で実行して、動作の違いを確認してください。

```bash
node strict_mode.js
```
