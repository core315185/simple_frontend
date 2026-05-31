// [TS] クラスとアクセス修飾子（private / readonly）
// コンパイル: npx tsc  実行: node dist/ts_vs_js/ts/06_access_modifier.js

class BankAccount {
  private balance: number; // クラス内からしかアクセスできない
  readonly owner: string;  // 読み取り専用

  constructor(owner: string, initialBalance: number) {
    this.owner = owner;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("入金額は正の数でなければなりません");
    }
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount("Alice", 1000);
account.deposit(500);
console.log(`${account.owner} の残高:`, account.getBalance());

// account.balance;       // ← コンパイルエラー（private にアクセスできない）
// account.owner = "Bob"; // ← コンパイルエラー（readonly に代入できない）

export {};
