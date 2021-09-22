document.getElementById("defaultOpen").click();
function openTab(evt, tab) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("lp-projects-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("lp-projects-tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "flex";
  evt.currentTarget.className += " active";
}

const blurDiv = document.querySelectorAll(".lp-projects-blur");
const imagecontent = document.querySelectorAll(".lp-projects-image-content");

imagecontent.forEach((item, index) => {
  const bgImage = `benjamin-brankovic-portfolio/assets/images/project-images/${
    index + 1
  }.1.png`;
  item.parentElement.style.backgroundImage = `url(${bgImage})`;
  item.onmouseover = () => {
    blurDiv.item(index).classList.add("blur-active");
  };

  item.onmouseout = () => {
    blurDiv.item(index).classList.remove("blur-active");
  };
});
