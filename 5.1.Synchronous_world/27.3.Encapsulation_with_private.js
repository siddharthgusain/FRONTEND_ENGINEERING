class Student {

    #year; // private variable

    constructor(year) {
        this.#year = year;
    }

    #myName() { // private function
        console.log("My name is always siddharth")
    }

    introduceSelf() {
        this.#myName();
        console.log(`I'm in year ${this.#year}.`);
    }

    canStudyArchery() {
        return this.#year > 1;
    }
}

const obj = new Student(1999);
obj.canStudyArchery()
// obj.#year // error
