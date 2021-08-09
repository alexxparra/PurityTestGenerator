const express = require('express');
let ejs = require('ejs');
const app = express();
//app.use(express.json());
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.get('/homepage', (req, res) => {
    res.sendFile(__dirname + "/homepage.html");
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/homepage.html");
});

app.post("/createForm",(req, res) => {
    console.log(req.body);

    for (question in req.body["questions[]"]) {
        console.log(req.body["questions[]"][question]);
    }
    // This following line is how we use a .ejs file to render dynamic data we pass in.
    ejs.renderFile('./views/purityreturnform.ejs',
    {
        questions: req.body["questions[]"],
        feedbackText: req.body["feedbackText"],
        title: req.body.title,
        preText: req.body.preTextbox
    }, {}, (err, str) => {
        res.send(str);
    });
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

app.post('/results', function (req, res)
{
    console.log(req.body);
    var totalQuestions = parseInt(req.body.totalQuestions);
    var allAnswers = req.body["questionAnswer[]"];
    var checkedNumber = allAnswers.length;
    var resultPercentage = ((checkedNumber / totalQuestions) * 100);
    var feedbackText = req.body["feedbackText"];
    ejs.renderFile('./views/purityreturnresults.ejs',
    {
        //percentage: resultPercentage;
        title: req.body.title,
        finalText: "You are " + resultPercentage + "% " + feedbackText
    }, {}, (err, str) => {
        res.send(str);
    });
});

app.get('/results', function (req, res) {
    res.sendFile(__dirname + "/purityreturnresults.html");
  });

 
app.listen(3000);
console.log('Server started at http://localhost:3000');
console.log('CTRL + C to stop the server.');

