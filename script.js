var burgerBtn = document.getElementById('burger-btn');
var burger = document.getElementById('burger');
var menu = document.getElementById('menu');

burger.style.right = '-200px'

burgerBtn.onclick = function () {
    if (burger.style.right == '-200px') {
        burger.style.right = '0px';
        menu.className = 'fa-solid fa-xmark fa-xl';
    }
    else {
        burger.style.right = '-200px'
        menu.className = 'fa-solid fa-bars fa-xl';
    }
}