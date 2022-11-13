// -----------------MAP----------------
const users = [
    { first: "sid", last: "gusain", age: 26 },
    { first: "sid1", last: "gusain1", age: 12 },
    { first: "sid2", last: "gusain2", age: 26 },
    { first: "sid3", last: "gusain3", age: 14 }
]

const output = users.map((item) => {
    return item.first + " " + item.last;
})

console.log(output); // ['sid gusain', 'sid1 gusain1', 'sid2 gusain2', 'sid3 gusain3']


// ---------------Reduce---------------

const output1 = users.reduce((acc, curr) => {

    if (acc[curr.age]) {
        acc[curr.age]++;
    } else {
        acc[curr.age] = 1;
    }

    return acc;
}, {});

console.log(output1); // {12: 1, 14: 1, 26: 2} // count of different ages