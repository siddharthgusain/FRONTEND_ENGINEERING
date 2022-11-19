var num1 = 10; // Note any number we declare it will inherit properties from "Number" Object
var num2 = 10.22123123213213;

window.console.log(typeof num1); // number
window.console.log(typeof num2); // number

num2 = Number(num2.toFixed(2)); // tofixed return string

window.console.log(typeof num2); // number

var num3 = '22';
console.log(num3 + 3); // concat --> 223
console.log(Number(num3) + 3); // actual addition --> 25

console.log(num1 ** 3); // exponent operator --> 1000

console.log(window.Math.pow(num1, 3)); // Math object usage  --> 1000

// difference btw == and ===
// == dont do type checking , === do type checking as well
console.log('3' == 3); // true
console.log('3' === 3); // false
console.log(true == true); // true
console.log(true === true); // true

console.log(1 == true); // true
console.log(1 === true); //false

// Number Object 
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;

let num = '1';
console.log(num); // string stype
console.log(Number.isInteger(num)); // false
console.log(Number.parseInt(num)); // 1 --> Integer type

// Math Object
Math.pow(1, 3);  // --> 1
Math.abs(-1); // 1
Math.ceil(12.5); // 13


//-----------BigInt--------------------
const bigInt = 123n; // bigint literal
const bigIntObject = BigInt(123);

console.log(bigInt);
console.log(bigIntObject);

