const blurDiv = document.querySelectorAll(".lp-projects-blur");
const imagecontent = document.querySelectorAll(".lp-projects-image-content");

imagecontent.forEach((item, index) => {
  item.onmouseover = () => {
    blurDiv.item(index).classList.add("blur-active");
  };

  item.onmouseout = () => {
    blurDiv.item(index).classList.remove("blur-active");
  };
});
