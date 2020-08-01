//              Задание №1

function pause(func, timer) {
    return function() {
      setTimeout(() => func.apply(this, arguments), (timer * 1000));
  };
};

function multiply(a, b) {
    console.log(a * b);
};

let paused = pause(multiply, 4);
paused(2, 5);


//              Задание №2

function returnsArray() {
    return [1, 2, 3, 4]
};

function returnObject(func, ...keys) {
    let arr = func();
    let obj = {};
    if (Array.isArray(arr)) {
        for (let i = 0; i < keys.length; i++) {
            obj[keys[i]] = arr[i];
        }
        return obj;
    } else {
        return arr;
    }
};

let numArr = returnObject(returnsArray, 'one', 'two', 'three');
console.log(numArr.one);
console.log(numArr.two);
