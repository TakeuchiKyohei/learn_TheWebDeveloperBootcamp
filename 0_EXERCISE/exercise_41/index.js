// 配列内の和を求める演習問題
// sumArrayという関数を定義してください。
// 数字で構成された一つの配列を引数として受け取ります。そして、配列内の数字の和を返してください。

// sumArray([1,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101
// ヒント：

// 合計値を保存しておく変数が必要になります。変数の初期値は0になるでしょう。

// 配列内の要素をループで参照して、合計値に加算しましょう。

// すべての要素を合計値に加算したあと、合計値をreturnしましょう。

function sumArray(numArr) {
    let total = 0;
    for (let num of numArr){
        total += num;
    }
    return total
}

console.log(sumArray([50,50,1]))
