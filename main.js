const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const navLink = document.querySelectorAll(".menu-item");
const contactID = document.getElementById("contact");
const btnConsult = document.getElementById("btnConsult");
const consultInputName = document.getElementById("consultInputName");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

btnConsult.addEventListener('click', () => {
  contactID.scrollIntoView({block: "center", behavior: "smooth"});
  consultInputName.focus();
});