// creating empty object
var a1 = {};
console.log(a1);

// creating object with data member and functions
var a2 = {
    name: {
        first: "sid",
        last: "gusain"
    },
    age: 22,
    bio: function () {
        console.log(this);
    },
    introduceSelf: function () {
        console.log(`My name is ${this.name.first}`)
    }
};

a2.bio();
a2.introduceSelf();
window.console.log(a2.name.first); // one way to access
window.console.log(a2['name']['first']) // second way using indexing

var a3 = {
    name: {
        first: "sid",
        last: "gusain"
    },
    age: 22,
    bio() { // shorted way to write methods inside object
        console.log(this);
    }
};

// creating obj with simple function
function createPerson(nameParam) {
    const obj = {};
    obj.name = nameParam;
    obj.introduceSelf = function () {
        console.log(this);
        console.log(`Hi i am ${this.name}`);
    }

    return obj;
}

const sid = createPerson("sid");

sid.introduceSelf();

// object creation better way with constructor
// "this" will point to "sid" object


// Creating object with "new" operator
function Person(nameParam) {
    console.log(this);
    this.name = nameParam;
    this.introduceSelf = function () {
        console.log(`Hi i am ${this.name}`);
    };
}

const sidWithConstructor = new Person("sid");
sidWithConstructor.introduceSelf();

//--------Object.create()--------------
// Animal properties and method encapsulation
const Animal = {
    type: "Invertebrates", // Default value of properties
    displayType() {
        // Method which will display type of Animal
        console.log(this.type);
    },
};

// Now i need to create another object using above object as prototype
const animalObject = Object.create(Animal);
console.log(animalObject.__proto__); // Above properties type and displayType will be present in __proto__
animalObject.displayType(); // we can access it because of scope chaining


//----------DELETING OBJECT property----------
const obj = {
    a: 1,
    b: 2
}

delete obj.a;

console.log(obj) //{b:2}