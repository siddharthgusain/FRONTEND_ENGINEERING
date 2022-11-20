const expensiveFunction = (...args) => {
    console.log(this);
    console.log("I AM EXPENSIVE");
    console.log(args);
}

function delayedFunction(expensiveFunction, delay) { // higher order function to throttle
    let flag = true;
    return function (...args) {
        if (flag) {
            expensiveFunction.apply(this, args); // call the function on first event
            flag = false; // to ignore in between events
            setTimeout(() => {
                flag = true; // set the flag to true after delay
            }, delay);
        }
    }
}

const throttle = delayedFunction(expensiveFunction, 2000);

window.addEventListener("resize", throttle);

// see the console for better picture
// Concepts use closure , settimeout , and higher order function