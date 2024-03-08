//Mobile Menu 

let openMenu = document.getElementById("hamburger");
let closeMenu = document.getElementById("close");
let mobileMenu = document.getElementById("mobile-menu");
openMenu.addEventListener("click", function() {
    openMenu.style.display = "none";
    closeMenu.style.display = "grid";
    mobileMenu.style.display = "grid";
});
closeMenu.addEventListener("click", function() {
    openMenu.style.display = "grid";
    closeMenu.style.display = "none";
    mobileMenu.style.display = "none";
});

//Back to Top Button

let calcScrollValue = () => {
    let scrollProgress = document.getElementById ("progress");
    let progressValue = document.getElementById ("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round ((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = "conic-gradient(#03c04a ${scrollValue}%, #d7d7d7 ${scrollvalue}%);";
    };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

//Countdown
// Set the date we're counting down to
var countDownDate = new Date("May 5, 2024 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("cookingoilchallengecountdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
  