const products = [
    {id: 1, nome: "Waffle", price: 6.50},
    {id: 2, nome: "Crème Brûlée", price: 7.00},
    {id: 3, nome: "Macaron", price: 8.00},
    {id: 4, nome: "Classic Tiramisu", price: 5.50},
    {id: 5, nome: "Baklava", price: 4.00},
    {id: 6, nome: "Pie", price: 5.00},
    {id: 7, nome: "Cake", price: 4.50},
    {id: 8, nome: "WSalted Caramel Browniee", price: 4.50},
    {id: 9, nome: "Panna Cotta", price: 6.50},
]

let cart = [];

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("btn-cart")) {
        const productElement = event.target.closest(".product");
        const id = Number(products.dataset.id);
        const product = products.find(p => p.id === id);
        const existing = cart.find(p => p.id === id);

        if (existing) {
            existing.quantidade++;
        } else {
            cart.push({ ...product, quantidade: 1});
        }

        
    }

});

function render() {

    const list = document.querySelector(".cart");
    list.innerHTML = "";

}