Function.prototype.bindPolyfill = function (...args1) { // here args is an array
    let funRef = this; // printName function
    if (typeof funRef !== 'function') {
        throw new Error("Wrong function");
    }
    let obj = args1[0];
    let params = args1.slice(1);// other argument other than obj
    return function (...args2) { // contains "testing"
        funRef.apply(obj, [...params, ...args2]); // return a function which calls printName function with all arguments
    }
}


function print(msg1, msg2, state) {
    console.log(this.firstName + " " + msg1 + " " + msg2 + " " + state);
}

let obj = {
    firstName: 'Siddharth'
}

let printMyMsg = print.bindPolyfill(obj, "hello", " world");
printMyMsg("testing");