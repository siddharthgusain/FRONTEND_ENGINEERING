var arr = [3, 4, 5];
var arr2 = [1, 2, ...arr, 6];

console.log(arr2); // [1, 2, 3, 4, 5, 6]

// -----------------------INNER WORKING---------------------
/*
-> The ...arr expression here performs the following steps:

1. First, it calls the @@iterator() method on the arr object. This returns an iterator object that 
allows iteration over arr.

2. Then, this iterator is consumed by calling next(), uptil the point the done property 
stays false.

3. With each iteration, the value property is pushed onto arr2.

*/