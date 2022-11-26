const tabsRef = document.querySelectorAll(".tabBtn");
const mainContainer = document.querySelector(".mainContainer");
const paras = document.querySelectorAll(".content");


mainContainer.addEventListener("click", function (e) {
    const id = e.target.dataset.id; //not current Target , as currentTarget will be mainContainer
    // note dataset will only be present on tabs not on content
    if (id) {
        tabsRef.forEach((tab) => {
            tab.classList.remove("active"); // remove for all tabs
            e.target.classList.add("active") // add active to current target

        });

        // hide other content
        paras.forEach((para) => {
            para.classList.remove("active");
        });

        const element = document.getElementById(id);
        console.log(element)
        element.classList.add("active") // adding to content having id provided by "data-id" attribute of tabs

    }
});

// here we are using event bubbling(event delegation to saving space)