// const：オブジェクトの中身は変更できる
// 実行方法: node 08_const_object.js
// const は「変数が指す参照先」を固定するため、
// オブジェクトの中身（プロパティ）は変更できる

const user = { name: "Alice" };
console.log("変更前:", user.name);

user.name = "Bob"; // プロパティの変更はOK
console.log("プロパティ変更後:", user.name);

// オブジェクト自体への再代入は TypeError
try {
  eval('"use strict"; const obj = { name: "Alice" }; obj = { name: "Bob" };');
} catch (e) {
  console.log("オブジェクト自体への再代入:", e.constructor.name, "→", e.message);
}
