// strictモード vs 通常モード：未宣言変数への代入
// 実行方法: node 01_undeclared_variable.js

// 通常モード：未宣言変数に代入してもエラーにならない
function normalMode() {
  undeclaredVar = "通常モード：エラーなし";
  console.log("通常モード - 未宣言変数への代入:", undeclaredVar);
  delete undeclaredVar; // グローバルに作られた変数を後始末
}

// strictモード：未宣言変数への代入は ReferenceError になる
function strictMode() {
  "use strict";
  try {
    undeclaredVar2 = "strictモード：エラーになるはず";
    console.log("strictモード - 未宣言変数への代入: エラーなし（予期しない動作）");
  } catch (e) {
    console.log("strictモード - 未宣言変数への代入:", e.constructor.name, "→", e.message);
  }
}

normalMode();
strictMode();
