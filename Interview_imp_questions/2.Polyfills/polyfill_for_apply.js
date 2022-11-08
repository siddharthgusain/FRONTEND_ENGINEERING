Function.prototype.applyPolyfill = function (obj, args) { // here args is an array
    obj.funRef = this; // creating a property in obj
    obj.funRef(...args); // calling the function we created in obj with other argument passed
}


function print(msg1, msg2) {
    console.log(this.firstName + " " + msg1 + " " + msg2);
}

let obj = {
    firstName: 'Siddharth'
}

print.applyPolyfill(obj, ["hello", " world"]);
