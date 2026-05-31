// 動的型付けによる意図しない動作
// 実行方法: node 01_type_coercion.js

// JavaScriptでは型が自動的に変換される（型強制）
function add(a, b) {
  return a + b;
}

console.log("add(1, 2)     →", add(1, 2));       // 期待どおり: 3
console.log('add(1, "2")   →', add(1, "2"));     // 意図しない: "12"（文字列結合）
console.log('add("1", "2") →', add("1", "2"));   // 意図しない: "12"

// TypeScriptなら add(a: number, b: number): number と書くことで
// 上の2行はコンパイルエラーになり、実行前に気づける
