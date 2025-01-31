const menuBtn = document.querySelector(".menuToggle");
const navBar = document.querySelector("nav");
menuBtn.addEventListener("click", function () {
    navBar.classList.toggle("show");
});
