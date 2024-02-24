 const cart = document.getElementById("cart");
 const shopCard = document.querySelectorAll(".product");

 cart.addEventListener("click", function() {
     document.querySelector(".container").innerHTML = "";
     document.querySelector("body")
 })
 //aip connection
 let productDiv = document.querySelector(".shop")
 let displayProduct = async() => {
     productDiv.innerHTML = '';
     let product = await fetch("https://fakestoreapi.com/products")
     let finalproduct = await product.json();
     finalproduct.forEach(element => {
         productDiv.innerHTML += ` <div class="product">
        <img src="${element.image}" alt="">
        <p>Trends At NZ's </p>
        <p> Price Rs.${element.price} | ${element.rating.rate}*</p>
        <h3>${element.title}</h3>
        <button> view</button>
    </div>
`
     })
 }
 displayProduct();

