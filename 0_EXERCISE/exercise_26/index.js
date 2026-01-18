// push/pop/shift/unshiftの演習問題
// planetsという配列を用意したのですが、変な情報が入ってたり、有名な惑星が入っていなかったりするので、以下のように中身を編集してください。

// 1つ目のThe Moonをplanetsから取り除いてください（そもそも月は惑星じゃない）
// Saturnをplanetsの末尾に追加してください
// Mercuryをplanetsの先頭に追加してください
// 完成したplanetsは次のようになります：["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]
// （これも直接1行目のplanetsを編集してはいけません！）
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //この行は編集しないでください

// ここより下にコードを書いてください
planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");
console.log(planets)
