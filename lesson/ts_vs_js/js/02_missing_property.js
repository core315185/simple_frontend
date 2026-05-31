// 存在しないプロパティへのアクセス
// 実行方法: node 02_missing_property.js

// JavaScriptでは存在しないプロパティにアクセスしても undefined が返るだけ
const user = { name: "Alice", age: 30 };

console.log("user.name  →", user.name);
console.log("user.email →", user.email); // undefined（エラーにならない）

// さらにその先を参照しようとすると実行時エラーになる
try {
  console.log("user.email.length →", user.email.length);
} catch (e) {
  console.log("user.email.length → 実行時エラー:", e.message);
}

// TypeScriptのインターフェースを使えば
// user.email にアクセスする前にコンパイル時に教えてくれる
