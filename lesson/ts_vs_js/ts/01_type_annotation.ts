// [TS] 型注釈（Type Annotation）
// コンパイル: npx tsc  実行: node dist/ts_vs_js/ts/01_type_annotation.js

// 引数と戻り値に型を書く → 型が違えばコンパイルエラー
function add(a: number, b: number): number {
  return a + b;
}

console.log("add(1, 2) →", add(1, 2)); // 3
// add(1, "2"); // ← コンパイルエラー（コメントを外して確認してみよう）
// add(1); // ← コンパイルエラー（引数が足りない）

export {};
