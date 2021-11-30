let path = window.location.pathname;

let isProject = false;
let logoPathSmall = "./assets/images/logos/logo-white-simple.png";
let logoPathBig = "./assets/images/logos/benjamin-logo.png";

let selector;
path = path.substring(path.lastIndexOf("/"));

if (path.startsWith("/project")) {
  logoPathSmall = "../assets/images/logos/logo-white-simple.png";
  logoPathBig = "../assets/images/logos/benjamin-logo.png";
  path = "/portfolio.html";
  selector = `a[href="..${path}"]`;
} else {
  selector = `a[href=".${path}"]`;
}
const matches = document.querySelectorAll(selector);

const linkElement = selector.includes("landing")
  ? matches.item(1)
  : matches.item(0);
linkElement.classList.add("navbar-active");

const navbar = document.querySelector(".navbar-items");
const logo = document.querySelector("#navbar-logo");
const navbarBehaviourHandler = () => {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-items-scroll");
    logo.setAttribute("src", logoPathSmall);
    logo.setAttribute("id", "navbar-logo-scroll");
  } else {
    navbar.classList.remove("navbar-items-scroll");
    logo.setAttribute("src", logoPathBig);
    logo.setAttribute("id", "navbar-logo");
  }
};
window.addEventListener("scroll", navbarBehaviourHandler);

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
