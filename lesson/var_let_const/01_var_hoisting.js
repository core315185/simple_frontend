// var：巻き上げ（hoisting）
// 実行方法: node 01_var_hoisting.js

function varHoisting() {
  console.log("宣言前の x:", x); // undefined（エラーにならない）
  var x = 10;
  console.log("宣言後の x:", x); // 10
}
varHoisting();
