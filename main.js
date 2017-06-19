const express = require('express');
const app = express();
let loremIpsum = require('lorem-ipsum');
let output = loremIpsum({count:3,units:'paragraphs',format:'html'});

app.get('/lorem', function(req, res){
  res.send(output);
});

app.listen(3000, function(){
  console.log('Everything is great!');
});



// , paragraphLowerBound: 3         Minimum sentences per paragraph.
//   , paragraphUpperBound: 7        Maximum sentences per paragraph.
// , format: 'plain'
