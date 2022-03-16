const addItem = () => {
    const nameFiled = document.getElementById('product-name');
    const name = nameFiled.value;
    nameFiled.value = '';
    displayProducts(name)

    addProductToCadt(name)
}


const displayProducts = product => {

    const ul = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = product;
    ul.appendChild(li)
}


const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {};
    }
    return cartObj
}


const addProductToCadt = name => {
    const cart = getCart()
    cart[name] = 1;
    const cartStringfied = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfied)
}