'use strict'

// Hambuger
const $navbar = document.querySelector("[data-navbar]");
const $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));

// Header scroll state
const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});


// Add active class for Favorite 
const $toggleFavorites = document.querySelectorAll("[data-toggle-btn]");

$toggleFavorites.forEach($toggleFavorite => {
    $toggleFavorite.addEventListener("click", () => {
        $toggleFavorite.classList.toggle("active");
    });
});