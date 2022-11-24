const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

function myCallback({ quantity }) {
    return quantity > 5 ? "ok" : "restock";
}

Array.prototype.groupPolyfill = function (callback) {
    let arr = this;
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let propertyValue = callback(arr[i]);
        if (propertyValue in obj)
            obj[propertyValue].push(arr[i]);
        else {
            obj[propertyValue] = [arr[i]];
        }
    }

    return obj;
}

let result = inventory.groupPolyfill(myCallback);


console.log(result);
