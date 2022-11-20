let user = {
    name: "siddharth",
    address: {
        personal: {
            city: "Delhi",
            area: "Vasundhara"
        },
        office: {
            city: "New Delhi",
            area: {
                landmark: "Apollo"
            }
        }
    }
}

/*
output:-
let result = {
    user_name:"Siddharth",
    user_address_personal_city:"Delhi",
    ..so on
}
*/

// can be solved with recursion
let result = {};
function flattenObject(obj, parentKey) {
    for (let key in obj) {
        let value = obj[key];
        let resultKey = `${parentKey}_${key}`;

        if (typeof value === 'object') { // if object
            flattenObject(value, resultKey);
        } else { // if not an object
            result[resultKey] = value;
        }
    }
}

flattenObject(user, "user");

console.log(result);
