# この掲示板について
この掲示板は、**ユーザー名**と**投稿内容**を入力し、投稿すると掲示板として投稿できるシステムです。
# 主な仕組み
### 投稿者の入力
どちらかでも入力されていないと、投稿できないようになっています。
### 投稿機能
投稿ボタンが押されると、スプレッドシートにデータが送信されます。投稿を受け取るプログラムは、Apps Scriptを使用して受け取っています。
# サーバー稼働状況
サーバーは、独自サーバーを使用しておらず、スプレッドシートを利用しています。  
サーバー稼働状況は、[こちら](https://www.google.com/appsstatus/dashboard/#:~:text=Apps%20スクリプト)で確認できます。
# スパム対策
スパムに関しては、スプレッドシートの行を一気に削除することで対策できます。  
迷惑なスパムが続く場合、サービスを停止する場合がありますので、ご了承ください。
# 自分が管理者になる方法
掲示板の管理者にならないと、投稿の管理ができません。これから、管理者になる方法を説明します。
### このリポジトリをフォーク
このリポジトリをフォークします。
### プログラムを編集
#### スプレッドシートでApps Scriptを作成
スプレッドシートで、Apps Scriptを作成します。プログラムは、以下を入力します。
```
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var jsonData = JSON.stringify(data);
  return ContentService.createTextOutput(jsonData).setMimeType(ContentService.MimeType.JSON);
}
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var date = new Date();
  var username = e.parameter.username;
  var content = e.parameter.content;
  sheet.appendRow([date, username, content]);
  return ContentService.createTextOutput("投稿が完了しました！");
}
```
入力したら、  
デプロイ>新しいデプロイ>デプロイタイプ>ウェブアプリ>アクセスできるユーザー>全員>デプロイ  
と操作し、デプロイが更新されたら、ウェブアプリのURLをコピーしておきます。
#### index.htmlの更新
75行目のプログラムを、以下に変更します。
```
<form id="postForm" action="さっきコピーしたURL" method="POST">
```
また、  
94行目のプログラムを、以下に変更します。
```
const response = await fetch('さっきコピーしたURL');
```
さっきコピーしたURLの部分は、ちゃんと置き換えておきます。
### 列の準備
1行目からはデータを抽出しませんのでわかりやすい列を作っておきます。
![列の見本](イメージ図)
### GitHubPageを公開
GitHubPageを公開して自分が管理者の掲示板の完成です。
# 改造について
改造は基本的に許容しています。  
ですが、改造をしないとしても**CAPTCHA認証はコードを改めて**ください。CAPTCHAが有効になりません。
![列の見本](無効)
# アップデート履歴
## 2025/03/20
以下の変更点があります。  
・新しい投稿が上に積み上がっていくようになりました。  
・それぞれの投稿に投稿ナンバーをつけました。  
・それぞれの投稿に報告ボタンを実装され、Googleフォームで報告できるようになりました。
## 2025/03/22
CAPTCHA認証を導入しました。
# 貢献者
<img src="YU-TechnicalDepartment" width="50"><img src="Copilot" width="50">  
ご協力いただき、ありがとうございます。
