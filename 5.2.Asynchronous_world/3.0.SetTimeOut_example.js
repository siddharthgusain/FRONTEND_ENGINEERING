console.log("Before settimeout")

setTimeout(() => {
    console.log("I am callback of setTimeout")
}, 5000);

console.log("After SetTimeout")