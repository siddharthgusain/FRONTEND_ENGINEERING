let multiply = function (x, y) {
    console.log(x * y);
}

// currying with bind function
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5); // 2 * 5

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);// 3 * 5

// Curry with closures
let multiply1 = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyByTwo1 = multiply1(2);
multiplyByTwo1(5); // 2 * 5

let multiplyByThree1 = multiply1(3);
multiplyByTwo(5);// 3 * 5
