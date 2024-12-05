/*A polyfill is a piece of code (usually JavaScript on the Web) used to provide
modern functionality on older browsers that do not natively support it.
for e.g if we dont have support for bind() method, so we can implement it on our own
implementing our own functionailty sometimes known as polyfill 
*/

// adding new function to prototype so that all function inherites this function

Function.prototype.callPolyfill = function (obj, ...arg) { // here we used rest parameter , as we dont know how many agurments this function can have
    if (typeof this !== 'function') {
        throw new Error('function is not callable');
    }
    let objDeepCopy = JSON.parse(JSON.stringify(obj)); // to prevent mutating original object
    objDeepCopy.funRef = this; // creating a property in obj
    objDeepCopy.funRef(...arg); // calling the function we created in obj with other argument passed
}


function print(msg1, msg2) {
    console.log(this.firstName + " " + msg1 + " " + msg2);
}

let obj = {
    firstName: 'Siddharth'
}

print.callPolyfill(obj, "hello", " world");
console.log(obj); // if we see it doesn't mutate the original object as we used deep copy with JSON methods

