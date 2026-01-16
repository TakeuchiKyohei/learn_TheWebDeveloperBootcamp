let maxNum = parseInt(prompt("クイズゲームをしましょう!何か数字を入力してください。"));

while (!maxNum){
  maxNum = parseInt(prompt("エラー!有効な数字を入力してください。"));
}

const targetNum = Math.floor(Math.random() * maxNum) + 1

let guessNum =prompt("当ててほしい数字を決定しました!数字を入力してください!qで終了");
let count = 1;

while (parseInt(guessNum) !== targetNum) {
  count ++;
  if (guessNum === "q") break;
  if (parseInt(guessNum) > targetNum) {
      guessNum =prompt("当ててほしい数字はもう少し小さいです。qで終了");
    }else {
      guessNum =prompt("当ててほしい数字はもう少し大きいです。qで終了");
  }
}

if (guessNum === "q") {
  console.log("また挑戦してね!")
  alert("また挑戦してね!")
}else{
  console.log(`正解!${guessNum}です!${count}回で当てました！`);
  alert(`正解!${guessNum}です!${count}回で当てました！`)
}
