
let products = [
    {
        id: 1,
        name: 'HIGBY CARAMEL',
        price: 79,
        urlImg: './assets/higby.png'  
    },
    {
        id: 2,
        name: 'ELAN OFF WHITE',
        price: 109,
        urlImg: './assets/elan.png'
    },
    {
        id: 3,
        name: 'DELTA MARINE',
        price: 85,
        urlImg: './assets/delta.png'
    },
    {
        id: 4,
        name: 'CATALINA NAVI',
        price: 85,
        urlImg: './assets/catalina.png'
    },
    {
        id: 5,
        name: 'MISTRAL ALOE',
        price: 109,
        urlImg: './assets/mistral.png'
    }
      
];
let elementProductList = document.querySelector('.productList');
let elementProduct = document.querySelector('.product');

function renderProductList (){
    for ( let i = 0; i <products.length; i++){
        let elementBtn = document.createElement('button');
        elementBtn.textContent = products[i].name;
        elementBtn.classList.add('btn');
        elementBtn.addEventListener('click', function(){ renderProduct (products[i])});
        elementProductList.appendChild(elementBtn);
    }
}

function renderProduct(item){
    elementProduct.textContent = '';
    let elementProductImg = document.createElement('img');
    elementProductImg.setAttribute('src', item.urlImg);
    elementProductImg.classList.add('img-product');

    let elementProductPrice = document.createElement('p');
    elementProductPrice.textContent = item.price + '€';
    elementProductPrice.classList.add('price-product');

    let elementProductBtn = document.createElement('button');
    elementProductBtn.textContent = 'COMPRAR';
    elementProductBtn.classList.add('btn-product');
    elementProductBtn.addEventListener('click', purchase);

    elementProduct.appendChild(elementProductImg);
    elementProduct.appendChild(elementProductPrice);
    elementProduct.appendChild(elementProductBtn);
}

function purchase(){
    elementProduct.textContent = '';
    let elementPurchase = document.createElement('p');
    elementPurchase.textContent = 'GRACIAS POR TU COMPRA';
    elementProduct.appendChild(elementPurchase);
}



renderProductList();
renderProduct(products[0]);

