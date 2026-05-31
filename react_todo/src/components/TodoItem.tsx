// ================================================================
// TodoItem.tsx — 1つのタスクを表示するコンポーネント
// ================================================================
//
// 【TypeScriptの考え方②: props に型をつける】
//   JSX の関数コンポーネントでは、引数（props）に interface を使って
//   型をつけます。これにより：
//   - 必要なpropsを渡し忘れるとエラーになる
//   - エディタが補完してくれる
//
//   書き方：
//     interface Props { ... }
//     function Component({ prop1, prop2 }: Props) { ... }
//
// 【Reactの考え方①: コンポーネント】
//   画面のパーツをコンポーネント（部品）として分割します。
//   <li> 1つ分の見た目と動作をここにまとめています。
//
// 【Reactの考え方②: props（プロパティ）】
//   親コンポーネントからデータや関数を受け取る仕組みです。
//   引数のオブジェクト { todo, onToggle } がpropsです。
//   - todo     : タスクのデータ（id, text, completed を持つオブジェクト）
//   - onToggle : クリックされたときに呼ぶ関数（親から渡される）
//
// ================================================================

import { Todo } from "../types";

// このコンポーネントが受け取るpropsの型定義
interface Props {
  todo: Todo;                        // タスクデータ（id, text, completed）
  onToggle: (id: number) => void;   // 引数はid(number)、戻り値なし(void)
}

function TodoItem({ todo, onToggle }: Props) {
  return (
    // className は HTML の class 属性に相当（JSXではclassが予約語のため）
    // todo.completed が true のとき "completed" クラスを追加する
    <li
      className={todo.completed ? "completed" : ""}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
}

export default TodoItem;
