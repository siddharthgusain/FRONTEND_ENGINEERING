// console.log(a); // error because of (temporal deadzone)
console.log(b);
let a = 10;
const c = 20;
var b = 100;
// let and const variable can't be referenced before they are initialized
// let and const have different memory space they are not attached to window object
// we can't redeclare let and const variable but var can be redeclared
// c = 22; // constant variable
console.log(a);


// Temporal deadzone :- Time between the let and const declaration are hoisted and gets initilization is deadzone
