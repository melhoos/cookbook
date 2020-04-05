var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var port = process.env.port || 7777;

var allowedOrigins = [
    'http://localhost:3000', //local-admin
];

app.use(cors({
    origin: function(origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                        'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type'
}));

app.listen(port, () => {
    console.log(`Hi, port ${port} is running`);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var router = require('./routes')();

app.use('/api', router);