// creting an object
let person1 = {
    name:"sid",
    age:20,
};

let person2 = {
    name:"tushar",
    age:22,
};
 
function display(subject,major) {
    console.log(this.name + " " + subject + " " + major);
}
// probem : we want display function to be used by person1 and  person2
// solution : 1. copy paste the method
//            2. use function borrowing

// call apply bind are ways to borrow functions btw objects

// call method
// it is directly invoked
display.call(person2,"maths"); // this points to person2 object
display.call(person1,"English");


// apply method
// it is directly invoked
display.apply(person1,["Maths" , "Btech"]); // apply is same as call just it takes list of arguements
display.apply(person2,["English" , "Btech"]);

// bind method
// bind is same as call just it returns copy of function with object passed as reference
// it is not directly invoked 
let person1_display = display.bind(person1,"maths","btech");
console.log(person1_display);
person1_display(); // binded method with person1 object