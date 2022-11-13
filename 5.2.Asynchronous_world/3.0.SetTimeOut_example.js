console.log("Before settimeout")

setTimeout(function callback() {
    console.log("I am callback of setTimeout")
}, 5000);

console.log("After SetTimeout")