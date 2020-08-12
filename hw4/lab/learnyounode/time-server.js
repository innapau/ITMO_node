const net = require('net');

let date = new Date();

function formatMonth() {
    if (date.getMonth() < 10) {
        let month = date.getMonth() + 1;
        return ("0" + month.toString());
    }
}

let server = net.createServer((socket) => {
    let timeAndDate = `${date.getFullYear()}-${formatMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`
    socket.end(timeAndDate);
})

server.listen(process.argv[2]);
