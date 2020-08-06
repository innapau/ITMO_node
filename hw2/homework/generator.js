function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function* passwordGenerator(length) {
    while(true) {
        let password = '';
        for (let i = 0; i < length; i++) {
            password += String.fromCharCode(random(45, 122));
        }
        yield password;
    }
};

let genPass = passwordGenerator(16);
console.log(genPass.next().value)
