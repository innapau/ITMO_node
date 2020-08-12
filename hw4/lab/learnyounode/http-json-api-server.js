const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer((req, res) => {
    let urlObject = url.parse(req.url, true);
    let pathname = urlObject.pathname;
    let startTime = urlObject.query.iso;
    let result;

    if (pathname === '/api/unixtime') {
        result = getUnixTimeStamp(startTime);
    } else if (pathname === '/api/parsetime') {
        result = getTimeObj(startTime);
    }

    if (result) {
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(result));
    } else {
        res.statusCode = 404;
        res.end();
    }
}).listen(process.argv[2]);

function getUnixTimeStamp(startTime) {
    return {
        unixtime: getTimeStamp(startTime)
    };
};

function getTimeStamp(startTime) {
    return Date.parse(startTime);
};

function getTimeObj(startTime) {
    let date = new Date(getTimeStamp(startTime));
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
};
