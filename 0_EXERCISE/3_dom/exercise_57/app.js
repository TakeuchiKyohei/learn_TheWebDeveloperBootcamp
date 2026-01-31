// 100個のボタン演習問題
// index.htmlを編集することなく、100個のbutton要素をJavaScriptで作成してください。buttonはすべてcontainerのIDを持つdivの中に作ってください。Udemyの演習問題ではappendは使用できないため、appendChildで実装してください。

// 100個のbutton要素を新規に作成

// button要素の中には何かしらのテキストを入れてください（何でもOK）

// 各button要素はcontainerのIDを持つdivの中に追加してください

// ヒント：100回のループを回し、ループの中でbutton要素を新規作成し、innerTextで中にテキストを設定します。そしてcontainerの中にそのbuttonをappendChildしましょう。


const container = document.querySelector("#container");

for (let i=1; i<=100; i++) {
  const button = document.createElement("button");
  button.textContent = `ボタン${i}`;
  button.type = "button";
  container.appendChild(button);
}
