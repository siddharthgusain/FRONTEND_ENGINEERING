/* -> 
Assigning One type variable to another is possible in both types(Dynamically Types , Statically Types) of languages
as variable is just Space(bytes) in Memory

What Happens when we reassign value in Javascript

In JavaScript, when you reassign a new value to a variable, the reference stored in the variable (a) does 
indeed change to point to the memory location where the new value is stored.

So, when you initially assign a value to a, it holds a reference to the memory location where that value is stored. 
If you then reassign a to a new value, it now holds a reference to the memory location where the new value is stored.

In summary:
-> When you assign a new value to a variable, the reference inside the variable is updated to point to the memory location where the new value is stored.
-> This means that the "address inside the reference variable" does indeed change when you reassign a new value to the variable.

JS file is input to JS engine process -> It is run line by line so each line behind the scenes JS do above steps 
-> So ALl these Memory(the actual Value) in Store inside Heap Area Of PROCESS MAP IN RAM -> 
-> each Variable is Inside Stack but contains only address -> So Local variables are just pointers you could say
-> Heap AND STACK OF JS ENGINE -> JS FILE doesn't get converted to Executable as it is interpreted -> JS engine has
both these STACK AND HEAP INSIDE ITS PROCESS MAP

*****VISUALIZE THIS TO GET BETTER UNDERSTANDING***************
***** Visualize what exactly is object in JS , how it is store in RAM*****
*/

// NUMBER(integer, float ,etc)
var num = 10;
var num1 = 10.888;

// NUll
var nullData = null;

// Strings
var st = "hello world";

// boolean

var bool = true;

// arrays

var arr = [1, 2, 3];
var arr1 = ["sid", "gusain"];

// Object

var obj = {
    1: "sid",
    roll: 20
};

console.log(obj);

//-----------Symbol----------------
/*
Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol 
value or just a Symbol — that's guaranteed to be unique. Symbols are often used to add unique 
property keys to an object that won't collide with keys any other code might add to the object, 
and which are hidden from any mechanisms other code will typically use to access the object. 
That enables a form of weak encapsulation, or a weak form of information hiding.
*/

const symb1 = Symbol('a');
const symb2 = Symbol('a');

console.log("symb1", symb1);
console.log("symb2", symb2);
console.log(Symbol('a') === Symbol('a')) // false , as both are unique

// Symbol is generally used inside framework like React.
// Generally used for object properties to be unique and prevent collision
// Can't be used with "new" operator
// Symbol properties are not "enumerable"

/*
$$typeof: Symbol(react.element)
*/