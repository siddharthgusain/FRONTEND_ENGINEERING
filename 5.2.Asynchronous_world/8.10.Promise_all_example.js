const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
        for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`)
    });

// Note:- the callback in then() is only called once all the 3 promises are "settled"
// NOTE:- If any of the promise "REJECT" , then it will abort the other as well
// Usefull when the API calls are not dependent on each other.


//----------------PROMISE.ALLSETTLED-----------------
/*
The Promise.allSettled() method takes an iterable of promises as input and returns a single Promise.
This returned promise fulfills when all of the input's promises settle (including when an empty 
iterable is passed), with an array of objects that describe the outcome of each promise.
*/

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises)
    .then((results) =>
        results.forEach((result) => console.log(result.status))
    );

/*
The Promise.allSettled() method is one of the promise concurrency methods. 
Promise.allSettled() is typically used when you have multiple asynchronous tasks 
that are not dependent on one another to complete successfully,
"or you'd always like to know the result of each promise"
*/

//------------ANOTHER EXAMPLE------------
Promise.allSettled([
    Promise.resolve(33), // promise1
    new Promise((resolve) => setTimeout(() => resolve(66), 0)), //promise2
    99,
    Promise.reject(new Error("an error")), //promise 3
])
    .then((values) => console.log(values))
    .catch((err) => {
        console.log(err);
    });

// Here catch will never be called even if any of the promise is "REJECTED" UNLIKE Promise.all
// It is usefull if you want to know status of all promises