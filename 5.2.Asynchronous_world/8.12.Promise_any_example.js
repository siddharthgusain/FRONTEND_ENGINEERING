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

const promise1 = Promise.reject(1);
const promise2 = Promise.reject(2);
const promise3 = Promise.reject(3);

Promise.any([promise1, promise2, promise3])
    .then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log("CATCH IS CALLED"); // only called if all of the promises are rejected
    });

