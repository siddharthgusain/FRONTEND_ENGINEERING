const personPrototype = {
    greet() {
        console.log("hello");
    },
};

// using Object.create
const sid = Object.create(personPrototype);
sid.greet();

// using constructor

const personPrototype1 = { // generally object are used to defined member functions/methods
    greet() {
        console.log(`hello ${this.name}`);
    },
};

function Person(nameParam) { // generally functions are used to initilize data members
    this.name = nameParam;
}

Object.assign(Person.prototype, personPrototype1);

const sid1 = new Person("sid with assign");
sid1.greet(); // greet is available as Person.prototype contains it (assign does that)

/* 
Properties that are defined directly in the object, like "name" here, are called own properties,
and you can check whether a property is an own property using the static Object.hasOwn() method
*/

console.log(Object.hasOwn(sid1, "name")); // true as name is own property of sid1
console.log(Object.hasOwn(sid1, "greet")) // greet is not own property
