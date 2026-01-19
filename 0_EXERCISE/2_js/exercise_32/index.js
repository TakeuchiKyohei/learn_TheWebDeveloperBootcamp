// 配列を使った繰り返し処理の演習問題
// peopleという変数に人の名前を入れています。この配列の一つ一つの要素をfor文で処理して、名前を大文字でconsole.logしてください。

// 結果は以下のようになります：

// SCOOBY
// VELMA
// DAPHNE
// SHAGGY
// FRED
// ヒント： i をfor文の変数として用意して、配列のインデックスとして使いましょう
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //この行は編集しないでください

// この下にコードを書いてください
for(let i=0; i<people.length; i++){
    console.log(people[i].toUpperCase());
}
