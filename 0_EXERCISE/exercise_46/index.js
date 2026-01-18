// mapの演習問題
// mapメソッドの練習をしましょう！
// firstNamesという変数を定義してください。fullNamesにmapをかけて、名前（first）だけを取り出してfirstNamesに代入してください。

// 下のようになります：
// console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']

// 下のコードは編集しないでください:
const fullNames = [
    {
        first: 'Albus', 
        last: 'Dumbledore'
    }, 
    {
        first: 'Harry',
        last: 'Potter'
    }, 
    {
        first: 'Hermione',
        last: 'Granger'
    }, 
    {
        first: 'Ron',
        last: 'Weasley'
    }, 
    {
        first: 'Rubeus',
        last: 'Hagrid'
    }, 
    {
        first: 'Minerva',
        last: 'McGonagall'
    }, 
    {
        first: 'Severus',
        last: 'Snape'
    }];

// この下にコードを書いてください
const firstNames = fullNames.map(function(fullName){
    return fullName.first;
})

