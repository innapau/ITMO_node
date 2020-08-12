const fs = require("fs");
const path = require("path");

module.exports = function filterLs(dir, ext, callback) {
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        } else {
            let filteredList = [];
            for (let item of list) {
                if (path.extname(item) === "." + ext) {
                    filteredList.push(item);
                } else {
                    continue;
                }
            }
            return callback(null, filteredList);
        }
    })
}
