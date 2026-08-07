import {MENU} from "./data/data.js";

const params = new URLSearchParams(window.location.search);
const selectedCanteen = params.get("canteen");

const state = {
    canteen: selectedCanteen,
    category: "all",
    search: "",
    cart: {},
    pinned: false,
    sort:"default"
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

const mainContent = document.getElementById("main-content");

function renderMenu(menuItems)
{

    const menuGrid = document.getElementById("menu-grid");

    menuGrid.innerHTML = "";

    if (menuItems.length === 0) 
    {
        menuGrid.innerHTML = `
            <div class="empty-menu">
                <h2>🔍 No items found</h2>
                <p>Try another search.</p>
            </div>`;

        return;
    }

    menuItems.forEach(item => {

        const card = document.createElement("article");
        card.className = "menu-card";

        const image = document.createElement("img");
        image.src = `images/${item.image}`;
        image.alt = item.name;

        image.onerror = () => {
            image.onerror = null;
            image.src = "images/placeholder.png";
        };

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

        minusBtn.addEventListener("click", () => {

            if (!state.cart[item.id]) 
                return;

            state.cart[item.id]--;

            if (state.cart[item.id] === 0) 
                delete state.cart[item.id];
            
            updateMenu();

        });

        const quantity = document.createElement("span");
        const qty = state.cart[item.id] || 0;
        quantity.textContent = qty;
        quantity.className = "item-quantity";
        quantity.dataset.id = item.id;

        if (qty > 0) 
            card.classList.add("selected");
        else 
            card.classList.remove("selected");


        const plusBtn = document.createElement("button");
        plusBtn.textContent = "+";
        plusBtn.className = "plus-btn";
        plusBtn.dataset.id = item.id;

        plusBtn.addEventListener("click", () => {

            if (state.cart[item.id]) 
                state.cart[item.id]++;
            else 
                state.cart[item.id] = 1;
            
            updateMenu();

        });

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

    if (state.sort === "low-high") 
        filtered.sort((a, b) => a.price - b.price);

    else if (state.sort === "high-low") 
        filtered.sort((a, b) => b.price - a.price);

    renderMenu(filtered);
    updateFloatingCart();

    let cartSidebar=document.querySelector("#cart-sidebar");

    if (!cartSidebar.hidden)
        renderCart();
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

function getTotalItems() 
{

    let total = 0;

    for (const qty of Object.values(state.cart)) 
    {
        total += qty;
    }

    return total;
}

function getGrandTotal() 
{

    let total = 0;

    MENU.forEach(item => {

        const qty = state.cart[item.id] || 0;

        total += qty * item.price;

    });

    return total;

}

function updateFloatingCart() 
{

    const floatingCart = document.getElementById("floating-cart");

    const totalItems = getTotalItems();

    if(totalItems === 0) 
    {
        floatingCart.hidden = true;
        return;
    }

    floatingCart.hidden = false;

    document.getElementById("floating-cart-count").textContent =`${totalItems} Items`;

    document.getElementById("floating-cart-total").textContent =`₹${getGrandTotal()}`;

}

const openCartBtn = document.querySelector("#open-cart-btn");
const closeCartBtn = document.querySelector("#close-cart-btn");
const cartSidebar = document.querySelector("#cart-sidebar");

openCartBtn.addEventListener("click", () => {

    cartSidebar.hidden = false;
    mainContent.classList.add("cart-open");
    renderCart();

});

closeCartBtn.addEventListener("click", () => {

    if (state.pinned)
        return;

    cartSidebar.hidden = true;
    mainContent.classList.remove("cart-open");

});

function renderCart() 
{

    const cartItems = document.getElementById("cart-items");
    const emptyState = document.getElementById("cart-empty-state");

    cartItems.innerHTML = "";

    if (Object.keys(state.cart).length === 0)
        emptyState.hidden = false;

    else 
    {
        emptyState.hidden = true;

        for (const [id, qty] of Object.entries(state.cart)) 
        {

            const item = MENU.find(menuItem => menuItem.id === id);

            const row = document.createElement("div");
            row.className = "cart-item";

            const name = document.createElement("h4");
            name.textContent = item.name;
            name.className = "cart-name";

            const price = document.createElement("p");
            price.textContent = `₹${item.price}`;
            price.className = "cart-price";

            const controls = document.createElement("div");
            controls.className = "cart-controls";

            const minusBtn = document.createElement("button");
            minusBtn.textContent = "-";

            const quantity = document.createElement("span");
            quantity.textContent = qty;

            const plusBtn = document.createElement("button");
            plusBtn.textContent = "+";

            minusBtn.addEventListener("click", () => {

                state.cart[id]--;

                if(state.cart[id] === 0) 
                {
                    delete state.cart[id];
                }

                updateMenu();
                renderCart();

            });

            plusBtn.addEventListener("click", () => {

                state.cart[id]++;

                updateMenu();
                renderCart();

            });

            controls.appendChild(minusBtn);
            controls.appendChild(quantity);
            controls.appendChild(plusBtn);

            row.appendChild(name);
            row.appendChild(price);
            row.appendChild(controls);

            cartItems.appendChild(row);

        }

    }

    document.getElementById("cart-total-items").textContent=getTotalItems();
    document.getElementById("cart-grand-total").textContent =`₹${getGrandTotal()}`;

}

function checkout() 
{

    if (Object.keys(state.cart).length === 0) 
    {
        alert("🛒 Your cart is empty");
        return;
    }

    const token = Math.floor(Math.random() * 900) + 100;
    state.cart = {};

    updateMenu();
    cartSidebar.hidden = true;
    mainContent.classList.remove("cart-open");

    showTokenModal(token);

}

function showTokenModal(token) 
{
    const current = CANTEENS[state.canteen];

    document.getElementById("token-number").textContent =`Token #${token}`;

    document.getElementById("token-canteen").textContent=current.name;

    document.getElementById("token-wait").textContent=current.wait;

    document.getElementById("success-modal").hidden = false;

    const now = new Date();

    document.getElementById("order-time").textContent =now.toLocaleTimeString([], {hour: "2-digit",minute: "2-digit"});

    state.search = "";
}

const checkoutBtn = document.querySelector("#checkout-btn");
const homeBtn = document.querySelector("#home-btn");

checkoutBtn.addEventListener("click", checkout);

homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", () => {

    state.search = searchInput.value.toLowerCase();

    updateMenu();

});


const pinBtn = document.querySelector("#pin-cart-btn");

pinBtn.addEventListener("click", () => {

    state.pinned = !state.pinned;

    cartSidebar.classList.toggle("pinned", state.pinned);

    pinBtn.textContent = state.pinned? "📌 Unpin Cart": "📌 Pin Cart";

});

const sortLowBtn = document.querySelector("#sort-low");
const sortHighBtn = document.querySelector("#sort-high");

sortLowBtn.addEventListener("click", () => {

    if (state.sort === "low-high") 
    {
        state.sort = "default";
        sortLowBtn.classList.remove("active");
    }

    else 
    {
        state.sort = "low-high";
        sortLowBtn.classList.add("active");
        sortHighBtn.classList.remove("active");
    }

    updateMenu();

});

sortHighBtn.addEventListener("click", () => {

    if (state.sort === "high-low") 
    {
        state.sort = "default";
        sortHighBtn.classList.remove("active");
    }

    else 
    {
        state.sort = "high-low";
        sortHighBtn.classList.add("active");
        sortLowBtn.classList.remove("active");
    }

    updateMenu();

});


updateMenu();




