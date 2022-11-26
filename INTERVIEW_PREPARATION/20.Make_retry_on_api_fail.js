/*
Make a GET request  and store the response in a
json file. Add a retry logic if the request fails for some reason.

fetch('https://jsonplaceholder.typicode.com/todos/1')
*/

function withRetryHandling(callback, {
    baseDelay = 400,
    logger = console,
    numberOfTries = 3,
} = {}) {

    return function callbackWithRetryHandling(...params) {
        const retry = async (attempt = 1) => {
            try {
                return await callback(...params);
            } catch (error) {
                if (attempt >= numberOfTries) throw error;

                // Use an increasing delay to prevent flodding the
                // server with requests in case of a short downtime.
                const delay = baseDelay * attempt;

                if (logger) logger.warn('Retry because of', error);

                const promise = new Promise(
                    resolve =>
                        setTimeout(() => resolve(retry(attempt + 1)), delay)
                );

                return promise;
            }
        };

        const promise = retry();
        return promise;
    };
}

const retry = withRetryHandling(() => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
});

retry().then(res => res.json()).then((data) => console.log(data));

