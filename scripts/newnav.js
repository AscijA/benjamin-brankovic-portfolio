// Yes, it's this simple.

var slidingMenu = function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var body       = document.body;
  
    menuToggle.addEventListener('click', function(ev) {
      ev.preventDefault();
      body.classList.toggle('menu-active');
    });
  }
  
  slidingMenu();
  