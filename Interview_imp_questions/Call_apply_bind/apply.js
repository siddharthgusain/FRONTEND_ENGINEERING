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

obj.printFullName.apply(obj1, ["I am tushar", "I like games"])

// Apply method just takes array list of arugment , call takes individual argument thats it


