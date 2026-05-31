// const：再代入はできない
// 実行方法: node 07_const_reassign.js

const PI = 3.14;
console.log("PI:", PI);

// 再代入しようとすると TypeError
try {
  eval('"use strict"; const PI2 = 3.14; PI2 = 3.15;');
} catch (e) {
  console.log("const への再代入:", e.constructor.name, "→", e.message);
}
