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

  //save contact
  var ref = new Firebase("https://hello-ying-ru.firebaseio.com/");

  const form = document.getElementById('contact__form');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log('hi');
    if (name.value.trim() != '' && email.value != '' && message.value != '') {
      ref.child('homePage_contact').push({
        name: name.value,
        email: email.value,
        message: message.value,
      });
      // console.log('successfully');
      toastr.success('Submitted successfully. Thank you!');
      form.reset();
    } else {
      toastr.warning('Please fill the form!');
      // alert('Please fill the form!');
    }
  });

});
