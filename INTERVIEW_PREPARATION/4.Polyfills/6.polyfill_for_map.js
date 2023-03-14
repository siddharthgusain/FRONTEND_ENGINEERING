//----------------------------MAP--------------------
let input = [1, 2, 3, 4, 5, 6];

// original map 
let output = input.map((item, index) => {
    return item * index;
});
console.log(output);
// map polyfill

Array.prototype.mapPolyfill = function (callback) {
    let originalArray = this;
    let outputArray = [];

    for (let i = 0; i < originalArray.length; i++) {
        outputArray.push(callback(originalArray[i], i, arr))
    }

    return outputArray;
}

let output1 = input.mapPolyfill((item, index) => {
    return item * index;
});

console.log(output1);



