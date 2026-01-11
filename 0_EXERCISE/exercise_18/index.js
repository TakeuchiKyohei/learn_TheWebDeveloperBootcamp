// 続・Stringメソッドの演習問題
// wordという変数を用意して、値には'skateboard'という文字列を代入しています。
// この問題のゴールは、最終的にwordの文字列を'beard'に変換することです。
// Stringのメソッドを使って'skateboard'から'board'を抽出しましょう（sliceメソッドが使えます）
// 'board'の中の'o'を'e'に置換しましょう（replaceメソッドが使えます） 結果をfacialHairという変数に代入してください
// 【注意】facialHairという変数に直接'beard'を代入するようなインチキはしないでください！
const word = "skateboard"; //この行は編集しないでください

// この下にコードを書いてください
const board = word.slice(5);
const facialHair = board.replace("o", "e");

