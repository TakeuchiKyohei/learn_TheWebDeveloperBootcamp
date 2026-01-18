// 属性操作の演習問題
// DOM要素の属性を操作しましょう。あらかじめindex.htmlでHTMLを用意しています。img要素をJavaScriptで取得して：

// srcをhttps://devsprouthosting.com/images/chicken.jpg に更新してください

// altの内容も"chicken"に更新してください
// 画像のurl: 'https://devsprouthosting.com/images/chicken.jpg'

const img = document.querySelector("img");
img.setAttribute("src", "https://devsprouthosting.com/images/chicken.jpg");
img.setAttribute("alt", "chicken");
