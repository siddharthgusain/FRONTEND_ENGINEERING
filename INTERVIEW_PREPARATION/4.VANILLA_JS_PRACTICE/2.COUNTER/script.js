const counterText = document.getElementById("counterValue");

const buttonRefArray = document.querySelectorAll(".btn");

let counter = 0;
buttonRefArray.forEach((buttonRef) => {
    buttonRef.addEventListener("click", function (eventObject) {
        const classList = eventObject.target.classList;
        if (classList.contains("increase"))
            counter++; // counter is present in closure of this callback when it was registered
        else if (classList.contains("decrease"))
            counter--;
        else
            counter = 0;

        if (counter > 0)
            counterText.style.backgroundColor = "green";
        else if (counter < 0)
            counterText.style.backgroundColor = "red";
        else
            counterText.style.backgroundColor = "aqua";
        counterText.textContent = counter; // closure with counterText
    })
})


// NOTE :- this way of writing code is not a good way as we are accessing global variable , and in larger projects it creates bugs