var obj = {} ;
// obj is variable first but because we use {} it inherites from Object.prototype
// obj.__proto__ === Object.prototype
// obj contains all properties that is exposed by "Object" class in its "prototype" property

obj = {
    name:"sid",
    age:20,
    display:function () {
        console.log(this.name)
    }
};

// these are methods of creating object without using class , in C++ we use class name followed by object name
// as javascript is loosely typed it just inherites from inbuit class "Object"
// We can create object using class as well , thats why javascript is so versatile

console.log(obj.name); // dot notation
console.log(obj['name']); // bracket notation

// constructors and object instances

// normal function "Person"
function Person(name) { 
    this.name = name;
    this.display = function() {
        console.log(this);
    };
}

// creating object using this function
var obj1 = new Person("sid"); // this is weird right?
var obj2 = new Person("tushar");

// obj1 and obj2 were simple variable before inintializing then with new
// after new they are objects 
obj1.display();
obj2.display();


// creating object instances using Object() constructors
var obj3 = new  Object(); // creating empty object
var obj4 = new Object({
    name:"messi",
    age:22
});

console.log(obj3);
console.log(obj4);

// using create method to built new object using existing object
 var obj5 = Object.create(obj4);
 // obj5.__proto__ === obj4
 
 



