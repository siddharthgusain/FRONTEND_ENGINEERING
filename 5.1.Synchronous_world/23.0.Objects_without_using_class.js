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
    }
};

a2.bio();
window.console.log(a2.name.first); // one way to access
window.console.log(a2['name']['first']) // second way using indexing

var a2 = {
    name: {
        first: "sid",
        last: "gusain"
    },
    age: 22,
    bio() { // shorted way to write methods inside object
        console.log(this);
    }
};
