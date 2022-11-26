(function () {
    const colors = ["green", "red", "blue", "wheat"];

    const textRef = document.getElementById("bgColorText");
    const buttonRef = document.getElementById("clickMeButton");

    function getRandomNumber() {
        const number = Math.floor(Math.random() * colors.length);
        return number;
    }

    function flipColor() {
        // get a random number between 0 to array.size
        const randomNumber = getRandomNumber();
        document.body.style.backgroundColor = colors[randomNumber] // colors is a global variable , so this function can access
        textRef.textContent = `Background Color: ${colors[randomNumber]}`; // textRef is global object
    }

    buttonRef.addEventListener("click", flipColor); // here flipcolor makes closure with outer context
})();


// WRAPPING IT IN IIFE TO AVOID GLOVAL SCOPE POLLUTION(BEST PRACTICE)