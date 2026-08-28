const productsData = [
    { id:1,title:"Apple iPad Air M2 256GB Wi-Fi Space Gray",price:6499.00,installments:"10x R$ 649,90",shipping:"Frete Grátis",image:"https://images.pexels.com/photos/25809226/pexels-photo-25809226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { id:2,title:"iPhone 15 Pro Max 256GB Titânio Natural",price:8299.00,installments:"10x R$ 829,90",shipping:"Chega amanhã",image:"https://images.pexels.com/photos/22307556/pexels-photo-22307556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { id:3,title:"Kit Apple Studio Display + Magic Keyboard",price:12400.00,installments:"12x R$ 1033,33",shipping:"Frete Grátis",image:"https://images.pexels.com/photos/14541063/pexels-photo-14541063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { id:4,title:"Smartphone Samsung Galaxy S24 Ultra 512GB",price:5800.00,installments:"10x R$ 580,00",shipping:"Chega amanhã",image:"https://images.pexels.com/photos/7190928/pexels-photo-7190928.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { id:5,title:"MacBook Pro M3 Max 14 polegadas 36GB RAM",price:21000.00,installments:"10x R$ 2100,00",shipping:"Frete Grátis",image:"https://images.pexels.com/photos/12935040/pexels-photo-12935040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { id:6,title:"Console PlayStation 5 Slim Digital Edition",price:3400.00,installments:"10x R$ 340,00",shipping:"Chega amanhã",image:"https://images.pexels.com/photos/17565491/pexels-photo-17565491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { id:7,title:"Fone de Ouvido Sony WH-1000XM5 Noise Cancelling",price:1800.00,installments:"10x R$ 180,00",shipping:"Frete Grátis",image:"https://images.pexels.com/photos/34629890/pexels-photo-34629890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { id:8,title:"Smartwatch Apple Watch Series 9 Aluminum",price:2900.00,installments:"10x R$ 290,00",shipping:"Chega amanhã",image:"https://images.pexels.com/photos/6214388/pexels-photo-6214388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }
];

const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id')) || 1;
const product = productsData.find(p => p.id === id) || productsData[0];

const formatPrice = value => value.toLocaleString('pt-BR', { style:'currency', currency:'BRL', minimumFractionDigits:2 });

document.title = `${product.title} | Mercado Livre Clone`;
document.getElementById('product-title').textContent = product.title;
document.getElementById('breadcrumb-product').textContent = product.title;
document.getElementById('product-main-image').src = product.image;
document.getElementById('product-main-image').alt = product.title;
document.getElementById('product-price').textContent = formatPrice(product.price);
document.getElementById('product-installments').textContent = product.installments;
document.getElementById('product-description').textContent = `${product.title} em uma página demonstrativa inspirada em marketplace, com galeria, opções de compra, parcelamento e informações do vendedor.`;

const thumbs = document.getElementById('product-thumbs');
const variants = [product.image, product.image, product.image, product.image];
variants.forEach((img, index) => {
    const btn = document.createElement('button');
    btn.className = `thumb-btn${index===0?' active':''}`;
    btn.innerHTML = `<img src="${img}" alt="Miniatura ${index+1}">`;
    btn.addEventListener('click', () => {
        document.querySelectorAll('.thumb-btn').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('product-main-image').src = img;
    });
    thumbs.appendChild(btn);
});

const variantOptions = document.getElementById('variant-options');
[product.image, product.image].forEach((img, index) => {
    const btn = document.createElement('button');
    btn.className = `variant-option${index===0?' active':''}`;
    btn.innerHTML = `<img src="${img}" alt="Variação ${index+1}">`;
    btn.addEventListener('click', () => {
        document.querySelectorAll('.variant-option').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
    });
    variantOptions.appendChild(btn);
});

document.getElementById('product-add-cart').addEventListener('click', () => {
    const btn = document.getElementById('product-add-cart');
    btn.textContent = 'Adicionado ao carrinho';
    setTimeout(() => {
        btn.innerHTML = '<i data-lucide="shopping-cart"></i> Adicionar ao carrinho';
        lucide.createIcons();
    }, 1600);
});

lucide.createIcons();
