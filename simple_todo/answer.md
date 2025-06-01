1. タスクの完了
    - リスト内のタスクをクリックしたら、取り消し線をつける（CSSで text-decoration: line-through; を適用するクラスを作り、JavaScriptでそのクラスを付け外しする）。
    - 参考: element.classList.toggle('completed')
1. タスクの削除
    - 各タスクの横に「削除」ボタンを追加する。
    - 削除ボタンがクリックされたら、そのタスクの <li> 要素をリストから削除する。
    - 参考: parentElement.removeChild(childElement)
1. データの永続化 (LocalStorage)
    - 追加されたタスクをブラウザのLocalStorageに保存し、ページをリロードしてもタスクが消えないようにする。
    - 参考: localStorage.setItem('todos', JSON.stringify(tasksArray)) と JSON.parse(localStorage.getItem('todos'))
