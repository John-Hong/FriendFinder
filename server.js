//These are the Dependencies
//NPM Packages
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// ..This tells node that we are creating an "express" server
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('app'));




app.listen(process.env.PORT || 3000);