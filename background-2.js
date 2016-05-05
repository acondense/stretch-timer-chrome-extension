var audio = new Audio('sound.mp3');
var workTime  = 10000;
var stretchTime = 5000;
var nIntervId = null;

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
    console.log("WT: " + workTime);
    console.log("ST: " + stretchTime);
    clearInterval(nIntervId);
    changeColor();
  });
});

function changeColor() {
  console.log("WS: " + Date());
  nIntervId = setInterval(flashText, workTime + stretchTime);
}

function flashText() {
  //alert("Yes yes yow" + workTime);
  console.log("WE: " + Date());

  // clear interval so strech workTime does not overlap with work workTime
  //clearInterval(nIntervId);

  // stretch workTime
  console.log("SS: " + Date());
  audio.play();
  setTimeout(function (){
    audio.pause();
    audio.currentworkTime = 0;
    console.log("SE: " + Date());
    //changeColor();
  }, stretchTime);

}

function stopTextColor() {
  clearInterval(nIntervId);
}

changeColor();