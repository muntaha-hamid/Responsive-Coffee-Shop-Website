let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    cartItems.classList.remove('active');
    searchBar.classList.remove('active');
}


let cartItems=document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick=()=>{
cartItems.classList.toggle('active');
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
}

let searchBar=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
searchBar.classList.toggle('active');
    navbar.classList.remove('active');
    cartItems.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    cartItems.classList.remove('active');
    searchBar.classList.remove('active');
}