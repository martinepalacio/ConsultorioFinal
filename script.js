const navToggle = document.querySelector(".nav-toggle");
const navTogglex = document.querySelector(".nav-togglex");
const navMenu = document.querySelector(".menuList");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("menuList-visible");
});

navTogglex.addEventListener("click", () => {
  navMenu.classList.toggle("menuList-visible");
});
