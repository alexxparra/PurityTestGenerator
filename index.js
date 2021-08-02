const express = require('express');
const app = express();
//app.use(express.json());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.get('/homepage', (req, res) => {
    res.sendFile(__dirname + "/homepage.html");
});

app.post("/createForm",(req, res) => {

    res.sendFile(__dirname + "/puritypage2.html");
});

app.get('/createForm', (req, res) => {
    res.sendFile(__dirname + "/puritypage2.html");
});

app.post("/helloWorld", (req, res) => {

    res.send("Hello, " + req.body.title);
    res.send(req.body);
});

app.get('/yourForm', function (req, res) {
    res.sendFile(__dirname + "/purityreturnform.html");
});

app.get('/results', function (req, res) {
    res.sendFile(__dirname + "/purityreturnresults.html");
  });

 
app.listen(3000);
console.log('Server started at http://localhost:3000');
console.log('CTRL + C to stop the server.');

