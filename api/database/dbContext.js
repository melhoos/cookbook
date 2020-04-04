var Request = require('tedious').Request;
var connection = require('./dbConnect');
var helper = require('./dbHelper');

//query execute
function queryExecute(qry, params, isMultiSet, callback) {
    var data = [];
    var dataset = [];
    var resultset = 0;

    request = new Request(qry, function (err, rowCount) {
        helper.sendDbResponse(err, rowCount, dataset, callback);
    });

    params.forEach(param => {
        request.addParameter(param.name, param.type, param.val);
    });

    request.on('row', function (columns) {
        helper.buildRow(columns, data);
    });

    request.on('doneInProc', function (rowCount, more, rows) {
        if (isMultiSet == false) {
            dataset = data;
        } else {
            dataset.push(data);
            data = [];
        }
    });

    connection.execSql(request);
}

// post
function postExecute(qry, params, callback) {
    var newdata = [];
    
    request = new Request(qry, function (err, rowCount) {
        helper.sendDbResponse(err, rowCount, newdata, callback);
    });
    
    params.forEach(param => {
        request.addParameter(param.name, param.type, param.val);
    });

    request.on('row', function (columns) {
        helper.buildRow(columns, newdata);
    });

    connection.execSql(request);
}

module.exports = {
    queryExecute: queryExecute,
    post: postExecute
};
