let path = window.location.pathname;
let selector = `a[href=".${path}"]`;
if (!selector.endsWith('html"]')) {
  selector += ".html";
}
const matches = document.querySelectorAll(selector);

const linkElement = matches.item(0);

linkElement.classList.add("navbar-active");

const navbar = document.querySelector(".navbar-items");
const logo = document.querySelector("#navbar-logo");
const navbarBehaviourHandler = () => {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-items-scroll");
    logo.setAttribute("src", "./assets/images/logos/logo-white-simple.png");
    logo.setAttribute("id","navbar-logo-scroll")
  } else {
    navbar.classList.remove("navbar-items-scroll");
    logo.setAttribute("src", "./assets/images/logos/benjamin-logo.png");
    logo.setAttribute("id", "navbar-logo");
  }
};
window.addEventListener("scroll", navbarBehaviourHandler);
