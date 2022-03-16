const addItem = () => {
    const inputFiled = document.getElementById('input-filed')
    const inputText = inputFiled.value;
    displayProducts(inputText)
    setItem(inputText)
    inputFiled.value = '';
}

const displayProducts = names => {
    const products = document.getElementById('products')
    const li = document.createElement('li')
    li.innerText = names;
    products.appendChild(li)
}

const getProduct = () => {
    const item = localStorage.getItem('item')
    let myObj;
    if (item) {
        myObj = JSON.parse(item)
    }
    else {
        myObj = {};
    }
    return myObj;
}
const setItem = name => {
    const item = getProduct();
    item[name] = 1;
    const itemstringified = JSON.stringify(item)
    localStorage.setItem('item', itemstringified)
}