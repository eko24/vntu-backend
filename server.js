var express = require('express');
var helmet = require('helmet');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var appPackage = require('./package.json');

// var database = require('./config/database');
var helmetConfig = require('./configuration/helmet.js')(helmet, app);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(methodOverride());

require('./routes/routes')(app, appPackage);
app.listen(process.env.PORT || 8080);
console.log("App listening on port 8080™");