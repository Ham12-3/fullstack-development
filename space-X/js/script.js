const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
btn.addEventListener("click", navToggle);
const menu = document.getElementById("mobile-menu");
function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}
