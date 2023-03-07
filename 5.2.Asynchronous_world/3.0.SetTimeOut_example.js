console.log("Before settimeout")

setTimeout(function callback() {
    console.log(this); // here "this" is window as we are using normal function
    console.log("I am callback of setTimeout");
}, 5000);

setTimeout(() => {
    console.log(this); // here "this" is undefined as we are using arrow function
    console.log("I am callback of setTimeout");
}, 5000);

console.log("After SetTimeout")