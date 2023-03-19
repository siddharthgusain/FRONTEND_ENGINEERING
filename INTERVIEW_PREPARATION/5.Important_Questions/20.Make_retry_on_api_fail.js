/*
Make a GET request  and store the response in a
json file. Add a retry logic if the request fails for some reason.

fetch('https://jsonplaceholder.typicode.com/todos/1')
*/

function withRetryHandling(callback, {
    baseDelay = 2000,
    logger = console,
    numberOfTries = 10,
} = {}) {

    return function callbackWithRetryHandling(...params) {
        const retry = async (attempt = 1) => {

            try {
                const res = await callback(...params);
                if (res.status == 404) // is response has status 404 throw an error so that control goes to catch block
                    throw ("API FAILED WITH STATUS", res.status);
            } catch (error) {
                if (attempt >= numberOfTries) throw error;

                // Use an increasing delay to prevent flooding the
                // server with requests in case of a short downtime.
                const delay = baseDelay * attempt;

                if (logger) logger.warn('Retry because of', error);

                const promise = new Promise(
                    (resolve, reject) => {
                        setTimeout(() => resolve(retry(attempt + 1)), delay)
                    }
                );

                return promise;
            }

        };

        const promise = retry();
        return promise;
    };
}

const fetchData = () => {
    return fetch('https://jsonplaceholder.typicode.com/todoss/1')
}

const retry = withRetryHandling(fetchData);

retry().then(res => res.json()).then((data) => console.log(data));



// THIS retry is simply polling the server and after some timeout we are calling the api call again thats it