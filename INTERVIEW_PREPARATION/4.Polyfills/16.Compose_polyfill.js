// One liner COMPOSE
let composeOneLiner = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

let getName = (person) => person.name;
let uppercase = (string) => string.toUpperCase();
let get6Characters = (string) => string.substring(0, 6);
let reverse = (string) => string
    .split('')
    .reverse()
    .join('')


// COMPOSE WITHOUT ARROW FUNCTION SYNTAX
function composeWithoutArrowFunction(...functions) {
    return function (value) { // value will be "Buckethead"
        let result = functions.reduceRight((currentValue, currentFunction) => { // we are reducing from right-to-left
            return currentFunction(currentValue);
        }, value);

        return result;
    }
}

let result = composeWithoutArrowFunction(
    reverse,
    get6Characters,
    uppercase,
    getName
);

console.log(result({ name: "Buckethead" }));


// COMPOSE WITH ARROW FUNCTION SYNTAX
let composeWithArrow = (...functions) => (value) => {
    return functions.reduceRight((currentValue, currentFunction) => { // we are reducing from right-to-left
        return currentFunction(currentValue);
    }, value);
}

let result1 = composeWithArrow(
    reverse,
    get6Characters,
    uppercase,
    getName,
)({ name: 'Buckethead' }) // { name: 'Buckethead' } == x

console.log(result1);



// ALL these function are found in libary like "LODASH and rxJS"