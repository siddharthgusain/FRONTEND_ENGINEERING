// PRIMITIVE TYPE AS PARAMETERS
function square(number) {
    number = 1220;
}

/* 
Parameters are essentially passed to functions by "value" — so if the code within the body 
of a function assigns a completely new value to a parameter that was passed to the function, 
the change is not reflected globally or in the code which called that function.
*/

var a = 10;

square(a);
console.log(a); // 10 , value is not changed 


// OBJECT AS PARAMTER

function myFunc(obj) {
    obj.make = 'Toyota';
}

const mycar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998,
};

// x gets the value "Honda"
const x = mycar.make;
console.log(x);
console.log("BEFORE MODIFICATION:", mycar);
// the make property is changed by the function , as obj is passed as reference
myFunc(mycar);
console.log("AFTER MODIFICATION:", mycar);

// y gets the value "Toyota"
const y = mycar.make;
console.log(y);


// ARRAY AS PARAMETER 
function myFunc(arr) {
    arr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr); // passed as reference
console.log(arr[0]); // 30


// SCOPE OF FUNCTION
/*
-> Variables defined inside a function cannot be accessed from anywhere outside the function,
because the variable is defined only in the scope of the function. However, a function
can access all variables and functions defined inside the scope in which it is defined.

-> In other words, a function defined in the global scope can access all variables defined
in the global scope. A function defined inside another function can also access all
variables defined in its parent function, and any other variables to which the parent
function has access.
*/

// FINAL NOTE 
/*
-> Primitive data types such as string, number, null, undefined, and boolean, are passed by value 
-> Non-primitive data types such as objects, arrays, and functions are passed by reference 
in Javascript.
*/


//--------------Argument Object----------------
function myFunction() {
    console.log(arguments); // [1, 2, 3]
    for (let i = 0; i < arguments.length; i++)
        console.log(arguments[i]);
}

myFunction(1, 2, 3)

/*
Note: The arguments variable is "array-like", but not an array. It is array-like in that it has a 
numbered index and a length property. However, it does not possess all of the array-manipulation methods.

*/