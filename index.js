const menuToggle = document.getElementById("menu_toggle");
const sideNav = document.getElementById("side-nav");

// function displayToggle(e) {
//   if (e.classNmae !== 'menu_toggle') return;
//   e.preventDefault();
//   sideNav.style.left = "0px";
// }
//
// menuToggle.addEventListener('click', displayToggle);

menuToggle.addEventListener('click', function(e){
  // if (e.target.id != 'menu_toggle') return;

  menuToggle.classList.toggle('fa fa-times');
  sideNav.classList.toggle('open');

});
