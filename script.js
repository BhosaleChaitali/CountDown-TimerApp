
var countDownDate = 0; 

var countdownTimer;

function start() {
  var userDateTimeInput = document.getElementById("time_date").value;
  countDownDate = new Date(userDateTimeInput).getTime();

  // If the input date is invalid, do not start the countdown
  if (isNaN(countDownDate)) {
    alert("Please enter a valid date and time.");
    return;
  }

  
  clearInterval(countdownTimer); 
  countdownTimer = setInterval(updateCountdown, 1000);
}

function stop() {
  clearInterval(countdownTimer);
}

function restart() {
  start(); // Restart the countdown with the previously set date
}

function reset() {
  clearInterval(countdownTimer);
  countDownDate = 0; // Reset the countdown date
  document.getElementById("display_area").innerHTML = "00"+" "+"d"+" "+":"+" "+"00"+" "+ "h" +" "+":"+" "+ "00" +" "+ "m" +" "+":"+" "+ "00" +" "+ "s ";
}

function updateCountdown() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("display_area").innerHTML = days+" "+"d"+" "+":"+" "+ hours +" "+ "h" +" "+":"+" "+ minutes +" "+ "m" +" "+":"+" "+ seconds +" "+ "s ";

  if (distance < 0) {
    clearInterval(countdownTimer);
    alert("Reached to your goal 🎉 OR Expired 🚫");
    document.getElementById("display_area").innerHTML = "00 d : 00 h : 00 m : 00 s";
  }

}
