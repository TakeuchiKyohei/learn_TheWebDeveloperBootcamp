// スタイル操作の演習問題
// index.htmlをあらかじめ用意しています。index.htmlには変更を加えずに、JavaScript以下の変更を行ってください：

// containerというIDのdivを取得して、JavaScriptでtext-alignをcenterに更新してください

// 画像を取得して、JavaScriptでwidthを150pxに更新し、border-radiusを50%に更新してください

// JavaScriptでスタイルを変更するときは、キャメルケースなので注意しましょう！（background-colorではなく、backgroundColor、など）

const container = document.querySelector("#container");
container.style.textAlign = "center";

const img = document.querySelector("img");
img.style.width = "150px";
img.style.borderRadius = "50%";
