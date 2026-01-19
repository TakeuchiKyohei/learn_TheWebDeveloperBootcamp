// classListの演習問題
// index.htmlを用意しています。6つの<li>要素があり、その中の2つには'highlight'クラスが適用されています。

// JavaScriptのclassListプロパティを使って'highlight'クラスの適用状態を反転してください（クラスがあれば取り除き、クラスが無ければ適用する）

// やり方としては、<li>要素全部に対して、順番に'highlight'クラスをtoggleすればOKです。結果は以下のようになります：

const listItems = document.querySelectorAll('li');

for (let item of listItems) {
  item.classList.toggle('highlight');
}

// listItems.forEach((item) => {
//   item.classList.toggle('highlight');
// })
