// Making Number Iterable 

// Adding Symbol.Iterable into Number prototype
Number.prototype[Symbol.iterator] = function () {
    return this.toString()[Symbol.iterator]();
}

// Using Iterator added to prototype
let num = 123;

const itr = num[Symbol.iterator]();

itr.next(); // {value:1,done:false}
itr.next(); // {value:2,done:false}

// Using for of loop
for (let value of num) {
    console.log(value);
}


// WE know number is not iterable by default but we added custom iterator