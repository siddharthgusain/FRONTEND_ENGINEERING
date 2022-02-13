function Person(name ,age) {
    this.name = name;
    this.age = age;
};

console.log(Person.prototype);
// modifying prototype property so that any object that inherites from
// Person will get the properties present in prototype

Person.prototype.display = function() {
    console.log(this);
};

function Teacher(name , age ,subject) {

    Person.call(this,name,age); // // calling Person function with Teacher "this"
    this.subject = subject // new property of teacher

};

console.log(Teacher.prototype)
/*
[Above function teacher is equivalent to below] 
function Teacher(name , age ,subject) {

    this.name = name;
    this.age = age; 
    this.subject = subject 

};
*/

// The display property defined in prototype of Person is not inherited by Teacher
// to resolve this create object Teacher.prototype
// we have existing object "Person.prototype" (as prototype is an object)
// now point the Teacher.prototype to Person.prototype so that it can inherit "Display"

Teacher.prototype = Object.create(Person.prototype);

// giving Teacher is new method

Teacher.prototype.log = function() {
    console.log("Hello students");
};

// Lets create a instance of Teacher
var teacher1 = new Teacher("Sam",30,"Maths");

console.log(teacher1.name); 
console.log(teacher1.age);
console.log(teacher1.display());
console.log(teacher1.subject);
console.log(teacher1.log());
