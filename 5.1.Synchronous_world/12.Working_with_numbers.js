var num1 = 10;
var num2 = 10.22123123213213;

window.console.log(typeof num1);
window.console.log(typeof num2);

num2 = Number(num2.toFixed(2)); // tofixed return string

window.console.log(typeof num2);

var num3 = '22';
console.log(num3 + 3); // concat
console.log(Number(num3) + 3); // actual addition

console.log(num1 ** 3); // exponent operator

console.log(window.Math.pow(num1,3)); // Math object usage 

// difference btw == and ===
// == dont do type checking , === do type checking as well
console.log('3' == 3); // true
console.log('3' === 3); // false
console.log(true == true); // true
console.log(true === true); // true

console.log(1 == true); // true
console.log(1 === true); //false

