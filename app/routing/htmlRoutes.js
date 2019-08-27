var path = require("path");


module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    app.get('*', function (req, res) {
        res.send('<h1>Sorry we could not find what you are looking for!<h1>');
    });
};