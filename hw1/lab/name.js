const http = require('http');

const server = http.createServer((request, response) => {
    console.log('HTTP server works');
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end('Page Not Found');
});

server.listen(8080);
