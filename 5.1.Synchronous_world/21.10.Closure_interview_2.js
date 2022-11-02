function counter() {
    var count = 0;
    return function increamentCounter() {
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1() // 1
counter1() // 2

var counter2 = counter();
counter2() // 1
counter2() // 2

// counter 1 and counter2 has fresh copies of increamentCounter and closure of count