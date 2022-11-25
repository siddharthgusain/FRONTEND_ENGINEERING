//----------------PROMISE.ALLSETTLED-----------------
/*
The Promise.allSettled() method takes an iterable of promises as input and returns a single Promise.
This returned promise fulfills when all of the input's promises "SETTLED" (including when an empty 
iterable is passed), with an array of objects that describe the outcome of each promise.
*/

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises)
    .then((results) =>
        results.forEach((result) => console.log(result.status))
    ).catch((err) => {
        console.log("CATCH IS CALLED");
    });


//------------ANOTHER EXAMPLE------------
Promise.allSettled([
    Promise.resolve(33), // promise1
    new Promise((resolve) => setTimeout(() => resolve(66), 0)), //promise2
    99,
    Promise.reject(new Error("an error")), //promise 3
])
    .then((values) => console.log(values))
    .catch((err) => {
        console.log("CATCH IS CALLED");
    });

// Here catch will never be called even if any of the promise is "REJECTED" UNLIKE Promise.all
// It is usefull if you want to know status of all promises