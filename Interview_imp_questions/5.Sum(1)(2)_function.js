// sum(1)(2)(3)(4) ---> 10

// can be solved with recursion
let sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b); // recursive calls
        }
        return a; // otherwise return the value
    }
}

console.log(sum(1)(2)(3)());