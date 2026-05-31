// let：一時的デッドゾーン（Temporal Dead Zone）
// 実行方法: node 06_let_tdz.js
// let/const は巻き上げされるが、宣言前にアクセスすると ReferenceError になる

try {
  eval(`
    console.log(earlyAccess); // 宣言より前にアクセス
    let earlyAccess = "定義";
  `);
} catch (e) {
  console.log("宣言前アクセス:", e.constructor.name, "→", e.message);
}

// var との比較：var なら undefined になるだけでエラーにならない
function withVar() {
  console.log("var の宣言前アクセス:", x); // undefined
  var x = 10;
}
withVar();
