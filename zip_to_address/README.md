# 郵便番号から住所自動入力フォーム

## このプロジェクトのポイント

* HTML
  * id="zipcode": ユーザーが郵便番号を入力するテキストフィールドです（blurイベントでAPI呼び出し）。
  * id="prefecture", id="address1", id="address2", id="address3": APIの結果を表示する住所入力欄です。

* CSS
  * 見やすさと操作性を高めるため、中央揃え・影・丸みのあるカード型デザインを採用。
  * フォーム入力欄の間隔やラベルの明確化など、基本的なUI/UX向上に配慮しています。

* JavaScript
  * blurイベントリスナーで郵便番号入力後にAPIを呼び出します。
  * 入力された7桁の郵便番号を3桁と4桁に分割して、GitHub上のJSON API（[https://madefor.github.io/postal-code-api/）にリクエストします。](https://madefor.github.io/postal-code-api/）にリクエストします。)
  * レスポンスとして返ってきたJSONから、日本語の住所情報を抽出し、各フィールドに自動入力します。
  * エラー処理も実装されており、入力ミスやAPIの取得失敗に対してアラートを表示します。

## 使い方

1. `index.html` をブラウザで開きます。
2. 郵便番号欄に7桁の郵便番号を入力し、入力欄の外にフォーカスを移す（Tabキーやクリックなど）と、自動的に住所が入力されます。

## 次のステップ（発展アイデア）

1. 全角で入力された場合にも対応する
2. エラー表示をUI上で明示的にする（フォーム下部への表示など）。

## クレジット

* 郵便番号API: [madefor/postal-code-api](https://madefor.github.io/postal-code-api/)
