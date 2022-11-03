// map
const users = [
    { first: "sid", last: "gusain", age: 26 },
    { first: "sid1", last: "gusain1", age: 12 },
    { first: "sid2", last: "gusain2", age: 26 },
    { first: "sid3", last: "gusain3", age: 14 }
]

const output = users.map((item) => {
    return item.first + " " + item.last;
})

console.log(output);


// Reduce

const output1 = users.reduce((acc, curr) => {

    if (acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }

    return acc;
}, {});

console.log(output1);