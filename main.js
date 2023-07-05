const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("hide");
    navContainer.classList.toggle("active");
})


const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");
const main = document.querySelector(".main");
const menuIcon = document.querySelector(".menu-icon-container .menu-icon");
const linkClose = document.querySelector(".menu-icon-container .link-close");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");   
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");   
})

menuIcon.addEventListener("click", () => {
    main.classList.toggle("hide");
    main.classList.toggle("show");
})

linkClose.addEventListener("click", () => {
    main.classList.toggle("show");
    main.classList.toggle("hide");
})

/* Main Slider */

const myslide = document.querySelectorAll(".myslider"),
      dot = document.querySelectorAll(".dot");

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);

function autoslide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide,8000);
}


function slidefun(n) {
    let i;
    for(i = 0; i<myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    for(i = 0; i<dot.length; i++) {
        dot[i].classList.remove("active");
    }
    if(n > myslide.length) {
        counter = 1;
    }
    if(n < 1) {
        counter = myslide.length;
    }
    myslide[counter -1].style.display = "block";
    dot[counter -1].classList.add("active");
}