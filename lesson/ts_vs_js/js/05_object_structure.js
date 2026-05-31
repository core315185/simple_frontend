// オブジェクトの構造の違い
// 実行方法: node 05_object_structure.js

// JavaScriptでは、同じ「ユーザー」のつもりで作ったオブジェクトが
// 異なる構造になっていてもエラーにならない
function printUserName(user) {
  console.log("ユーザー名:", user.name);
}

const user1 = { name: "Alice", age: 30 };
const user2 = { userName: "Bob", age: 25 }; // name ではなく userName になっている

printUserName(user1); // 正常
printUserName(user2); // undefined（構造の間違いに気づけない）

// TypeScriptなら interface User { name: string; age: number; } と定義することで
// user2 を渡した時点でコンパイルエラーになる
