// 条件文の演習問題
// 条件文を使ってみましょう！この演習問題では、関数の中にコードを書いてもらいます（関数はまだ学んでないので、コメントの中にコードを書くことだけ守ってください）。

// 変数phraseが、コメントで囲われた場所で使えます

// phraseが'stop'という値の場合、'red'をconsole.logで出力してください
// phraseが'slow'という値の場合、'yellow'をconsole.logで出力してください
// phraseが'go'という値の場合、'green'をconsole.logで出力してください
// phraseが上記以外の値の場合、'purple'をconsole.logで出力してください
function getColor(phrase){
  //この中にコードを書いてください ↓↓↓↓
  if (phrase === `stop`) {
    console.log(`red`)
  }
  else if (phrase === `slow`) {
    console.log(`yellow`)
  }
  else if (phrase === `go`) {
    console.log(`green`)
  }
  else {
    console.log(`purple`)
  }
  //この中にコードを書いてください ↑↑↑↑
}
