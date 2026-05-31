// ================================================================
// App.tsx — アプリ全体を束ねるルートコンポーネント
// ================================================================
//
// 【Reactの考え方⑤: データは「上」で管理する】
//   タスクの一覧データ（todos）はここ App.tsx で管理します。
//   TodoInput や TodoItem は App から必要なデータや関数を
//   propsとして受け取るだけです。
//   → 「データの流れが一方向（上から下）」になります。
//
// 【Reactの考え方⑥: リストの描画と key】
//   配列を .map() で回してコンポーネントを並べるとき、
//   Reactは各要素を区別するために key が必要です。
//   key は同じリスト内でユニークな値を使います。
//
// 【TypeScriptの考え方④: useState にジェネリクスで型を渡す】
//   useState([]) だけだと TypeScript は「never[] 型の配列」と推論してしまい、
//   あとから要素を追加できなくなります。
//   useState<Todo[]>([]) と明示することで「Todo の配列」と確定します。
//
// 【todos の構造】
//   todos は以下のオブジェクトの配列です：
//   [
//     { id: 1748000000000, text: "買い物", completed: false },
//     { id: 1748000000001, text: "掃除",   completed: true  },
//     ...
//   ]
//
// ================================================================

import { useState } from "react";
import { Todo } from "./types";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  // 【TypeScriptの考え方④】
  // useState<Todo[]> で「Todo の配列」であることを明示する
  const [todos, setTodos] = useState<Todo[]>([]);

  // タスクを追加する処理（TodoInput から呼ばれる）
  // text: string と型が決まっているので、誤った型を渡すとエラーになる
  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // タスクの完了状態をトグルする処理（TodoItem から呼ばれる）
  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>My ToDo</h1>

      {/* TodoInput に「追加時の処理」を渡す */}
      <TodoInput onAdd={handleAdd} />

      {/* タスク一覧を <ul> で表示 */}
      <ul id="taskList">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
}

export default App;
