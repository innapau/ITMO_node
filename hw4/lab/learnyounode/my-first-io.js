const fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);
let arr = buf.toString().split("\n");
let result = arr.length - 1;
console.log(result);
