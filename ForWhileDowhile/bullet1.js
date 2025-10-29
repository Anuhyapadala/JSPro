let product = document.getElementById("products");
let products = ["Laptop", "Mobile", "Camera", "Shoes", "Earphones"]
for (i = 0; i < products.length; i++) {
    product.innerHTML += `<ul><li>${products[i]}</li></ul>`;
}
