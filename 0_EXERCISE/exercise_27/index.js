// ネストした配列の演習問題
// airplaneSeatsという配列を用意しています。
// この配列は飛行機の座席を表しています。友人のYumiが最後に余っている座席を予約しようとしています。現在はnullが設定されている座席に'Yumi'という値を代入してください。（6行目のnullを直接編集しないように！）
// この配列は直接編集しないでください
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// これより下にコードを書いてください
airplaneSeats[3][1] = 'Yumi'
console.log(airplaneSeats)
