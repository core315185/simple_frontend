// ループでの var と let の違い
// 実行方法: node 09_loop.js

// var：ループが終わっても変数が残る
for (var i = 0; i < 3; i++) {}
console.log("ループ後の var i:", i); // 3（ループの外でも生きている）

// let：ループのブロック内でのみ有効
for (let j = 0; j < 3; j++) {}
try {
  console.log("ループ後の let j:", j);
} catch (e) {
  console.log("ループ後の let j:", e.constructor.name, "→", e.message);
}
