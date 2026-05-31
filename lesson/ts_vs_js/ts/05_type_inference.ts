// [TS] 型推論（Type Inference）
// コンパイル: npx tsc  実行: node dist/ts_vs_js/ts/05_type_inference.js

// 代入した値から型を自動的に推論する（型注釈を書かなくてよい）
const message = "Hello, TypeScript!"; // string と推論される
const count = 42;                     // number と推論される
const flag = true;                    // boolean と推論される

// message = 123; // ← コンパイルエラー（string に number は代入できない）

console.log("message の値:", message);
console.log("count の値:  ", count);
console.log("flag の値:   ", flag);

export {};
