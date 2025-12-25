document.addEventListener("DOMContentLoaded", () => {

    const cartPage = document.getElementById("cart-page");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];


    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
            <strong>${item.name}</strong><br>
            Couleur : ${item.color}<br>
            Taille : ${item.size}<br>
            Prix : ${item.price} €<br>
            <hr>
        `;
        cartPage.appendChild(div);
    });

});

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("cart-items");
    const totalEl = document.getElementById("cart-total");

    let cart = JSON.parse(localStorage.getItem("cart"));

    console.log("Panier chargé :", cart);

    if (!cart || cart.length === 0) {
        container.innerHTML = "<p>Votre panier est vide ❌</p>";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price;

        container.innerHTML += `
            <div>
                <p>${item.name}</p>
                <p>${item.price} €</p>
            </div>
        `;
    });

    totalEl.textContent = "Total : " + total + " €";
});

