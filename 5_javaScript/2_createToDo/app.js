const toDoLists = [];
let instruction_word = prompt("ToDoアプリ new/delete/list/quite を入力してください");

while (
  instruction_word !== "new"&& 
  instruction_word !== "delete"&& 
  instruction_word !== "list"&&
  instruction_word !== "quite"
){
  instruction_word = prompt("エラー! new/delete/list/quite を入力してください");
}

while (
  instruction_word === "new"|| 
  instruction_word === "delete"|| 
  instruction_word === "list"|| 
  instruction_word === "quite"
){
  if (instruction_word === "quite") break;
  console.log(instruction_word)
  
  switch (instruction_word) {
    case "new":
      const inputWord = prompt("ToDoアプリに追加するタスクを入力してください");
      toDoLists.push(inputWord)
      console.log(`追加しました|${toDoLists}`)
      break;
    case "list":
      console.log("ToDoリストを表示します")
      console.log("**********")
      for (let i=0; i<toDoLists.length; i++){
        console.log(`${i}：${toDoLists[i]}`)
      }
      console.log("**********")
      break;
    case "delete":
      const delIndex = prompt("ToDoアプリから削除するindex番号を入力してください");
      if(delIndex >= 0 && delIndex < toDoLists.length){
        console.log(`${toDoLists[delIndex]}を削除します`);
        toDoLists.splice(delIndex,1);
        console.log(`削除しました|${toDoLists}`)
      }else{
        console.log("インデックス値が見当たらないのでlistで確認してください");
      }
      break;
    default:
      break;
  }

  instruction_word = prompt("ToDoアプリ new/delete/list/quite を入力してください");
  while (
    instruction_word !== "new"&& 
    instruction_word !== "delete"&& 
    instruction_word !== "list"&&
    instruction_word !== "quite"
  ){
    instruction_word = prompt("エラー! new/delete/list/quite を入力してください");
  }
}
console.log("ToDoアプリを閉じました。")
