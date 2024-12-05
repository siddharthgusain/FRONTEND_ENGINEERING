let obj = {
    firstName: "Siddharth",
    lastName: "Gusain",
    printFullName: function (greetingMsg, hobby) {
        console.log(this.firstName + " " + this.lastName + " " + greetingMsg + " " + hobby);
    }
}

obj.printFullName("Hey everyone", "I love football");

// Call Apply bind are explosed to any function we create as they are part of "Function.prototype"

// call function usage 
let obj1 = {
    firstName: "Tushar",
    lastName: "Gusain",
}

// Function borrowing
obj.printFullName.call(obj1, "I am Tushar", "I like games");

// can pass any number of argument to call
// "this" points to first arguement passed to call function
/*
call function is used to call a function which may not be part of object , 
so you "BORROW" the function from other object
*/

function greeting() {
    console.log(this);
}

greeting(); // here "this" points to window object

let obj2 = {
    firstName: "Siddharth"
}

// I want to call greetings() but with obj2 , how to do it? 
// We can use call

greeting.call(obj2) // here "this" points to obj2
