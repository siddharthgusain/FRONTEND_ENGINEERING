const data = {
    "India": {
        "Karnataka": ["Bangalore", "Mysore"],
        "Maharashtra": ["Mumbai", "Pune"]

    },
    "USA": {
        "Texas": ["Dallas", "Houston"],
        "IL": ["Chicago", "Aurora", "Pune"]

    }
}


function getStateNameIteratively(city) {
    const stateName = [];
    // logic to get stateName 
    const arr = Object.values(data);
    arr.map((item) => {

        for (const key in item) {
            const value = item[key];

            value.map((item) => {
                if (item == city)
                    stateName.push(key);
            })
        }

    });

    return stateName;
}
const result = getStateNameIteratively("Pune");
console.log(result);


let result1 = [];
let city = "Pune"
function getStateNameRecursive(obj) {

    for (let key in obj) {
        let value = obj[key];
        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                if (value[i] === city)
                    result1.push(key);
            }
        }
        else if (typeof value == 'object')
            getStateNameRecursive(value);
    }
}

getStateNameRecursive(data);
console.log(result1);



/*
Input - “Pune”
Output - [“IL”, “Maharashtra”]
*/