const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const navLink = document.querySelectorAll(".menu-item");
const contactID = document.getElementById("contact");
const btnConsult = document.getElementById("btnConsult");
const consultInputName = document.getElementById("consultInputName");
const goTopBtn = document.getElementById("backToTop");
const header = document.getElementById("header");


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

window.addEventListener('scroll', trackScroll);

function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight / 2;
  if (scrolled > coords) {
    goTopBtn.classList.add('btn-back-to-top--show');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove ('btn-back-to-top--show');
  }
}


goTopBtn.addEventListener('click', () => {
  headerLogo.scrollIntoView({block: "center", behavior: "smooth"});
});;
