const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');


Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((response) => {
        console.log(`${response.url}: ${response.status}`);
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`)
    });

// Note :- In case of any , callback in then() is called once for the api that is "FULLFILLED FIRST"
// Here Any api can complete first , we dont know.
// IF ALL OF THEM are "REJECTED", catch is called


//------------PROMISE.RACE-----------
/*
The Promise.race() method takes an iterable of promises as input and returns a single Promise. 
This returned promise settles with the eventual state of the first promise that settles.
*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
});
  // expected output: "two"

// ITs kind of racing condition , output depends of completion of events

//-------------PROMISE RACE VS ANY--------------
/*

-> Promise.race is settled as soon as "ANY" of the promises you feed it settle, 
whether they are fulfilled or rejected.

-> Promise.any is settled as soon as "ANY OF THE PROMISE" you feed it is "fulfilled" or they are "ALL" rejected,

*/
