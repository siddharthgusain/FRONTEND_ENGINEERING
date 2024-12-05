// first class function or first class citizen
// the ability of function to be passed as parameters and return is called first class citizen


function higherOrder(params) { // higher order function
    console.log(params);
}

function callBack() { // callback
    console.log("hello")
}

higherOrder(callBack);


// Higher order function are functions which takes another function as arguemnt or return
// Callbacks are function that are passed as arguement to higher order functions