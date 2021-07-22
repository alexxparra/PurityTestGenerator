const express = require('express');
const app = express();
 
app.get('/result', function (req, res) {
    res.send('Here is your result: you are 70% of this.');
  });

app.get('/', function (req, res) {
  res.send('This is the Purity Test Generator Project.');
});
 
app.listen(3000);
console.log('Server started at http://localhost:3000');
console.log('CTRL + C to stop the server.');