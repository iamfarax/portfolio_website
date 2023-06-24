sideNav = document.querySelector(".side-nav");
Burger = document.querySelector(".burger");
Burger.addEventListener('click', () => {
    sideNav.classList.toggle("w-nav-resp");
    sideNav.classList.toggle("v-class-resp");
});