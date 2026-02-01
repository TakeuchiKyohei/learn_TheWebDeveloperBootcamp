const express = require('express');
const app = express();
const port = 3000;

app.use(() => {
  console.log("リクエストきたよ。");
})

app.listen(port, () => {
  console.log(`${port}番ポートでサーバが起動しました。`)
})
