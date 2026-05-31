// [TS] null安全：undefined / null を安全に扱う
// コンパイル: npx tsc  実行: node dist/ts_vs_js/ts/07_null_safety.js

interface Config {
  host: string;
  port?: number; // 省略可能（undefined になりうる）
}

const config: Config = { host: "localhost" };

// オプショナルチェーン（?.）：undefined なら undefined を返す
// ?? はデフォルト値を指定する Nullish Coalescing 演算子
const port = config.port ?? 3000;
console.log("ポート番号:", port);

// TypeScript では port? と書くことで「undefined かもしれない」と明示でき
// undefined のまま使おうとするとコンパイルエラーになる

export {};
