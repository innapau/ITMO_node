//      Задача 1 - а


/*
const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    let engFile = 'en.html';
    let rusFile = 'ru.html';
    let defaultFile = rusFile;
    if (process.argv.length < 3) {
        fs.readFile(defaultFile, 'utf8', (err, data) => {
            if(err) {
                console.log("Could not find or open file for reading\n");
                res.statusCode = 404;
                res.end();
            } else {
                console.log(`${data} file successfuly sent to client`);
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
    } else if (process.argv[2] === 'ru') {
        fs.readFile(rusFile, 'utf8', (err, data) => {
            if(err) {
                console.log("Could not find or open file for reading\n");
                res.statusCode = 404;
                res.end();
            } else {
                console.log(`${data} file successfuly sent to client`);
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
    } else if (process.argv[2] === 'en') {
        fs.readFile(engFile, 'utf8', (err, data) => {
            if(err) {
                console.log("Could not find or open file for reading\n");
                res.statusCode = 404;
                res.end();
            } else {
                console.log(`${data} file successfuly sent to client`);
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
    }
}).listen(8080, () => {
    console.log('Server runs on port 8080.\n');
});
*/

//      Задача 1 - б

const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {

    let engFile = 'en.html';
    let rusFile = 'ru.html';
    let defaultFile = rusFile;
    if (process.env.LANG == 'ru_RU.UTF-8' || process.env.LANG == 'ru_RU') {
        fs.readFile(rusFile, 'utf8', (err, data) => {
            if(err) {
                console.log("Could not find or open file for reading\n");
                res.statusCode = 404;
                res.end();
            } else {
                console.log(`RU file successfuly sent to client`);
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
    } else if (process.env.LANG == 'en_EN.UTF-8' || process.env.LANG == 'en_EN') {
        fs.readFile(engFile, 'utf8', (err, data) => {
            if(err) {
                console.log("Could not find or open file for reading\n");
                res.statusCode = 404;
                res.end();
            } else {
                console.log(`EN file successfuly sent to client`);
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
    }
}).listen(8080, () => {
    console.log('Server runs on port 8080.\n');
});
