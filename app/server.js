var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
runserver();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));


function runserver () {

app.listen(3002);
console.log("server running!")
}

app.get("/", function(req, res) {


res.sendFile(__dirname + '/public/home.html');


});


app.get("/survey", function(req, res) {

res.sendFile(__dirname + '/public/survey.html');

});


