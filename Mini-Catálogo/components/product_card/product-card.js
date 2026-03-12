class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const name = this.getAttribute('name');
        const price = this.getAttribute('price');
        const description = this.getAttribute('description');

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background: #fff;
                    border-radius: 10px;
                    padding: 16px;
                    margin: 10px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .card h3 {
                    font-size: 1.3em;
                    margin-bottom: 8px;
                    color: #333;
                }
                .card p {
                    font-size: 0.95em;
                    color: #555;
                    margin: 6px 0;
                }
                .card .price {
                    font-weight: bold;
                    color: #667eea;
                    font-size: 1.2em;
                }
                button {
                    background: #667eea;
                    color: white;
                    border: none;
                    padding: 8px 12px;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background 0.2s ease;
                }
                button:hover {
                    background: #5568d3;
                }
            </style>
            <div class="card">
                <h3>${name}</h3>
                <p>${description}</p>
                <p class="price">${price}</p>
                <button>Comprar</button>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);