const http = require('http');
const cp = require('child_process');
const url = require('url');

const child = cp.fork('./child.js');
let childReady = false;

function childSaidReady(status) {
    if(status === 'ready') {
        childReady = true;
        child.off('message', childSaidReady);
        console.log('Server ready');
    }
};

child.on('message', childSaidReady);

http.createServer((req, res) => {
    let _get = url.parse(req.url, true).query;
    console.log('Parametrs of request: ' + JSON.stringify(_get));

    if(!(_get.num1 && _get.num2)) {
        console.log('Bad Request');
        res.statusCode = 400;
        res.end();
        return;
    }

    if(!childReady) {
        console.log('Service Unavailable');
        res.statusCode = 503;
        res.end();
        return;
    }

    let expression = `${_get.num1}+${_get.num2}=`;

    function responseFromChild(data) {
        if (data.expression === expression) {
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(`<h1>${data.result}</h1>`);
            res.end();
            child.off('message', responseFromChild);
        }
    };

    child.on('message', responseFromChild);

    child.send({
        expression
    })
}).listen(8080, () => {
    console.log('Server run in 8080 port!');
})
