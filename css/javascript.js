const humburger = document.querySelector(".hamburger");
const navMenu= document.querySelector(".navigasi-menu");

humburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    humburger.classList.toggle("active")
    navMenu.classList.toggle("active")
}
