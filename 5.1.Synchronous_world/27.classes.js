// classes was introduced in ECMA 2015
// under the hood these classes are converted to prototypal inheritance model
class Person{

    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    display(){
        console.log(this);
    }
}

class Teacher extends Person{

    constructor(name , age , subject){
        super(name ,age); // initializing name and age 
        this.subject = subject;
    }

    log(){
        console.log("Hello student");
    }
}

let obj = new Teacher("sid",20,"maths");

console.log(obj);
// obj => Teacher => Person => Object
// by default all data members and methods are public in JS classes
// so it means all data members and methods are present inside prototype object
