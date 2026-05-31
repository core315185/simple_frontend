// var：再宣言できる
// 実行方法: node 02_var_redeclare.js

var name = "Alice";
console.log("1回目:", name);

var name = "Bob"; // 同じ名前で再宣言してもエラーにならない
console.log("2回目（再宣言後）:", name);
