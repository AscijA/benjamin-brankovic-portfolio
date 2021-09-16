
let path = window.location.pathname
let selector = `a[href=".${path}"]`
if (!selector.endsWith("html\"\]"))
{
  selector += ".html"
}
const matches = document.querySelectorAll(selector);

const linkElement = matches.item(0);

linkElement.classList.add("navbar-active")
