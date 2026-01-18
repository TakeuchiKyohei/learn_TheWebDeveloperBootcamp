// パラメータを使った関数の演習問題
// shoutという関数を作成し、messageというパラメータを受け取れるようにしてください。この関数には英語のmessageが渡されると過程して、3回console.logで、messageを大文字に変換した内容を出力してください。

// 例えば、shout('hello world')が実行されたら以下が出力されます：

// HELLO WORLD
// HELLO WORLD
// HELLO WORLD
 
function shout(message){
    for(let i=0; i<3; i++){
        console.log(message.toUpperCase());
    }
}

shout("hello world");
