// [TS] インターフェース（Interface）
// コンパイル: npx tsc  実行: node dist/ts_vs_js/ts/02_interface.js

// オブジェクトの構造を型として定義する
interface User {
  name: string;
  age: number;
  email?: string; // ? は省略可能なプロパティ
}

const user1: User = { name: "Alice", age: 30 };
const user2: User = { name: "Bob", age: 25, email: "bob@example.com" };
// const user3: User = { userName: "Carol", age: 20 }; // ← コンパイルエラー（nameがない）

function printUserName(user: User): void {
  console.log("ユーザー名:", user.name);
  if (user.email !== undefined) {
    console.log("メール:", user.email);
  }
}

printUserName(user1);
printUserName(user2);

export {};
