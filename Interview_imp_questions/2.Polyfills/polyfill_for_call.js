/*A polyfill is a piece of code (usually JavaScript on the Web) used to provide
modern functionality on older browsers that do not natively support it.
 for e.g if we dont have support for bind() method, so we can implement it on our own
implementing our own functionailty sometimes known as polyfill */

// adding new function to prototype so that all function inherites this function

Function.prototype.callPolyfill = function (obj, ...arg) {
    obj.funRef = this; // creating a property in obj
    obj.funRef(...arg); // calling the function we created in obj with other argument passed
}


function print(msg1, msg2) {
    console.log(this.firstName + " " + msg1 + " " + msg2);
}

let obj = {
    firstName: 'Siddharth'
}

print.callPolyfill(obj, "hello", " world");
console.log(obj);