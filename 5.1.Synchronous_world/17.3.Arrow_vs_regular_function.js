// // ---------------- Syntax level difference----------------
// // ES5
// let sum = function (x, y) {
//     return x + y;
// }

// // ES6
// let sum1 = (x, y) => x + y;


// //-----------------Argument binding---------------------
// function regularFunction(a, b) {
//     console.log(arguments)
// }

// regularFunction(1, 2) // [1,2]

// //ES6
// // let arrow = (a, b) => console.log(arguments);
// // arrow(1, 2); //ReferenceError: arguments is not defined

// // we can access with rest operator
// let arrow1 = (...args) => console.log(...args);
// arrow1(2, 3); // 2 3


//---------------------------this context--------------------------

/*
In regular function, this changes according to the way that function is invoked.

-> Simple Invocation: this equals the global object or maybe undefined if you are using strict mode.
-> Method Invocation: this equals the object that owns the method.
-> Indirect Invocation: this equals the first argument.
-> Constructor Invocation: this equals the newly created instance.
*/

var name = "Sid"
let newObject = {
    name: "Messi",
    arrowFunc: () => {
        console.log(this.name);
    },
    regularFunc() {
        console.log(this.name);
    }
}
newObject.arrowFunc(); // Sid --> "this" is undefined
newObject.regularFunc(); // Messi --> "this" is newObject



// -------------------------------USING NEW keyword--------------------------
function add(x, y) {
    console.log(x + y)
}
let sum = new add(2, 3);
// 5

// Normal function are constructible with new but arrow functions are not

//--------------------------No duplicate named parameters----------------------
// ✅ will work 
function add(a, a) { }

// will not work 
'use strict';
function add(a, a) { }
// Uncaught SyntaxError: Duplicate parameter name not allowed in this context

//ARROW
const arrowFunc = (a, a) => { }
// Uncaught SyntaxError: Duplicate parameter name not allowed in this context


//------------------------------ Function Hoisting--------------------
normalFunc()
function normalFunc() {
    return "Normal Function"
}

//ES6
arrowFunc1()
const arrowFunc1 = () => {
    return "Arrow Function"
}
// ReferenceError: Cannot access 'arrowFunc' before initialization



//---------WHEN NOT TO USE ARROW FUNCTION AND WHEN TO USE-----------------
/*
-> for callbacks/event listerns :- Use arrow function
-> For object creation , and object methods :- use normal function
*/