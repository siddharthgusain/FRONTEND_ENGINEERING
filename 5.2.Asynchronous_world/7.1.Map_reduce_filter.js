// MAP
const arr = [1, 2, 3, 4, 5];

const output = arr.map((item) => {
    return item * 2;
});

console.log(output);
console.log(arr);

// Map creates new array without mutating original array


//Filter

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

const output1 = arr1.filter((item) => {
    return item % 2;
})

console.log(output1);
console.log(arr1);

// Filter the array according to condition

//REDUCE

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const output3 = arr2.reduce((acc, curr) => {
    return acc + curr;
}, 10);
// second arugument is accumulator initial value
// return a single value

console.log(output3);
console.log(arr2);




