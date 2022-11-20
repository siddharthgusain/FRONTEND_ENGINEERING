// sum(1)(2)(3)(4) ---> 10

// can be solved with recursion
function sum(a) {
    return function (b) {
        if (b)
            return sum(a + b); //recursive call
        else
            return a; // for base case that is last function call without argument
    }
}

console.log(sum(1)(2)(3)());