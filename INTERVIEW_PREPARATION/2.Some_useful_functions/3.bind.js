let obj = {
    firstName: "Siddharth",
    lastName: "Gusain",
    printFullName: function (greetingMsg, hobby) {
        console.log(this.firstName + " " + this.lastName + " " + greetingMsg + " " + hobby);
    }
}

let obj1 = {
    firstName: "Tushar",
    lastName: "Gusain"
}

let printMyName = obj.printFullName.bind(obj1, "I am Tushar", "I like games");
printMyName(); // printMyName is a binded function with "this" as obj1

// bind is exactly like call but it return the new function rather than calling it there only