const http = require('http');
const fs = require('fs');
const path = require('path');

let mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
};

http.createServer((req, res) => {
    let pathname,extname, mimeType;
    console.log();
    if (req.url === '/') {
        pathname = 'index.html';
    } else {
        pathname = req.url.substr(1);
    }

    extname = path.extname(pathname);
    mimeType = mimeTypes[extname];

    fs.readFile(pathname, 'utf8', (err, data) => {
        if (err) {
            console.log('Page not found!');
            res.statusCode = 404;
            res.end('Page not found!');
        } else {
            res.writeHead(200, {"Content-Type": mimeType});
            res.end(data);
        }
    })
}).listen(8080, () => {
    console.log('Server run in 8080 port!');
})
