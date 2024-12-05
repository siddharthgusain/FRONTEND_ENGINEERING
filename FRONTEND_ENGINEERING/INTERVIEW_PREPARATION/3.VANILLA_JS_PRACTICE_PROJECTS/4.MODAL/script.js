(function () {
    const openBtn = document.querySelector(".openBtn");
    const closeBtn = document.querySelector(".closebtn");
    const modalOverlay = document.querySelector(".modalOverlay");

    let isModalOpen = false;

    function changeModalState() {
        console.log("clicked");
        isModalOpen = !isModalOpen;
        if (isModalOpen) {
            modalOverlay.classList.add("openModal");
        } else {
            modalOverlay.classList.remove("openModal");
        }
    }

    openBtn.addEventListener("click", function () {
        changeModalState(); // creates closure with outer environment
    });

    closeBtn.addEventListener("click", function () {
        changeModalState(); // creates closure with outer environment
    });
})();