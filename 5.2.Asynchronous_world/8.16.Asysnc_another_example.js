async function fetchProducts() {
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data; // returns promise
    }
    catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

const promise = fetchProducts();
// console.log(promise[0].name);   // "promise" is a Promise object, so this will not work

// correct way
promise.then((data) => {
    console.log(data);
})