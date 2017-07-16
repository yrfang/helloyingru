var bars = document.querySelectorAll('.bar').forEach((bar) => {
  var percentage = bar.getAttribute("data-percent");

  var loading = setInterval(progressBar, 15);
  var progress = 0;

  //animation of skillbar loading
  function progressBar() {
    if (progress >= percentage) {
      clearInterval(loading);
      bar.childNodes[0].innerHTML = percentage + '%';
    } else {
      progress++;
      bar.style.width = progress + '%';
    }
  }
});



window.onload = function() {
  var radius = document.querySelector('circle').getAttribute('r');
  var circumference = 2 * radius * Math.PI;
  // console.log(circumference);

  var circles = document.querySelectorAll('.pie').forEach((circle) => {
    var num = circle.getAttribute("data-percent");
    circle.setAttribute('stroke-dasharray', circumference);
    console.log(num);

    var currentCount = 0;
    var maxCircum = (num/100) * circumference;

    var intervalId = setInterval(function() {
      var currentCircum = (currentCount/num)*circumference;

      if (currentCircum > maxCircum) {
        clearInterval(intervalId);
        return;
      }
      var offset = (1 - currentCount/num)*circumference;
      var progress = circle.childNodes[3].setAttribute('stroke-dashoffset', offset);;

      currentCount++;
    }, 30);
  });


  var nums = document.querySelectorAll('.number').forEach((num) => {
    var currentNum = 0;
    var maxNum = num.getAttribute("data-num");

    var intervalId = setInterval(function() {
      if (currentNum > maxNum) {
        clearInterval(intervalId);
        return;
      }
      num.innerHTML = currentNum + '%';
      currentNum++;
    }, 20);
  });
}
