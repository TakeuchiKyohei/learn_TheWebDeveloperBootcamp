const express = require('express');
const app = express();
const port = 3000;

app.use((req,res) => {
  console.log("リクエストきたよ。");
  res.send("<h1>初めてのExpressレスポンス</h1>");
})

app.listen(port, () => {
  console.log(`${port}番ポートでサーバが起動しました。`)
})
