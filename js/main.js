let nav_scroll = document.querySelector(".fixed-nav");
let list_scroll = document.querySelector(".nav-list__link");
let button_scroll = document.querySelector(".nav-button");

window.onscroll = function() {
    if (this.scrollY >= 100) {
        nav_scroll.classList.add("fixed-nav--white");
        list_scroll.classList.add("nav-list--black");
        button_scroll.classList.add("nav-button--black");
    } else {
        nav_scroll.classList.remove("fixed-nav--white");
        list_scroll.classList.remove("nav-list--black");
        button_scroll.classList.remove("nav-button--black");
    }
};