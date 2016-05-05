var deadline = new Date(Date.parse(new Date()) + 3000);

function getTimeRemaining(endTime) {
  var t       = Date.parse(endTime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours   = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days    = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total'  : t,
    'days'   : days,
    'hours'  : hours,
    'minutes': minutes,
    'seconds': seconds
  }
}

function initializeClock(id, endTime){
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var time = getTimeRemaining(endTime);
    
    daysSpan.innerHTML = time.days;
    hoursSpan.innerHTML = time.hours;
    minutesSpan.innerHTML = time.minutes;
    secondsSpan.innerHTML = time.seconds;

    if (time.total <= 0) {
      alert("Yow");
      clearInterval(timeinterval);
    }
  }

  updateClock(); // call to avoid delay of interval on start
  var timeinterval = setInterval(updateClock, 1000);
}

initializeClock('clockDiv', deadline);

