const { app, BrowserWindow } = require("electron");
//electronというモジュール（拡張プログラム）の中からappと
//BrowserWindowという機能取り出し変数として保存
//appはアプリケーション本体、BrowserWindowは表示するwindow
function createWindow () {
 let win = new BrowserWindow({
   width: 1000,
   height: 1000,
   x: 0,
   y: 0,
   backgroundColor: "#6600",
   webPreferences:{
  　nodeIntegration: true
     //node.jsの機能を使えるようにする
   }
 });
 win.loadURL("https://www.youtube.com/");
 let child = new BrowserWindow({
   width: 300,
   height: 1000,
   x:1000,
   y:0,
   parent: win,
   backgroundColor: "#660066",
   webPreferences:{
     nodeIntegration: true
     //node.jsの機能を使えるようにする
   }
 });
 child.loadFile("index.html");
 //引数に指定したHTMLファイルを読み込んでwindowに表示する
}

app.whenReady().then(createWindow);
//electronアプリを起動して初期化した時に実行すること
app.on("window-all-closed", () => {
  //windowが閉じられた時
  if (process.platform !== "darwin"){
    //platformがDarwin(mac)の場合
    app.quit()
    //閉じる
  }
})