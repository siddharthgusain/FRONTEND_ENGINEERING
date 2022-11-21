var a = 1;
(function () {
    console.log(a); // will access local "a" first , scope chaining is used
    var a = 2;
    console.log(a);
})()

console.log(a); // can't access "a" INSIDE IIFE so will access "a=1"

/*
OUTPUT: 
undefined
2
1
*/
let outer = 1;
(function () {
    console.log(outer); // will access outer present in global scopes because of scope chain
})()

