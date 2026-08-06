import {MENU} from "./data/data.js";

const params = new URLSearchParams(window.location.search);
const selectedCanteen = params.get("canteen");

const state = {
    canteen: selectedCanteen,
    category: "all",
    search: "",
    cart: {}
};

const CANTEENS = {
    kc: {
        name: "Krishna Canteen (KC)",
        status: "🟢 Open",
        wait: "5-10 mins"
    },

    southern: {
        name: "Southern Canteen",
        status: "🟢 Open",
        wait: "9-10 mins"
    },

    velan: {
        name: "Velan Cafe",
        status: "🟢 Open",
        wait: "3-5 mins"
    },

    vinayaka: {
        name: "Vinayaka Canteen",
        status: "🟢 Open",
        wait: "7-10 mins"
    }
};

const currentCanteen = CANTEENS[selectedCanteen];

document.getElementById("canteen-name").textContent = currentCanteen.name;

document.getElementById("canteen-status").textContent = currentCanteen.status;

document.getElementById("canteen-wait").textContent = currentCanteen.wait;

const arr = MENU.filter(m => m.canteens.includes(selectedCanteen));

document.getElementById("canteen-count").textContent =`${arr.length} Items`;


function renderMenu(menuItems)
{

    const menuGrid = document.getElementById("menu-grid");

    menuGrid.innerHTML = "";

    menuItems.forEach(item => {

        const card = document.createElement("article");
        card.className = "menu-card";

        const image = document.createElement("img");
        image.src = `images/menu/${item.image}`;
        image.alt = item.name;
        image.className = "menu-image";

        const title = document.createElement("h3");
        title.textContent = item.name;
        title.className = "menu-title";

        const price = document.createElement("p");
        price.textContent = `₹${item.price}`;
        price.className = "menu-price";

        const controls = document.createElement("div");
        controls.className = "quantity-controls";

        const minusBtn = document.createElement("button");
        minusBtn.textContent = "-";
        minusBtn.className = "minus-btn";
        minusBtn.dataset.id = item.id;

        const quantity = document.createElement("span");
        quantity.textContent = "0";
        quantity.className = "item-quantity";
        quantity.dataset.id = item.id;

        const plusBtn = document.createElement("button");
        plusBtn.textContent = "+";
        plusBtn.className = "plus-btn";
        plusBtn.dataset.id = item.id;

        controls.appendChild(minusBtn);
        controls.appendChild(quantity);
        controls.appendChild(plusBtn);

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(controls);

        menuGrid.appendChild(card);
    });

}

function updateMenu() 
{

    let filtered = MENU.filter(item=>item.canteens.includes(state.canteen));

    filtered = filtered.filter(item=>item.categories.includes(state.category)|| state.category === "all");

    filtered = filtered.filter(item=>item.name.toLowerCase().includes(state.search.toLowerCase()));

    renderMenu(filtered);

}


const categoryButtons = document.querySelectorAll("#category-filters button");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        state.category = button.dataset.category;

        categoryButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        updateMenu();

    });

});



