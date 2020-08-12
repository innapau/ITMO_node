const fs = require('fs');

fs.readFile(process.argv[2], "utf8", (err, data) => {
    if (err) {
        console.log("error!");
    } else {
        let arr = data.toString().split("\n");
        let result = arr.length - 1;
        console.log(result);
    }
});
