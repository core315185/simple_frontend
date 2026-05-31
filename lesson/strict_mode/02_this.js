// strictモード vs 通常モード：this の扱い
// 実行方法: node 02_this.js

// 通常モード：関数内の this はグローバルオブジェクト（Node.js では global）
function normalMode() {
  console.log("通常モード - 関数内の this:", this === global ? "globalオブジェクト" : this);
}

// strictモード：関数内の this は undefined
function strictMode() {
  "use strict";
  console.log("strictモード - 関数内の this:", this);
}

normalMode();
strictMode();
