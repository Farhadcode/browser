
const displayLocalStorageCart = () => {
    const cart = getCard();
    for (const name in cart) {
        displayProduct(name);

    }
}


const addItems = () => {
    const productNameField = document.getElementById('produt-name');
    const name = productNameField.value;
    if (!name) {
        return;
    }
    //display in the UI 

    displayProduct(name);
    // add to local storage ;
    addProductToCart(name)

    productNameField.value = '';
}

const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCard = () => {

    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = name => {
    const cart = getCard();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }

    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}
displayLocalStorageCart();