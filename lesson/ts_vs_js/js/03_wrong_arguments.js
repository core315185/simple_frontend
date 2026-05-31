// 関数に渡す引数の間違い
// 実行方法: node 03_wrong_arguments.js

// JavaScriptでは引数の数や型をチェックしない
function greet(name) {
  return `こんにちは、${name}さん！`;
}

console.log(greet("Alice"));         // 期待どおり
console.log(greet());                // "こんにちは、undefinedさん！"（引数なしでも動く）
console.log(greet("Alice", "Bob"));  // 余分な引数は無視される

// TypeScriptなら: function greet(name: string): string
// greet() はコンパイルエラー、greet("Alice", "Bob") もコンパイルエラー
