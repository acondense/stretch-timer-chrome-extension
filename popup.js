var btnSetMinutes = document.getElementById("setMinutes");
var port = chrome.extension.connect({name: "Sample Communication"});

btnSetMinutes.addEventListener("click", function() {
  var workTime    = document.getElementById("noOfWorkTime").value;
  var stretchTime = document.getElementById("noOfStretchTime").value;
  var message = {
    "workTime"   : workTime,
    "stretchTime": stretchTime
  }
  port.postMessage(message);
  port.onMessage.addListener(function(msg) {
      console.log("message recieved"+ msg);
  });
});