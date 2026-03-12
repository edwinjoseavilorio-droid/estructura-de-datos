const products = [
    { name: "Producto 1", price: "$10", description: "Descripción del producto 1" },
    { name: "Producto 2", price: "$20", description: "Descripción del producto 2" },
    { name: "Producto 3", price: "$30", description: "Descripción del producto 3" },
];

function loadProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('product-card');
        productCard.setAttribute('name', product.name);
        productCard.setAttribute('price', product.price);
        productCard.setAttribute('description', product.description);
        productList.appendChild(productCard);
    });
}

window.onload = loadProducts;
