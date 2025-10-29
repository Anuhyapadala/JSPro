let pro = document.getElementById("card");
let products = [

    { name: "Shirt", price: 500, category: "Clothing" },
    { name: "Watch", price: 1200, category: "Accessories" }
]
for (let i = 0; i < products.length; i++) {
    pro.innerHTML += `
        <div class="product-card">
          <h3>${products[i].name}</h3>
          <p><strong>Price:</strong> ₹${products[i].price}</p>
          <p><strong>Category:</strong> ${products[i].category}</p>
        </div>
      `;
}
