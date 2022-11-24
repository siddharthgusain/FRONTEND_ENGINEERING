let input = [1, 2, 3, 4, 5, 6];

// original filter
let output = input.filter((item, index) => {
    return item % 2 === 0;
});

console.log(output);


Array.prototype.filterPolyfill = function (callback) {
    let arr = this;
    let outputArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr))
            outputArray.push(arr[i]);
    }

    return outputArray;
}

// my polyfill 
let output1 = input.filterPolyfill((item, index) => {
    return item % 2 === 0;
})

console.log(output1);