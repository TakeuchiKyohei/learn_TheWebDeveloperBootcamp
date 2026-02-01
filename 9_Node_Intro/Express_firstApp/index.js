const express = require('express');
const app = express();
const port = 3000;

// app.use((req,res) => {
//   console.log("リクエストきたよ。");
//   res.send("<h1>初めてのExpressレスポンス</h1>");
// })

app.get("/", (req, res) => {
  console.log("ルートパスにアクセスがありました。")
  res.send("<h1>root path</h1>")
})
app.get("/cats", (req, res) => {
  console.log("/catsにアクセスがありました。")
  res.send("<h1>cats path</h1>")
})
app.get("/dogs", (req, res) => {
  console.log("/dogsにアクセスがありました。")
  res.send("<h1>dogs path</h1>")
})
app.get(/(.*)/, (req, res) => {
  console.log("*にアクセスがありました。")
  res.send("<h1>404 Not Found</h1>")
})
app.post("/cats", (req, res) => {
  console.log("/cats(POST)にアクセスがありました。")
  res.send("<h1>cats(POST) path</h1>")
})

app.listen(port, () => {
  console.log(`${port}番ポートでサーバが起動しました。`)
})
