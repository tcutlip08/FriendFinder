var express = require('express');
var path = require('path')
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// Error handler !! MAKE SURE ITS LAST !!
app.get('*', function (req, res) {
    res.send('<h1>Sorry we could not find what you are looking for!<h1>');
});

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});