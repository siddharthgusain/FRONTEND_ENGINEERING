(function () {
    const btnsRef = document.querySelectorAll(".questionBtn");

    // note DOM API above is run synchronously and its takes millisecond to get the pointer to dom node
    btnsRef.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            const grandParent = e.currentTarget.parentElement.parentElement; // finding grandparent
            grandParent.classList.toggle("showAnswer"); // toggling this class
        })
    });
})();

// used toggle in this project and parent element selector





