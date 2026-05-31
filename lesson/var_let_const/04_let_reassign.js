// let：再代入はできる
// 実行方法: node 04_let_reassign.js

let count = 0;
console.log("初期値:", count);

count = 1; // 再代入はOK
console.log("再代入後:", count);

// 再宣言はできない（コメントを外すと SyntaxError）
// let count = 2;
