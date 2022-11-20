// Create the const-variable
const theproducts = document.querySelector(".products"); 

// Wordpress Products API list
const url = "https://rainydays.bavadonoroff.com/wp-json/wc/store/products"; 

// Bring the products
async function getProduct() {
    // Using fetch() API to retrive the products
    const response = await fetch(url); 
    const results = await response.json(); 
    // Loop for each product
    for (let i = 0; i < results.length; i++) {
        theproducts.innerHTML += `
            <div class="shop-box-img">
            <a href="product_description.html?id=${results[i].id}"><img id="tents-image"src="${results[i].images[0].src}">${results[i].name}</a>
            </div>
        `;
    }
}

getProduct();