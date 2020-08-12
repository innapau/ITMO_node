let arr = process.argv.splice(2);
let sum = 0;

for (let val of arr) {
    sum += Number(val);
}
console.log(sum);
