// this has various meaning in different context , it generally represents current calling object
// Note:- functions are also objects in JS , so it could be current calling function

/*
The rule is that "THIS" is determined at the time a function is invoked by inspecting where
it’s called, its "CALL SITE".
*/

//------If the new keyword is used when calling the function, this inside the function is a brand new object.--------

function Person(name) {
    console.log(this); // this is reference of new object
    this.name = name; // here we are actually adding property "name" to fresh object
}

let obj = new Person("sid");
let obj1 = Person("sid"); // here we are simply calling function , "this" is pointing to window

// let obj1 = window.Person("sid"); // property "name" is being added to window object

console.log(obj); // {"name":"sid"}
console.log(obj1)// undefined

//-------------with call apply bind--------------------------------

function fn() {
    console.log(this); // this is pointing to obj2
}

let obj2 = {
    "name": "sid"
}

fn.call(obj2)

//-------------Calling method of an object-----------
let object = {
    "name": "sid",
    fun: function () {
        console.log(this); // this pointing to object
    }
}

object.fun();


//-----ARROW FUNCTION----------------
/*
If the function is an ES2015 arrow function, it ignores all the rules above and receives 
the this value of its surrounding scope at the time it’s created. To determine this, 
go one line above the arrow function’s creation and see what the value of this is there. 
It will be the same in the arrow function.
*/

const objWithArrow = {
    value: 'abc',
    createArrowFn: function () {
        console.log(this) // pointing to objWithArrow
        return () => console.log(this); // passed to arrow function
    }
};
const arrowFn = objWithArrow.createArrowFn();
arrowFn(); // -> { value: 'abc', createArrowFn: ƒ }


// If multiple of the above rules apply, the rule that is higher wins and will set the this value.


// -----------------------TALKING ABOUT LIBRARIES---------------------------------
/*

-> Libraries will sometimes intentionally bind the value of this inside their functions. 

-> "this" is bound to the most useful value for use in the function. 

-> jQuery, for example, binds this to the DOM element triggering an event in the callback 
to that event. 

-> If a library has an unexpected this value that doesn’t seem to follow the rules, check 
its documentation. It’s likely being bound using bind.

*/