// レインボーテキスト演習問題
// 7つのspan要素から構成されたh1要素を用意しています。

// JavaScriptでそれぞれの文字の色を変更して、虹色にしてください

// app.jsにはcolorsという配列を用意しています。['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']の順番に色を定義しています

// span要素をすべて取得して、それぞれのテキストの色をcolorsの配列に定義されている順で更新してください。1つ目のspanは'red'、2つ目のspanは'orange'という感じです。結果は下図のようになります：



const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //この行は編集しないでください

//この下にコードを書いてください:
const spans = document.querySelectorAll("span");
// for (let i = 0; i < spans.length; i++) {
//   spans[i].style.color = colors[i];
// }

spans.forEach((span, index) =>{
  span.style.color = colors[index];
})
