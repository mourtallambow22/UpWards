// ===============================
// PANIER SIMPLE - UpWards
// ===============================

// compteur panier
let cartCount = 0;

// éléments DOM
const cartBadge = document.getElementById("cart-count");
const buyButtons = document.querySelectorAll(".buy-btn");
const cartIcon = document.querySelector(".cart-icon");

// sécurité si éléments absents
if (cartBadge && buyButtons.length > 0) {

    buyButtons.forEach(button => {
        button.addEventListener("click", () => {

            // incrément panier
            cartCount++;
            cartBadge.textContent = cartCount;

            // feedback bouton
            const originalText = button.textContent;
            button.textContent = "Ajouté ✓";
            button.disabled = true;

            // animation panier
            if (cartIcon) {
                cartIcon.classList.add("added");
                setTimeout(() => {
                    cartIcon.classList.remove("added");
                }, 300);
            }

            // reset bouton
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 1200);
        });
    });

} else {
    console.warn("Panier ou boutons non trouvés dans le DOM");
}

// ===============================
// OPTIONS PRODUIT : COULEUR & TAILLE
// ===============================

// COULEURS
document.querySelectorAll('.color').forEach(color => {
    color.addEventListener('click', () => {

        // enlever active sur les autres couleurs du même produit
        color.parentElement.querySelectorAll('.color')
            .forEach(c => c.classList.remove('active'));

        // activer la couleur cliquée
        color.classList.add('active');
    });
});

// TAILLES
document.querySelectorAll('.size').forEach(size => {
    size.addEventListener('click', () => {

        // enlever active sur les autres tailles du même produit
        size.parentElement.querySelectorAll('.size')
            .forEach(s => s.classList.remove('active'));

        // activer la taille cliquée
        size.classList.add('active');
    });
});

