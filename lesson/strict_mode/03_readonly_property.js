// strictモード vs 通常モード：読み取り専用プロパティへの代入
// 実行方法: node 03_readonly_property.js

// 通常モード：代入が無視される（エラーにならない）
function normalMode() {
  const obj = {};
  Object.defineProperty(obj, "x", { value: 42, writable: false });
  obj.x = 100; // 無視される
  console.log("通常モード - 読み取り専用プロパティへの代入後の値:", obj.x); // 42 のまま
}

// strictモード：TypeError が発生する
function strictMode() {
  "use strict";
  const obj = {};
  Object.defineProperty(obj, "x", { value: 42, writable: false });
  try {
    obj.x = 100;
  } catch (e) {
    console.log("strictモード - 読み取り専用プロパティへの代入:", e.constructor.name, "→", e.message);
  }
}

normalMode();
strictMode();
