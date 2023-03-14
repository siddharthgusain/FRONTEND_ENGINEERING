let input = [6, 2, 3, 4, 5, 6];

// original 
let result = input.reduce((acc, item, index, arr) => {
    return acc + item;
})

console.log(result);


// if second argument is not passed?


Array.prototype.reducepolyfill = function (callback, startingValue) {
    let arr = this;
    let acc = startingValue || undefined;

    for (let i = 0; i < arr.length; i++) {
        if (acc) {
            acc = callback(acc, arr[i], i, arr);
        } else {
            acc = arr[i];
        }
    }

    return acc;
}


let result1 = input.reducepolyfill((acc, item, index, arr) => {
    return acc + item;
});

console.log(result1);