// アロー関数の演習問題
// アロー関数の関数式をgreetという変数に代入してください。
// 人の名前を表すStringを引数として一つ受け取って、英語の挨拶のStringを以下のように返してください：

// greet("Hagrid") //"Hey Hagrid!" 
// greet("Luna") //"Hey Luna!"

const greet = (String) => {
    return `Hey ${String}!`
}
