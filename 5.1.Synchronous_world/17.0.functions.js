// function statement aka function declaration
function_statement(); // perfectly fine
function function_statement() {
    console.log("I am function statement");
}

// function expression
// note:- func_exp(); // calling here will lead to error as func_exp is hoisted , at starting it is undefined
let func_exp = function function_exp() {
    console.log("Function expression");
}
func_exp();

// anonymous function( without name)
var anony_func = function () {
    console.log("Anonymous function");
}
anony_func();

// named function expression
var name_func = function named() {
    console.log("named function expression");
}

name_func(); // perfectly fine
// named(); // referrence error

// first class function // first class citizens

/* -> A programming language is said to have First-class functions when functions 
in that language are treated like any other variable and can be passed ana returned from another
function

For example, in such a language, a function can be passed as an argument to other functions, 
can be returned by another function and can be assigned as a value to a variable.

-> WE CAN PASS FUNCTION AS ARGUMENT , CAN BE RETURNED AS WELL
-> NOTE: In programming languages C/C++ we can pass pointer to a function
    as a argument and also return it.
*/


// arrow functions

var arrow = (num) => {
    console.log("hello");
    console.log(num);
}

arrow(10);

// IIFE(immedieately invoked function express)
(function () {
    console.log("IIFE");
})();

//-----------FACTS ABOUT ANONYMOUS FUNCTION----------
/*
1. Anonymous functions are never hoisted (loaded into memory at compilation).
2. When invoking an anonymous function, you can only call it "AFTER" the declaration line.
3. Anonymous functions can be very handy when developing IIFEs (Instantly Invoked Function Expressions).
4. They can be assigned to some variable or used as IIFE or passed as callback to higher order function.
5. Can't be used as simple function
*/

