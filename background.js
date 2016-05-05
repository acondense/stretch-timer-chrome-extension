var audio = new Audio('nice_alarm.mp3'); // audio source => http://www.zedge.net/ringtone/1501614/
var workTime  = 2000;
var stretchTime = 1000;
var isRunning = false;

// This connects the background.js and popup.js
chrome.extension.onConnect.addListener(function(port) {
  console.log("connected.....");
  port.onMessage.addListener(function(msg) {
    if (msg.workTime == null || msg.stretchTime == null) {
      workTime    = 10000;
      stretchTime = 3000;
    } else {
      workTime    = msg.workTime;
      stretchTime = msg.stretchTime;
    }
  });
});

function timer() {
  setTimeout(function(){
    console.log("AS: " + Date());
    audio.play();
    setTimeout(function() {
      console.log("AE: " + Date());
      audio.pause();
      audio.setCurrentTime = 0;
      timer();
    }, stretchTime);
  }, workTime);
}

timer();
