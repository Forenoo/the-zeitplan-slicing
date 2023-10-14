const menuBtn = document.querySelector(".hamburger-btn");
const navbar = document.querySelector(".nav-links")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('is-active');
    navbar.classList.toggle('is-active');
});