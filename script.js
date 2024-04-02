const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector (".search-form");

searchIcon.addEventListener ('click', () => {
    searchForm.classList.toggle("active");
    cartItemsContainer.classList.remove("active");
    navBar.classList.remove("active");
});

const cartIcon = document.querySelector(".cart-icon");
const cartItemsContainer = document.querySelector (".cart-items-container");

cartIcon.addEventListener ('click', () => {
    cartItemsContainer.classList.toggle("active");
    searchForm.classList.remove("active");
    navBar.classList.remove("active");
});


const menuIcon = document.querySelector (".menu-icon");
const navBar = document.querySelector (".navbar");

menuIcon.addEventListener ('click', () => {
    navBar.classList.toggle("active");
    cartItemsContainer.classList.remove("active");
    searchForm.classList.remove("active");
});

window.onscroll= ()=> {
    navBar.classList.remove("active");
    cartItemsContainer.classList.remove("active");
    searchForm.classList.remove("active");
}