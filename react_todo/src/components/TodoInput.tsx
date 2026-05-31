// ================================================================
// TodoInput.tsx — タスク入力欄と「追加」ボタンのコンポーネント
// ================================================================
//
// 【Reactの考え方③: useState（状態管理）】
//   Reactでは、変化するデータを「state（状態）」として管理します。
//   useState を使うと：
//     const [値, 値を更新する関数] = useState(初期値);
//   値が変わるたびに、コンポーネントが自動で再描画されます。
//
// 【Reactの考え方④: 制御されたコンポーネント（controlled component）】
//   inputの値をstateで管理することで、JavaScriptが
//   「入力欄の値を常に把握している」状態を作ります。
//   value={inputText}        → stateの値をinputに表示
//   onChange={...}           → 入力のたびにstateを更新
//
// 【TypeScriptの考え方③: イベントの型】
//   onKeyDown のような DOM イベントには React が用意した型があります。
//   React.KeyboardEvent<HTMLInputElement>
//     ↑ どのHTML要素で起きたイベントか をジェネリクスで指定します。
//   型をつけることで event.key などのプロパティが補完されます。
//
// ================================================================

import { useState } from "react";

// このコンポーネントが受け取るpropsの型定義
interface Props {
  onAdd: (text: string) => void;  // 追加時に呼ぶ関数。引数はstring、戻り値なし
}

function TodoInput({ onAdd }: Props) {
  // useState<string> のように型引数を渡すこともできる
  // 初期値 "" から string と推論されるので、ここでは省略しても同じ
  const [inputText, setInputText] = useState<string>("");

  const handleAdd = () => {
    const trimmed = inputText.trim();

    if (trimmed === "") {
      alert("タスクを入力してください。");
      return;
    }

    onAdd(trimmed);
    setInputText("");
  };

  // 【TypeScriptの考え方③: イベントの型】
  // React.KeyboardEvent<HTMLInputElement> で「input要素のキーボードイベント」と明示する
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="新しいタスクを入力"
        value={inputText}
        // e は React.ChangeEvent<HTMLInputElement> と自動推論される
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>追加</button>
    </div>
  );
}

export default TodoInput;
