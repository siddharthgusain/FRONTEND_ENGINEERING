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

        console.log(`Hi i am ${this.name}`);
    }

    return obj;
}

const sid = createPerson("sid");

sid.introduceSelf();

// object creation better way with constructor
// "this" will point to "sid" object

function Person(nameParam) {
    this.name = nameParam;
    this.introduceSelf = function () {
        console.log(`Hi i am ${this.name}`);
    };
}

const sidWithConstructor = new Person("sid");
sidWithConstructor.introduceSelf();