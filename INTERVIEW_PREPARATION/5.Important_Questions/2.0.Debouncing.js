// debouncing is done to get better performance in frontend , to reduce number of times a function is called
// Debounce is a higher order function

const inputObject = document.getElementById("searchBar");

const getData = async () => {
    console.log(this);
    console.log("SEARCHING.......");
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    data = await data.json();
    console.log("DATA:", data);
}

function delayedFunction(fun, delay) {
    let timer;
    console.log("DELAYED FUNCTION CALLED");
    return function (...args) {
        console.log("DEBOUNCE CALLED");
        clearTimeout(timer);
        timer = setTimeout(() => { // here closure is made with timer to remember previous timer value
            fun.apply(this, args); // we used apply for obj binding
        }, delay);
    }
}

/*
The returned timeoutID is a positive integer value which identifies 
the timer created by the call to setTimeout(). This value can be passed 
to clearTimeout() to cancel the timeout.
*/

const debounce = delayedFunction(getData, 2000);

inputObject.addEventListener("input", debounce);

/*
getData is not called on every keystroke , it is only called if the delay with
two keystrokes is more than 300ms
*/


// can be used for scroll events,infinite scrolling , and window resize
// Three concepts are used closure , setTimeout and higher order function