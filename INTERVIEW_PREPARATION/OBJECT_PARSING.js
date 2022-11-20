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


function getStateName(city) {
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



const result = getStateName("Pune");
console.log(result);


/*
Input - “Pune”
Output - [“IL”, “Maharashtra”]
*/