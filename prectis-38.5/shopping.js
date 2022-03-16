const addItem = () => {
    const searchText = document.getElementById('search-text');
    const name = searchText.value;
    if (!name) { return }
    displayProduct(name)
    addProductToCart(name)
    searchText.value = '';
}

const displayProduct = product => {
    const listItem = document.getElementById('list-item')
    const li = document.createElement('li')
    li.innerText = product;
    listItem.appendChild(li)
}


const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {}
    }
    return cartObj
}

const getItem = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {}

    }
    return cartObj
}


const addProductToCart = name => {
    const cart = getItem()
    cart[name] = 1;
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}



































/*
const getCart = () => {
    const cart = localStorage.getItem('cart')
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart)
    }
    else {
        cartObj = {};
    }
    return cartObj;

}
const addProductToCart = name => {
    const cart = getCart()
    cart[name] = 1;
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
} */