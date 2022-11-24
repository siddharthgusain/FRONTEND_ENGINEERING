let arr = [1, 2, 3, 4, 5, 6];

// origianl foEach
arr.forEach((item, index) => {
    console.log(item * item);
});


// my polyfill
Array.prototype.forEachPolyfill = function (callback) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }
}

arr.forEachPolyfill((item, index, originalArr) => {
    console.log(item * item);
});