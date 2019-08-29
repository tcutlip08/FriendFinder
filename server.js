var express = require('express');
var path = require('path')
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.get('*', function (req, res) {
    res.send('<h1>Sorry we could not find what you are looking for!<h1>');
});

// Error handler !! MAKE SURE ITS LAST !!

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});