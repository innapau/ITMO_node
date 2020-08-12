const mymodule = require('./module-one.js');
let directory = process.argv[2];
let givenExtname = process.argv[3];

mymodule(directory, givenExtname, (err, list) => {
    if (err) {
        return console.log('Error: ' + err);
    } else {
        for (let item of list) {
            console.log(item);
        }
    }
});
