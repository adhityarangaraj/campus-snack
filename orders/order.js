const orders = JSON.parse(localStorage.getItem("orders")) || [];

const ordersContainer = document.getElementById("orders-container");

if (orders.length === 0) 
{
    ordersContainer.innerHTML = `
        <div class="empty-orders">
            <h2>No orders yet</h2>
            <p>Your completed orders will appear here.</p>
        </div>
    `;
}
else 
{
    orders.forEach(order => {

        const card = document.createElement("article");
        card.className = "order-card";

        const heading = document.createElement("div");
        heading.className = "order-heading";

        const canteen = document.createElement("h2");
        canteen.textContent = order.canteen;

        const token = document.createElement("p");
        token.textContent = `Token: ${order.token}`;

        heading.appendChild(canteen);
        heading.appendChild(token);

        const date = document.createElement("p");
        date.textContent = `${order.date} • ${order.time}`;

        const items = document.createElement("div");
        items.className = "order-items";

        order.items.forEach(item => {

            const itemRow = document.createElement("p");

           const itemName = document.createElement("span");
           itemName.textContent = `${item.quantity} * ${item.name}`;

           const itemPrice = document.createElement("span");
           itemPrice.textContent = `₹${item.price * item.quantity}`;

           itemRow.appendChild(itemName);
           itemRow.appendChild(itemPrice);
           items.appendChild(itemRow);

        });

        const total = document.createElement("p");
        total.className = "order-total";
        total.textContent = `Total: ₹${order.total}`;

        card.appendChild(heading);
        card.appendChild(date);
        card.appendChild(items);
        card.appendChild(total);

        ordersContainer.appendChild(card);
    });
}