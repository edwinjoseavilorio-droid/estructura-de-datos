const products = [
    { code: 'A01', name: 'Producto 1', price: 10, description: 'Descripción del producto 1' },
    { code: 'A02', name: 'Producto 2', price: 20, description: 'Descripción del producto 2' },
    { code: 'A03', name: 'Producto 3', price: 30, description: 'Descripción del producto 3' },
    { code: 'B01', name: 'Producto 4', price: 12, description: 'Descripción del producto 4' }
];

const sortState = {
    key: 'code',
    asc: true
};

function formatPrice(value) {
    return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(value);
}

function renderTable() {
    const tbody = document.querySelector('#products-table tbody');
    if (!tbody) return;

    const sorted = [...products].sort((a, b) => {
        const key = sortState.key;
        if (typeof a[key] === 'string') {
            return sortState.asc
                ? a[key].localeCompare(b[key], 'es', { numeric: true })
                : b[key].localeCompare(a[key], 'es', { numeric: true });
        }
        return sortState.asc ? a[key] - b[key] : b[key] - a[key];
    });

    tbody.innerHTML = '';
    sorted.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${p.code}</td><td>${p.name}</td><td>${formatPrice(p.price)}</td>`;
        tbody.appendChild(tr);
    });
}

function renderCards() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('product-card');
        productCard.setAttribute('name', product.name);
        productCard.setAttribute('price', formatPrice(product.price));
        productCard.setAttribute('description', product.description);
        productList.appendChild(productCard);
    });
}

function initSorting() {
    const headers = document.querySelectorAll('#products-table th[data-key]');
    headers.forEach(th => {
        th.style.cursor = 'pointer';
        th.addEventListener('click', () => {
            const key = th.dataset.key;
            if (sortState.key === key) {
                sortState.asc = !sortState.asc;
            } else {
                sortState.key = key;
                sortState.asc = true;
            }
            renderTable();
        });
    });
}

window.onload = () => {
    renderTable();
    renderCards();
    initSorting();
};
