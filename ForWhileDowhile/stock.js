let products = document.getElementById("product");
// let stock
let array = [

    { name: "Keyboard", stock: 3 },
    { name: "Mouse", stock: 0 },
    { name: "Charger", stock: 2 }
]
for (let i = 0; i < array.length; i++) {
    if (array[i].stock > 0) {
        products.innerHTML += `<p>name: ${array[i].name}</p>,
                         <p>stock: ${array[i].stock}</p>`
    }

}