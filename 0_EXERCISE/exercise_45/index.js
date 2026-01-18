// メソッドのthisの演習問題
// henというオブジェクトを定義してください。
// 2つのプロパティと、1つのメソッドを定義してください：

// nameは'Helen'にしてください
// eggCountは0にしてください
// layAnEggというメソッドを定義してください。このメソッドは、自分のeggCountを1加算して、'EGG'という文字列をreturnしてください。（thisを使う必要があります）

// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg(){
        this.eggCount ++;
        return 'EGG';
    }
}

console.log(hen.name)
console.log(hen.eggCount)
console.log(hen.layAnEgg())
console.log(hen.layAnEgg())
console.log(hen.eggCount)
