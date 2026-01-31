const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const text = process.argv[2];
const langCode = franc(text);
if(langCode === "und"){
  console.log("言語を解析できませんでした。もっと長い文章を書いてください。".red);
}else{
  const lang = langs.where("3", langCode).name;
  const displayText = `${lang}でしょうか`.green;
  console.log(displayText);
}
