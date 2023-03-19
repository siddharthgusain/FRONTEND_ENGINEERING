/*
-> Memoization is actually dynamic programming concept , where we store some overlapping subproblems
to speed up the computation.

-> It increases space complexity , but decreases time complexity
*/

// We can use it it javscript to memoize some heavy computing function

/*
The concept of memoization in JavaScript relies on two concepts:

1. Closures: The combination of a function and the lexical environment within which that
function was declared. You can read more about them here and here.

2. Higher Order Functions: Functions that operate on other functions, either by taking them as
arguments or by returning them. You can read more about them here.

*/

// -> Memoization is sometimes known as "CACHING"
//------------------SIMPLE EXAMPLE OF MEMOIZATION------------------

function add(n) {
    return n + 10;
}

add(9) // simple function

function memoize(fn) {
    let cache = {};
    return function (arg) {
        console.log(cache);
        if (arg in cache) {
            console.log("RETURNING CACHED RESULT");
            return cache[arg]; // check the 1D DP array if the key exists already
        }
        else {
            let result = fn(arg); // call the function if not present in cache
            cache[arg] = result; // store the result in cache for reusing for next computation
            console.log("RETURNING NEW RESULT");
            return result; // return the result
        }
    }
}

let memoizedAdd = memoize(add); // memoizedAdd has a "CLOSURE" with cache object and memoize() is Higher Order Function

memoizedAdd(10);// no caching, so calculated
memoizedAdd(10) // cached result

//------------Factorial Memoization-----------------------

// lets create a factorial function
function factorial(n) {
    if (n === 1 || n === 0)
        return 1;
    return n * memoizedFactorial(n - 1); // here we are calling memoizedFactorial not actual factorial
}

function memoize1(fn) {
    let cache = {};
    return function (arg) {
        if (arg in cache) {
            console.log('Fetching from cache', arg, cache[arg]);
            return cache[arg];
        }

        let result = fn(arg);
        cache[arg] = result;
        console.log('Calculating result', arg, result);
        return result;

    }
}

let memoizedFactorial = memoize1(factorial);

console.log(memoizedFactorial(5));
console.log("------------------------");
console.log(memoizedFactorial(6));
console.log("------------------------");
console.log(memoizedFactorial(7));



