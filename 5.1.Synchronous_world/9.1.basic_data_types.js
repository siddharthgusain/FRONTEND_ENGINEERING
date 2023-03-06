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