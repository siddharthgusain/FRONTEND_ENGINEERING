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

// Note:- the callback in then() is only called once all the 3 promises are "fullfilled"
// NOTE:- If any of the promise "REJECT" , then it will abort the other as well and catch is "RUN"
// Usefull when the API calls are not dependent on each other.

const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
    .then((responses) => {
        for (const response of responses) {
            console.log(`${response}`);
        }
    }).catch((error) => {
        console.log("CATCH IS CALLED");
    })

// If any one promise is "REJECTED" , catch callback is called
// If all are "FULLFILLED", then() is called