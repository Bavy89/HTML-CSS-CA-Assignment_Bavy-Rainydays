const theproducts = document.querySelector(".products"); 

const url = "https://rainydays.bavadonoroff.com/wp-json/wc/store/products"; 

async function getProduct() {
    const response = await fetch(url); 
    const results = await response.json(); 

    for (let i = 0; i < results.length; i++) {
        
        theproducts.innerHTML += `
            <div class="shop-box-img">
            <a href="product_description.html?id=${results[i].id}"><img id="tents-image"src="${results[i].images[0].src}">${results[i].name}<br>${results[i].prices.price}</a>
            </div>
        `;
    }

    console.log(results);
}

getProduct();
