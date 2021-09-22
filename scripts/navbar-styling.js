let path = window.location.pathname;
path = path.substring(path.lastIndexOf("/"))
let isProject = false
let logoPathSmall = "./assets/images/logos/logo-white-simple.png"
let logoPathBig = "./assets/images/logos/benjamin-logo.png"

let selector = `a[href=".${path}"]`;
if(path.startsWith("/projects"))
{
  logoPathSmall = "../assets/images/logos/logo-white-simple.png"
  logoPathBig = "../assets/images/logos/benjamin-logo.png"
  path = "/portfolio.html"
  selector = `a[href="..${path}"]`;
}

const matches = document.querySelectorAll(selector);

const linkElement = matches.item(0);

linkElement.classList.add("navbar-active");

const navbar = document.querySelector(".navbar-items");
const logo = document.querySelector("#navbar-logo");
const navbarBehaviourHandler = () => {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-items-scroll");
    logo.setAttribute("src", logoPathSmall);
    logo.setAttribute("id","navbar-logo-scroll")
  } else {
    navbar.classList.remove("navbar-items-scroll");
    logo.setAttribute("src", logoPathBig);
    logo.setAttribute("id", "navbar-logo");
  }
};
window.addEventListener("scroll", navbarBehaviourHandler);
