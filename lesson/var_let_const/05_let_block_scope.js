// let：ブロックスコープ
// 実行方法: node 05_let_block_scope.js

if (true) {
  let blockVar = "ブロック内";
  console.log("ブロック内からアクセス:", blockVar);
}

// ブロックの外からはアクセスできない → ReferenceError
try {
  console.log("ブロック外からアクセス:", blockVar);
} catch (e) {
  console.log("ブロック外からアクセス:", e.constructor.name, "→", e.message);
}
