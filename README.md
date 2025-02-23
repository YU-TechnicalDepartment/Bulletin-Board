# この掲示板について
この掲示板は、**ユーザー名**と**投稿内容**を入力し、投稿すると掲示板として投稿できるシステムです。
# 主な仕組み
### 投稿者の入力
どちらかでも入力されていないと、投稿できないようになっています。
### 投稿機能
投稿ボタンが押されると、スプレッドシートにデータが送信されます。投稿を受け取るプログラムは、Apps Scriptを使用して受け取っています。
# サーバー稼働状況
サーバーは、独自サーバーを使用しておらず、スプレッドシートを利用しています。  
サーバー稼働状況は、[こちら](https://www.google.co.jp/appsstatus/dashboard/#:~:text=Google%20%E3%82%B9%E3%83%97%E3%83%AC%E3%83%83%E3%83%89%E3%82%B7%E3%83%BC%E3%83%88)で確認できます。
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
var sheet = SpreadsheetApp.getActiveSpreadsheet) .getActiveSheet();
var data = sheet.getDataRange() .getValues();
var jsonData = JSON.stringify(data) ;
return ContentService.createTextOutput(jsonData) .setMimeType(ContentService.MimeType.
JSON) ;
｝
function doPost (e) {
var sheet = SpreadsheetApp.getActiveSpreadsheet) .getActiveSheet();
var date = new Date();
var username = e.parameter.username;
var content = e.parameter.content;
sheet. appendRow([date, username, content]) ;
return ContentService.createTextoutput（"投稿が完了しました！"）；
｝
```
入力したら、  
デプロイ>新しいデプロイ>デプロイタイプ>ウェブアプリ>アクセスできるユーザー>全員>デプロイ  
と操作し、デプロイが更新されたら、ウェブアプリのURLをコピーしておきます。
#### index.htmlの更新
43行目のコードを、以下に変更します。
```
<form id="postForm" action="さっきコピーしたURL" method="POST">
```
さっきコピーしたURLの部分は、ちゃんと置き換えておきます。
### 列の準備
1行目からはデータを抽出しませんのでわかりやすい列を作っておきます。
![列の見本](イメージ図)
