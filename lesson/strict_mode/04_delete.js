// strictモード vs 通常モード：delete による変数削除
// 実行方法: node 04_delete.js

// 通常モード：delete は false を返して無視される
function normalMode() {
  let y = 10;
  const result = delete y; // false が返るだけ
  console.log("通常モード - delete の結果:", result, "/ y の値:", y);
}

// strictモード：SyntaxError が発生する
// SyntaxError は解析時に発生するため eval を使って実行時に捕捉する
function strictMode() {
  try {
    eval('"use strict"; let z = 10; delete z;');
  } catch (e) {
    console.log("strictモード - delete 変数:", e.constructor.name, "→", e.message);
  }
}

normalMode();
strictMode();
