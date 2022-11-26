(function () {
    const reviews = [
        {
            id: 1,
            name: "Jenny",
            job: "Android Developer",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            text: "Measure performance with the Android Studio Profiler. For more details on a certain category, click the graph for that category."
        },
        {
            id: 2,
            name: "John",
            job: "ARTIST",
            img: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3",
            text: "An artist is a person engaged in an activity related to creating art, practicing the arts, or demonstrating an art."
        },
        {
            id: 3,
            name: "Thanos",
            job: "WORLD DESTROYER",
            img: "https://www.shutterstock.com/image-photo/chonburi-thailand-october-12-2020-600w-1831662886.jpg",
            text: "Thanos is a supervillain appearing in American comic books published by Marvel Comics. He was created by writer-artist Jim Starlin, and first appeared in The Invincible Iron Man"
        },
        {
            id: 4,
            name: "Iron Man",
            job: "INVENTOR",
            img: "https://www.shutterstock.com/image-photo/avengers-station-london-february-2019-600w-1359859739.jpg",
            text: "Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name"
        }
    ];

    const reviewImgRef = document.getElementById("image");
    const authorRef = document.getElementById("author");
    const jobRef = document.getElementById("job");
    const descRef = document.getElementById("desc");


    const prevBtnRef = document.querySelector(".prevBtn");
    const nextBtnRef = document.querySelector(".nextBtn");

    let currentItem = 0;

    function changeReviewItem() {
        const item = reviews[currentItem];
        reviewImgRef.src = item.img;
        authorRef.textContent = item.name;
        jobRef.textContent = item.job;
        descRef.textContent = item.text;
    }


    // load initial item
    window.addEventListener("DOMContentLoaded", function () {
        changeReviewItem();
        // Closure is being used here
    });

    prevBtnRef.addEventListener("click", function () {
        currentItem--;
        if (currentItem < 0)
            currentItem = reviews.length - 1;
        changeReviewItem();
    });

    nextBtnRef.addEventListener("click", function () {
        currentItem++;
        if (currentItem > reviews.length - 1)
            currentItem = 0;
        changeReviewItem();
    });

})();

// So in frontend we manage data and add this data to UI NODES , which are also objects present in RAM
// We attach event listeners which are allocated memeory in current JS instance HEAP



