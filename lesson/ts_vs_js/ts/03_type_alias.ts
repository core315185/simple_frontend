// [TS] 型エイリアス（Type Alias）とユニオン型
// コンパイル: npx tsc  実行: node dist/ts_vs_js/ts/03_type_alias.js

// type キーワードで型に名前をつけられる
type Point = {
  x: number;
  y: number;
};

type Color = "red" | "green" | "blue"; // ユニオン型：特定の値だけを許可

function paintPoint(point: Point, color: Color): void {
  console.log(`(${point.x}, ${point.y}) を ${color} で塗る`);
}

paintPoint({ x: 10, y: 20 }, "red");
// paintPoint({ x: 10, y: 20 }, "yellow"); // ← コンパイルエラー（yellowは許可されていない）

export {};
