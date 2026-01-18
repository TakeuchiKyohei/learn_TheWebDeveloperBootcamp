// 曜日を返す関数の演習問題
// returnDayという関数を作ってください。
// この関数は一つの数字を引数として受け取ります（1から7の値）。
// そして、1から7に対応した曜日を返します（1ならMonday、2ならTuesday、etc.）もし数字が1より小さい、あるいは7より大きい場合はnullを返します。

// returnDay(1) // "Monday"
// returnDay(7) // "Sunday"
// returnDay(4) // "Thursday"
// returnDay(0) // null
// ヒント：曜日をまずは配列またはオブジェクトにすべて入れましょう。関数が呼ばれたときに、与えられた数字と配列/オブジェクトの値をマッピングして、対応する曜日を返しましょう。

const day = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
}

function returnDay(num){
    if (num < 1 || num > 7) return null;
    return day[num]
}

console.log(returnDay(0))
