module.exports = function(app,appPackage) {
    // var mysql = require('mysql');
    // var md5 = require('MD5');
    // var database = require('../../config/database');

    // var connection  = mysql.createPool({
    //     connectionLimit : 10,
    //     host     : 'localhost',
    //     user     : 'root',
    //     password : 'root',
    //     database : 'timetable'
    // });
        

    app.get('/', function(req, res) {
        res.status(200).send("API is up \& running\nCurrent version is "+appPackage.version);
    });

    // require('./api/authorization')(app, connection, md5, d);
    // require('./api/evaluations')(app, connection, md5, d);
    // require('./api/lessons')(app, connection, md5, d, parity, version, current_day);
    // require('./api/tracker')(app, connection, md5, d);
    // require('./api/events')(app, connection, md5, d);
    // require('./api/news')(app, connection, md5, d);



};