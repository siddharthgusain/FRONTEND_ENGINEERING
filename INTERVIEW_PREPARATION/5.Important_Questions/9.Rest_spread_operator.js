// the same operator "..." is used for both rest and spread in different scenarios

//----------REST OPERATOR example-----------

//1. Arbitrary function arguments
function arbitraryArgument(...args) {
    console.log(args);
}

arbitraryArgument(1, 2, 3, 4, 5);


//-------------SPREAD OPERATOR EXAMPLE---------

let arr1 = [1, 2, 3, 4, 5];

arr2 = [...arr1];
// partial deep copy , if 1D array then considered as deep copy, not a deep copy for multidimentional array

arr2[0] = 10;

console.log(arr1); //[1, 2, 3, 4, 5]
console.log(arr2);// [10,2,3,4,5]

//2. Object 

let obj1 = {
    "one": 1,
    "two": 2,
    "three": 3
}

let obj2 = { ...obj1 }; // partial deep copy , can be consider as deep copy for normal non-nested objects

obj2["one"] = 10;

console.log(obj1); //{one: 1, two: 2, three: 3}
console.log(obj2);// {one: 10, two: 2, three: 3}

//3. Mix of both

const myNames = ["sid", "messi"];
const bio = { ...myNames, runs: "world cup" };

console.log(bio);

// The invocation above will return:
//{0: 'sid', 1: 'messi', runs: 'world cup'}
