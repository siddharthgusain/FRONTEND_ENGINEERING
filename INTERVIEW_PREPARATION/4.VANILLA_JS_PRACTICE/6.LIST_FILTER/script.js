(function () {
    const menu = [
        {
            id: 1,
            title: "buttermilk pancakes",
            category: "desert",
            price: 15.99,
            img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
            desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
            id: 2,
            title: "diner double",
            category: "lunch",
            price: 13.99,
            img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
            desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
            id: 3,
            title: "godzilla milkshake",
            category: "shakes",
            price: 6.99,
            img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
            desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
            id: 4,
            title: "country delight",
            category: "breakfast",
            price: 20.99,
            img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
            desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
            id: 5,
            title: "egg attack",
            category: "lunch",
            price: 22.99,
            img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
            desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
            id: 6,
            title: "oreo dream",
            category: "shakes",
            price: 18.99,
            img: "https://plus.unsplash.com/premium_photo-1663126351065-741a1d338b5d",
            desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
            id: 7,
            title: "bacon overflow",
            category: "breakfast",
            price: 8.99,
            img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
            desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
            id: 8,
            title: "american classic",
            category: "lunch",
            price: 12.99,
            img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
            desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
            id: 9,
            title: "quarantine buddy",
            category: "shakes",
            price: 16.99,
            img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
            desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
    ];

    const listContainerRef = document.querySelector(".listItems");
    const filterRef = document.querySelector(".filters");

    function displayMenuItems(menu) {
        let displayMenu = menu.map((item) => {
            let itemTemplate = `
            <div class="item">
                <div class="imgContainer">
                    <img loading="lazy" src="${item.img}" alt="item image">
                </div>
                <div class="itemDesc">
                    <div class="itemDescHeading">
                        <span>
                            ${item.title}
                        </span>
                        <span>${item.price}</span>
                    </div>
                    <hr />
                    <div class="itemText">
                        <p>
                            ${item.desc}
                        </p>
                    </div>
                </div>
            </div>
        `

            return itemTemplate;
        }); // get all items html

        displayMenu = displayMenu.join(''); // join to get whole html string
        listContainerRef.innerHTML = displayMenu; /// append to parent
    } // this function has closure of all globals

    function getCategories() {
        const categories = menu.reduce(function (acc, item) {
            if (!acc.includes(item.category))
                acc.push(item.category)

            return acc;
        }, ['all']);

        let displayFilters = categories.map((item) => {
            let itemTemplate = `
            <button data-id=${item} type="button" class="filterTile">${item.toUpperCase()}</button>
        `
            return itemTemplate;
        }); // get all items html

        displayFilters = displayFilters.join(''); // join to get whole html string
        filterRef.innerHTML = displayFilters; /// append to parent
    }

    function addEventToFilterButton() {
        const filterBtns = document.querySelectorAll(".filterTile");
        // filter items
        filterBtns.forEach((btn) => {
            btn.addEventListener("click", function (e) {
                const category = e.currentTarget.dataset.id; // using data-* attribute
                const filteredList = menu.filter((item) => {
                    if (item.category === category)
                        return item;
                });

                if (category === "all") {
                    displayMenuItems(menu)
                }
                else {
                    displayMenuItems(filteredList);
                }
            });
        });
    }
    // intitiale load
    window.addEventListener("DOMContentLoaded", function () {
        displayMenuItems(menu); // menu has closure with this callback
        getCategories();
        addEventToFilterButton(); // we can only call it after getCategory as btns are not present in DOM initially
    });
})();


// Learned Adding dynamic DOM nodes to HTML
// Learned Filtering and data-* attribute
// Learned Domcontentloaded
// Selecting DOM nodes after they gets added to DOM by JS