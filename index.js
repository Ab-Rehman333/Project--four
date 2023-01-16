const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        img: "https://source.unsplash.com/1a1Y_yVEpyc/600x500",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        Readmore: "Read More",
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        img: "https://source.unsplash.com/-9CjvlbUGhY/600x500",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        Readmore: "Read More",
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        img: "https://source.unsplash.com/4FujjkcI40g/600x500",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        Readmore: "Read More",
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        img: "https://source.unsplash.com/1a1Y_yVEpyc/600x500",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        Readmore: "Read More",
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        img: "https://source.unsplash.com/-9CjvlbUGhY/600x500",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        Readmore: "Read More",
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        img: "https://source.unsplash.com/4FujjkcI40g/600x500",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        Readmore: "Read More",
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        img: "https://source.unsplash.com/1a1Y_yVEpyc/600x500",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        Readmore: "Read More",
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        img: "https://source.unsplash.com/-9CjvlbUGhY/600x500",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        Readmore: "Read More",
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        img: "https://source.unsplash.com/4FujjkcI40g/600x500",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        Readmore: "Read More",
    },
];

// getting main section of the items
const getAllItems = document.querySelector(".Allcontent");
const getBtnContainer = document.querySelector(".filter-box");

window.addEventListener("DOMContentLoaded", () => {
    const addingButtonsCateggory = menu.reduce(
        (values, items) => {
            if (!values.includes(items.category)) {
                values.push(items.category);
            }
            return values;
        },
        ["All"]
    );
    const getBtnCategory = addingButtonsCateggory
        .map((btn) => {
            return `
    <button class="filter-btn All" data-id=${btn}>${btn}</button>
    `;
        })
        .join("");

    getBtnContainer.innerHTML = getBtnCategory;
    const getButtons = document.querySelectorAll(".filter-btn");

    // filtering the items
    getButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const filterMethod = e.target.dataset.id;
            const menuItems = menu.filter((filterM) => {
                if (filterM.category === filterMethod) {
                    return filterM;
                }
            });
            if (filterMethod === "All") {
                displayItemUI(menu);
            } else {
                displayItemUI(menuItems);
            }
        });
    });

    displayItemUI(menu);
});
function displayItemUI(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `  <div class="content">
                     <div class="img-card iCard-style1">
                       <div class="card-content">
                         <div class="card-image">
                          <span class="card-title">${item.title}</span>
                           <img src=${item.img} class="image" alt=${item.title} />
                       </div>
                  <div class="card-text">
                   ${item.desc}
                  </div>
                 </div>
                  <div class="card-link">
                   <a href="#" title="Read Full" id="last">${item.Readmore}</a>
                 </div>
                </div>
             </div>`;
    });
    displayMenu = displayMenu.join("");
    getAllItems.innerHTML = displayMenu;
}
