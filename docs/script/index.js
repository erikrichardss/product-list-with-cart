const products = [
    {
        id: 1,
        textTitle: "Waffle",
        text: "Waffle with Berries",
        imgMobile: "../assets/images/image-waffle-mobile.jpg",
        imgDesktop: "../assets/images/image-waffle-desktop.jpg",
        price: 6.50
    },
    {
        id: 2,
        textTitle: "Crème Brûlée",
        text: "Vanilla Bean Crème Brûlée",
        imgMobile: "../assets/images/image-creme-brulee-mobile.jpg",
        imgDesktop: "../assets/images/image-creme-brulee-desktop.jpg",
        price: 7.00
    },
    {
        id: 3,
        textTitle: "Macaron",
        text: "Macaron Mix of Five",
        imgMobile: "../assets/images/image-macaron-mobile.jpg",
        imgDesktop: "../assets/images/image-macaron-desktop.jpg",
        price: 8.00
    },
    {
        id: 4,
        textTitle: "Classic Tiramisu",
        text: "Classic Tiramisu",
        imgMobile: "../assets/images/image-tiramisu-mobile.jpg",
        imgDesktop: "../assets/images/image-tiramisu-desktop.jpg",
        price: 5.50
    },
    {
        id: 5,
        textTitle: "Baklava",
        text: "Pistachio Baklava",
        imgMobile: "../assets/images/image-baklava-mobile.jpg",
        imgDesktop: "../assets/images/image-baklava-desktop.jpg",
        price: 4.00
    },
    {
        id: 6,
        textTitle: "Pie",
        text: "Lemon Meringue Pie",
        imgMobile: "../assets/images/image-meringue-mobile.jpg",
        imgDesktop: "../assets/images/image-meringue-desktop.jpg",
        price: 5.00
    },
    {
        id: 7,
        textTitle: "Cake",
        text: "Red Velvet Cake",
        imgMobile: "../assets/images/image-cake-mobile.jpg",
        imgDesktop: "../assets/images/image-cake-desktop.jpg",
        price: 4.50
    },
    {
        id: 8,
        textTitle: "Brownie",
        text: "WSalted Caramel Browniee",
        imgMobile: "../assets/images/image-brownie-mobile.jpg",
        imgDesktop: "../assets/images/image-brownie-desktop.jpg",
        price: 4.50
    },
    {
        id: 9,
        textTitle: "Panna Cotta",
        text: "Vanilla Panna Cotta",
        imgMobile: "../assets/images/image-panna-cotta-mobile.jpg",
        imgDesktop: "../assets/images/image-panna-cotta-desktop.jpg",
        price: 6.50
    },

];

function renderProducts() {

    const sectionProducts = document.querySelector(".products");

    products.forEach((product) => {

        sectionProducts.innerHTML += `
        <aside class="product" data-id="${product.id}">
            <picture>
                <source media="(max-width: 770px)" srcset="${product.imgMobile}">
                <img src="${product.imgDesktop}" alt="">
            </picture>

            <button class="btn-cart">
                <img src="../assets/images/icon-add-to-cart.svg" alt="">
                Add to cart
            </button>

            <p class="text-title">${product.textTitle}</p>
            <p>${product.text}</p>
            <p class="price">${product.price.toFixed(2)}</p>
        </aside>`;
    });
}

function addToCart() {

    const btnAddCart = document.querySelectorAll(".btn-cart");
    let quantity = 0;
    let total = 0;

    btnAddCart.forEach((button) => {

        button.addEventListener("click", (event) => {

            quantity++

            const cartItems = document.querySelector(".cartItems");
            const productElement = event.target.closest(".product");
            const textProduct = productElement.querySelector(".text-title").textContent;
            const priceProduct = parseFloat(productElement.querySelector(".price").textContent);
            const sizeCart = document.querySelector(".sizeCart");

            sizeCart.textContent = quantity;

            if (quantity > 0) {
                const cartEmpty = document.querySelector(".cartEmpty");
                const containerTotal = document.querySelector(".containerTotal");
                const totalPrice = document.querySelector(".totalPrice");

                total += priceProduct;

                cartEmpty.style.display = "none";
                containerTotal.style.display = "block";

                totalPrice.textContent = "$"+total.toFixed(2);
            }

            cartItems.innerHTML += `
                <div class="productInsideCart">
                  <div class="details">
                    <p>${textProduct}</p>
                
                    <div class="detailsProduct">
                      <p class="quantity">1</p>
                      <p class="price">${priceProduct.toFixed(2)}</p>
                      <p class="priceTotal">${priceProduct*quantity}</p>
                    </div>
                  </div>
                
                  <div class="icon">
                    <i class="fa-regular fa-circle-xmark removeProductCart"></i>
                  </div>
                </div>`;
            // console.log(event.target.parentNode.children.classList);
        });
    });
}

function removeProduct() {

    const cartItems = document.querySelector(".cartItems");
    
    cartItems.addEventListener("click", (event) => {
        
        if (event.target.classList.contains("removeProductCart")) {
            
            const product = event.target.closest(".productInsideCart");
            
            const priceProduct = parseFloat(document.querySelector(".price").textContent);

            const sizeCart = document.querySelector(".sizeCart");
            const totalPrice = document.querySelector(".totalPrice");
            
            let quantity = parseInt(sizeCart.textContent);
            let total = parseFloat(totalPrice.textContent);

            total -= priceProduct;
            quantity--;

            if (quantity < 0) quantity = 0;
            if (total < 0) total = 0;

            sizeCart.textContent = quantity;
            totalPrice.textContent = `$${total.toFixed(2)}`;

            product.remove();

            if (quantity === 0) {
                const cartEmpty = document.querySelector(".cartEmpty");
                const containerTotal = document.querySelector(".containerTotal");

                cartEmpty.style.display = "block";
                containerTotal.style.display = "none";
            }
        }
    });
}

renderProducts();
addToCart();
removeProduct();