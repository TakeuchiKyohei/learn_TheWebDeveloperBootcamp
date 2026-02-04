const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render("home");
})
app.get('/random', (req, res)=>{
  const num = Math.floor(Math.random() * 10)+1;
  res.render("random", { num });
})
app.get('/r/:subreddit', (req, res)=>{
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
})

app.listen(PORT,()=>{
  console.log('Server is running');
})
