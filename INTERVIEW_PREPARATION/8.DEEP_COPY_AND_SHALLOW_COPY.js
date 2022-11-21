/*
-----------------A SMALL RECAP OF DATA TYPES IN JS----------------
1. Primitive :- Number,String,null,undefined,boolean,Symbol,BigInt
2. Complex:- Objects
                -> Array
                -> Function both are objects

So, ->Primitive Data types are passed or copied by value
-> Complex data types are passed by reference(i.e their address) ,and it actually makes 
sense cuz complex data types are logical entitiy , in memory we only know the base address of the
complex data type e.g Array , and other part of complex data type can be found by basic mathematical
operation.
*/

//-----------Primitive-------------
var primitive = 10;
var primitive1 = primitive;

primitive = 30;
console.log(primitive1); // 10

// Here deep copy is being done for primitive
// Also if they are passed to functions , they are passed by value

//------------Complex data type--------------

let obj = {
    "one": 1
}

let obj1 = obj;

obj1["one"] = 10;

console.log(obj) // {"one":10}

// Objects are shallow copied , so both "obj" and "obj1" are pointing to same location
// Also complex data types are passed by reference to functions