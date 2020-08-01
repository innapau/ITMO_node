const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', function(req, res) {
    let header, body, footer;
    fs.readFile('header.html', 'utf-8', function(err, content1) {
        if (err) {
            res.writeHead(500);
            res.end();
        } else {
            header = content1;

            if(body && footer) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(header + body + footer);
            }
        }
    });
    fs.readFile('body.html', 'utf-8', function(err, content2) {
        if (err) {
            res.writeHead(500);
            res.end();
        } else {
            body = content2;

            if(header && footer) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(header + body + footer);
            }
        }
    });
    fs.readFile('footer.html', 'utf-8', function(err, content3) {
        if (err) {
            res.writeHead(500);
            res.end();
        } else {
            footer = content3;

            if(header && body) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(header + body + footer);
            }
        }
    });
});

server.listen(8080, function() {
    console.log('Server is listening on port 8080')
});
