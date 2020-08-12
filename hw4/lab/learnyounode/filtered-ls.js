const fs = require('fs');
const path = require("path");

let directory = Number(process.argv[2]);
let givenExtname = process.argv[3];

fs.readdir(directory, (err, list) => {
    if (err) {
        console.log("error");
    } else {
        for (let item of list) {
            if (path.extname(item) === "." + givenExtname) {
                console.log(item);
            } else {
                continue;
            }
        }
    }
})
