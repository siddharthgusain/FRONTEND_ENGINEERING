var st = 'siddharth'; // string literal
var eg = 'I\'ve baseball';

console.log(st + eg);

var num = 1023;
num = num.toString();
console.log(typeof num);

var msg = `siddharth ${num / 10}`;
console.log(msg);

// common methods
var st1 = "hello";
console.log(st1.charAt(0));
console.log(st1.length);
console.log(st1.indexOf("ll")); // starting index of "ll" substring
console.log(st1.indexOf("as")); //return -1
console.log(st1.slice(1, 3)); // el
console.log(st1.slice(2)); // llo
console.log(st1.toUpperCase()); // temperory change
console.log(st1); // hello
console.log(st1.replace("hell", "mell")); // temperory change
console.log(st1); // mello

// Creating string with String constructor Function
let stringObject = new String("Siddharth");
let stringLiteral = "siddharth"; // string literal

console.log(typeof stringLiteral); // string
console.log(typeof stringObject); // object
console.log(stringObject); // String object





