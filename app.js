// mobile menu
const mobileMenu = document.querySelector(".mobile__menu");
const overlay = document.querySelector(".navigation");

const showMenu = () => {
  overlay.classList.add("show__menu");
};

const hideMenu = () => {
  overlay.classList.remove("show__menu");
};

mobileMenu.addEventListener("click", showMenu);
overlay.addEventListener("click", hideMenu);
