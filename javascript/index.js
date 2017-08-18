$(document).ready(function() {

  const menuToggle = document.getElementById("menu_toggle");
  const toggle = document.getElementById("toggle");
  const sideNav = document.getElementById("side-nav");
  const content = document.getElementById("content");

  menuToggle.addEventListener('click', function(e){
    if (toggle.classList.contains('fa-bars')) {
      // sideNav.classList.toggle('open');
      toggle.classList.remove('fa-bars');
      toggle.classList.add('fa-times');
      content.style.width = "100vh - 210px";
      content.style.transform = "translateX(210px)";
    } else {
      toggle.classList.remove('fa-times');
      toggle.classList.add('fa-bars');
      content.style.width = "";
      content.style.transform = "";
    }

    sideNav.classList.toggle('open');
  });


  $(document).on('click', '#side-nav li a', function(event){
      event.preventDefault();
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
  });


});
