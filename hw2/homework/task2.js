const fs = require('fs');
const dataFile = "data.txt"

fs.readFile(dataFile, 'utf8', (err, data) => {
    if(err) {
        console.log("Could not find or open file for reading\n");
        return;
    } else {
        let array = data.split(' ');
        let divideByTwo = [];
        let elevateToThree = [];

        for (let item of array) {
            if (item % 2 === 0) {
                divideByTwo.push(item);
            }
            elevateToThree.push(item ** 3);
        }

        fs.writeFile('out-1.txt', divideByTwo.join(' '), (err) => {
            if(err) {
                console.log("Something went wrong trying to create file 'out-1.txt'");
                return;
            }
        });
        fs.writeFile('out-2.txt', elevateToThree.join(' '), (err) => {
            if(err) {
                console.log("Something went wrong trying to create file 'out-2.txt'");
                return;
            }
        });
    }
});
