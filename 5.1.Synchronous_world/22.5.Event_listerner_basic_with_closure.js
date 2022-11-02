function attachEventListner() {
    let count = 0;
    const element = document.getElementById("heading");
    element.addEventListener("click", function callback() {
        console.log(count);
    });
}

attachEventListner();

// Its very important to remove event listner carefully as they take a lot of space in memoyr due to closure
// In react its highly important as the closure can take a lot of space