const http = require('http');
const bl = require('bl');

http.get(Number(process.argv[2]), (response) => {
    response.pipe(bl((err, data) => {
        console.log(data.toString().length);
        console.log(data.toString());
    }))
}).on('error', (e) => {le
    console.error(`Got error: ${e.message}`);
})
