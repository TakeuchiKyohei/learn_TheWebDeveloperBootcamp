const fs = require('fs');

const currentDir = process.cwd();
const currentDirNames = fs.readdirSync(currentDir,{ withFileTypes: true })
                          .filter(element => element.isDirectory())
                          .map(dir => dir.name);

const dirName = process.argv[2] || 'Project';

if(currentDirNames.includes(dirName)){
  console.log('既に同じ名前のディレクトリが存在しているので、別の名前を指定してください。');
}else{
  try{
    fs.mkdirSync(dirName);
    fs.writeFileSync(`${dirName}/index.html`,'');
    fs.writeFileSync(`${dirName}/app.css`,'');
    fs.writeFileSync(`${dirName}/app.js`,'');
  }catch(e){
    console.log("なんかエラー発生");
    console.log(e);
  }
}

