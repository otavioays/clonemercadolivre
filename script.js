const productsData = [
    {
        id: 1,
        title: "Apple iPad Air M2 256GB Wi-Fi Space Gray",
        price: 6499.00,
        installments: "10x R$ 649,90",
        shipping: "Frete Grátis",
        image: "https://images.pexels.com/photos/25809226/pexels-photo-25809226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 2,
        title: "iPhone 15 Pro Max 256GB Titânio Natural",
        price: 8299.00,
        installments: "10x R$ 829,90",
        shipping: "Chega amanhã",
        image: "https://images.pexels.com/photos/22307556/pexels-photo-22307556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 3,
        title: "Kit Apple Studio Display + Magic Keyboard",
        price: 12400.00,
        installments: "12x R$ 1033,33",
        shipping: "Frete Grátis",
        image: "https://images.pexels.com/photos/14541063/pexels-photo-14541063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 4,
        title: "Smartphone Samsung Galaxy S24 Ultra 512GB",
        price: 5800.00,
        installments: "10x R$ 580,00",
        shipping: "Chega amanhã",
        image: "https://images.pexels.com/photos/7190928/pexels-photo-7190928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 5,
        title: "MacBook Pro M3 Max 14 polegadas 36GB RAM",
        price: 21000.00,
        installments: "10x R$ 2100,00",
        shipping: "Frete Grátis",
        image: "https://images.pexels.com/photos/12935040/pexels-photo-12935040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 6,
        title: "Console PlayStation 5 Slim Digital Edition",
        price: 3400.00,
        installments: "10x R$ 340,00",
        shipping: "Chega amanhã",
        image: "https://images.pexels.com/photos/17565491/pexels-photo-17565491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 7,
        title: "Fone de Ouvido Sony WH-1000XM5 Noise Cancelling",
        price: 1800.00,
        installments: "10x R$ 180,00",
        shipping: "Frete Grátis",
        image: "https://images.pexels.com/photos/34629890/pexels-photo-34629890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id: 8,
        title: "Smartwatch Apple Watch Series 9 Aluminum",
        price: 2900.00,
        installments: "10x R$ 290,00",
        shipping: "Chega amanhã",
        image: "https://images.pexels.com/photos/6214388/pexels-photo-6214388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
];

let cartCount = 0;

function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    productsData.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" class="product-img" alt="${product.title}">
            <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-price">R$ ${product.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</div>
                <div class="product-installments">${product.installments}</div>
                <div class="product-shipping">
                    <i data-lucide="chevron-right" style="width:12px"></i> ${product.shipping}
                </div>
                <button class="add-btn" onclick="addToCart(event)">Adicionar ao carrinho</button>
            </div>
        `;
        grid.appendChild(card);
    });
    lucide.createIcons();
}

function addToCart(event) {
    event.stopPropagation();
    cartCount++;
    const badge = document.getElementById('cart-count');
    badge.innerText = cartCount;
    badge.style.display = 'block';
}

document.querySelectorAll('.cat-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.cat-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const category = item.getAttribute('data-cat');
        document.querySelector('.products-header h2').innerText = `Resultados para ${category}`;
    });
});

window.onload = renderProducts;
