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

        sectionProducts.innerHTML += `<aside class="product" data-id="${product.id}">
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
    
    btnAddCart.forEach((button) => {   
        
        button.addEventListener("click", (event) => {
            
            const sectionCart = document.querySelector(".carts");
            const cartEmpty = document.querySelector(".cartEmpty");
            const productElement = event.target.closest(".product");
            const textProduct = productElement.querySelector(".text-title").textContent;
            const priceProduct = productElement.querySelector(".price").textContent;

            if (cartEmpty) {
                cartEmpty.style.display = "none";
            }

            sectionCart.innerHTML += `
                <div class="productInsideCart">
                  <div class="details">
                    <p>${textProduct}</p>
                
                    <div class="detailsProduct">
                      <p class="quantity">1</p>
                      <p class="price">${priceProduct}</p>
                      <p class="priceTotal">2</p>
                    </div>
                  </div>
                
                  <div class="icon">
                    <i class="fa-regular fa-circle-xmark"></i>
                  </div>
                </div>
            </aside>`;
            console.log(event.target.parentNode.children.classList);
        });
    });
}

function cart() {

    const sectionCarts = document.querySelector(".carts");

    sectionCarts.innerHTML = `<aside class="cart cartEmpty">
        <h2>Your Cart <span class="sizeCart">0</span></h2>
        <img src="../assets/images/illustration-empty-cart.svg" alt="" class="imgcart">
        <p class="text-cart">Your added items will appear here</p>
    </aside>`
}

renderProducts();
addToCart();
cart();