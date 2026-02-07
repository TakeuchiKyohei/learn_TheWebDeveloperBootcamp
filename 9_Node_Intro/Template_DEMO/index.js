const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const subredditData = require('./data.json');

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
  const data = subredditData[subreddit];
  if(data){
    res.render("subreddit", { subreddit, ...data });
  }else{
    res.render("notFound", { subreddit });
  }
})
app.get('/cats', (req, res)=>{
  const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
  res.render("cats", { cats });
})

app.listen(PORT,()=>{
  console.log('Server is running');
})
