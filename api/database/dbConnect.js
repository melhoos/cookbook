var Connection = require('tedious').Connection;
var conf = require('./dbConf');

var config = {
    server: conf.dbServer,
    authentication: {
        type: 'default',
        options: {
            userName: conf.dbUser,
            password: conf.dbPassword
        }
    },
    options: {
        database: conf.dbName,
        rowCollectionOnDone: true,
        useColumnNames: false,
        trustServerCertificate: true // todo: not sure what this is <-- check it later
    }
}

var connection = new Connection(config);

connection.on('connect', function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected');
    }
});

module.exports = connection;