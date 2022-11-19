function setTimeoutExample() {
    var i = 1;
    setTimeout(function () {
        console.log(i); // this function creates closure object with "i"
    }, 3000);
    console.log("I am called before settimeout")
}

function print_number() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i); // i is referenced inside settimeout so even if stack frame is deleted , "i" is not garbage collected and is present in memory due to closure
        }, i * 1000);
    }
    console.log("I am called before loops");
}

function print_number_with_let() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i); // i is referenced inside settimeout so even if stack frame is deleted , "i" is not garbage collected and is present in memory due to closure
        }, i * 1000);
    }
    console.log("I am called before loops");
}

function print_number_without_let() {
    for (var i = 0; i < 5; i++) {

        function close(local) {
            setTimeout(function () {
                console.log(local); // local is present as closure for this callback inside settimeout and "local" is different for each settimeout
            }, local * 1000);
        }

        close(i)
    }
    console.log("I am called before loops");
}

print_number_without_let();