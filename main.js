const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const navLink = document.querySelectorAll(".menu-item");
const contactID = document.getElementById("contact");
const btnConsult = document.getElementById("btnConsult");
const consultInputName = document.getElementById("consultInputName");
const goTopBtn = document.querySelector(".back-to-top");
const headerLogo = document.getElementById("headerLogo");


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
  let coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add('back-to-topShow');
  }
  if (scrolled < coords) {
    goTopBtn.classList.remove ('back-to-topShow');
  }
}


goTopBtn.addEventListener('click', () => {
  headerLogo.scrollIntoView({block: "center", behavior: "smooth"});
});;
