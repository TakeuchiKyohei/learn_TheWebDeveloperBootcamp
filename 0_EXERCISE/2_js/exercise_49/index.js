// someとeveryの演習問題
// allEvensという関数を定義してください。
// この関数は配列を一つ引数として受け取って、その配列の中身がすべて偶数であればtrueを返してください。そうでない場合はfalseを返してください。someあるいはeveryメソッドを使いましょう！（どちらを使うかは自分で決めてください）

// allEvens([2,4,6,8]) //true（すべて偶数）
// allEvens([1,4,6,8]) //false（奇数が含まれている）
// allEvens([1,2,3]) //false（奇数が含まれている）

const nums = [2,4,5];

const allEvens = (arr) => arr.every((num) => num % 2 === 0)
