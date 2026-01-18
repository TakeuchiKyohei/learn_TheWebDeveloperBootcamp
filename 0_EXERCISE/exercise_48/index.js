// filterの演習問題
// filterメソッドの練習をしましょう。
// validUserNamesという関数を作ってください。
// この関数はStringの配列を引数として受け取って、Stringの長さが10文字未満の値だけが入っている新しい配列を返してください。以下が実行例です：

// validUserNames(['tanaka', 'suzuki1979', 'q29832128238983', 'hogemoge', 'kimetsu']);
// // => ["tanaka", "hogemoge", "kimetsu"]
// // 'suzuki1979'と'q29832128238983'は10文字以上なので、返ってきた配列には含まれない

const validUserNames = stringArr => stringArr
    .filter(string => string.length < 10)
