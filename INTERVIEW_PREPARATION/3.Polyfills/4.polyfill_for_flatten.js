let arr = [1, 2, 3, [1, 2, 3, [2, 3]]];
// MY polyfill

Array.prototype.myFlatPolyfill = function (depth) {
    let arr = this;
    let flattenedArray = [];
    if (depth === undefined) depth = 1; // if user doesnt pass depth

    function recursiveFlat(arr, depth) { // defining a recursive function
        arr.forEach((item) => {
            if (Array.isArray(item) && depth > 0)
                recursiveFlat(item, depth - 1);
            else
                flattenedArray.push(item);
        })
    }

    recursiveFlat(arr, depth); // calling the recursive function with original array

    return flattenedArray;
}

console.log(arr.flat(2)); // argument to flat is "depth to which to be flattened"


console.log(arr.myFlatPolyfill(2));

// NOTE:- default depth is 1, i.e if no arugument is passed