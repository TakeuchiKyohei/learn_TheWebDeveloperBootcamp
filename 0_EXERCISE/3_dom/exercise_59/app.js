// addEventListenerの演習問題
// addEventListenerの練習をしましょう。2個のボタンを用意し、IDをそれぞれ'hello'と'goodbye'にしています。それぞれのボタンにクリックイベントが発生したときのイベントハンドラを定義してください。

// helloボタンがクリックされたときにはconsole.logに'hello'を出力してください

// goodbyeボタンがクリックされたときにはconsole.logに'goodbye'を出力してください

// addEventListenerを使ってください！

const hello = () => {
  console.log('hello');
}

const goodbye = () => {
  console.log('goodbye');
}

const hellobtn = document.querySelector('#hello');
hellobtn.addEventListener('click', hello);
const goodbyebtn = document.querySelector('#goodbye');
goodbyebtn.addEventListener('click', goodbye);
