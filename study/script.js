let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
}
let cart = document.querySelector('.cart');
let closeCart = document.querySelector("#close-cart")

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    login.classList.remove('active');
}
document.querySelector('#close-cart').onclick = () => {
    cart.classList.remove('active');
    search.classList.remove('active');
    login.classList.remove('active');
}
let login = document.querySelector('.user')

document.querySelector('#login1').onclick = () => {
    login.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}
let navbar = document.querySelector('.navmenu ')

document.querySelector('#menu-icon').onclick = () => {
    navmenu.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
}

function addToCart(id) {
    const product = document.getElementById(id).parentElement
    const img = product.childNodes[3].src
    const text = product.childNodes[5].innerHTML
    const text2 = product.childNodes[7].innerHTML
    const price = product.childNodes[9].innerText
    const gender = document.createElement("h4")
    gender.innerHTML = text
    const titlei = document.createElement("h3")
    titlei.innerHTML = text2
    const cartPrice = document.createElement('div')
    cartPrice.innerHTML = price
    const cartImg = document.createElement('img')
    cartImg.src = img
    const textDiv = document.createElement('div')
    textDiv.setAttribute('class', 'text')
    textDiv.append(gender, titlei, cartPrice)
    const trash = document.createElement('i')
    trash.setAttribute('class', 'bx bx-trash')
    trash.setAttribute('onclick', 'parentElement.remove()')

    const textBox = document.createElement('div')
    textBox.setAttribute('class', 'box')
    textBox.append(cartImg, textDiv, trash)
    cartId.append(textBox)

}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)

} else {
    ready();
}
function ready() {
    let removeCartButtons = document.getElementsByClassName('bx-trash')
    console.log(removeCartButtons)
    for (let i = 0; i < removeCartButtons.length; i++) {
        let button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    let quantityInputs = document.getElementsByClassName('cart-quantity')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    let addCart = document.getElementsByClassName('bx-shopping-bag')
    for (let i = 0; i < addCart.length; i++) {
        let button = addCart[i]
        button.addEventListener("click", addCartClicked)
    }
}
function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatetotal();
}









