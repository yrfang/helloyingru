const menuToggle = document.getElementById("menu_toggle");
const toggle = document.getElementById("toggle");
const sideNav = document.getElementById("side-nav");

menuToggle.addEventListener('click', function(e){
  if (e.target.classList.contains('fa-bars')) {
    // sideNav.classList.toggle('open');
    toggle.classList.remove('fa-bars');
    toggle.classList.add('fa-times');
  } else {
    toggle.classList.remove('fa-times');
    toggle.classList.add('fa-bars');
  }

  sideNav.classList.toggle('open');
});
