// var：関数スコープ（ブロックを超えて有効）
// 実行方法: node 03_var_scope.js

function varScope() {
  if (true) {
    var insideIf = "if の中で宣言";
  }
  // var はブロック {} を超えて関数スコープ内であればアクセスできる
  console.log("if の外から var にアクセス:", insideIf);
}
varScope();
