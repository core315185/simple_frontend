// 型チェックをJavaScriptで手動でやると...
// 実行方法: node 04_manual_type_check.js

// TypeScriptがないと、型チェックを自分で書かなければならない
function safeAdd(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError(
      `引数は数値である必要があります。受け取った型: ${typeof a}, ${typeof b}`
    );
  }
  return a + b;
}

console.log("safeAdd(1, 2)   →", safeAdd(1, 2));
try {
  safeAdd(1, "2");
} catch (e) {
  console.log('safeAdd(1, "2") →', e.message);
}

// TypeScriptを使えばこのような手動チェックが不要になる
