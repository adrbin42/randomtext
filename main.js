const express = require('express');
const app = express();
let loremIpsum = require('lorem-ipsum');

app.get('/lorem/:count', function(req, res){
  res.send(loremIpsum({count:req.params.count,units:'paragraphs',format:'html'}));
});

app.listen(3000, function(){
  console.log('Everything is great!');
});
