// [TS] ジェネリクス（Generics）
// コンパイル: npx tsc  実行: node dist/ts_vs_js/ts/04_generics.js

// <T> で「どんな型でも受け取れるが、型の一貫性を保証する」関数を書ける
function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}

const firstNumber = firstItem([1, 2, 3]);       // T は number と推論される
const firstString = firstItem(["a", "b", "c"]); // T は string と推論される

console.log("firstItem([1,2,3])       →", firstNumber);
console.log('firstItem(["a","b","c"]) →', firstString);

export {};
