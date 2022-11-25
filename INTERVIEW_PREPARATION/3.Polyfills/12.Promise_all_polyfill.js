const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = Promise.reject("GOT REJECTED");

// -----------------ORIGINAL PROMISE ALL--------------- 
// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then((responses) => {
//         for (const response of responses) {
//             console.log(`${response.url}: ${response.status}`);
//         }
//     })
//     .catch((error) => {
//         console.error(`Failed to fetch: ${error}`)
//     });


//--------------MY POLYFILL----------------
function promiseAllPolyfill(promisesArray) {
    let totalPromiseTobeResolved = promisesArray.length;
    let resolvedPromiseArray = [];

    const promise = new Promise(
        (resolve, reject) => {
            promisesArray.forEach((item) => {
                item.then((response) => {
                    totalPromiseTobeResolved = totalPromiseTobeResolved - 1;
                    resolvedPromiseArray.push(response);
                    if (totalPromiseTobeResolved === 0)
                        resolve(resolvedPromiseArray);
                }).catch((err) => {
                    reject(err);
                })
            })
        }
    );


    return promise;
}

promiseAllPolyfill([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
        for (const response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
    })
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`)
    });