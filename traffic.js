let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");
let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

stopButton.addEventListener("click", function(){
    stopButton.style.backgroundColor = "red";
    stopLight.style.backgroundColor = "red";

    readyButton.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";

    goButton.style.backgroundColor = "#1f1d41"; 
    goLight.style.backgroundColor = "#4b5069";


});
readyButton.addEventListener("click", function(){
    stopButton.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";

    readyButton.style.backgroundColor = "orange";
    readyLight.style.backgroundColor = "orange";

    goButton.style.backgroundColor = "#1f1d41"; 
    goLight.style.backgroundColor = "#4b5069";

});
goButton.addEventListener("click", function(){

    stopButton.style.backgroundColor = "#1f1d41";
    stopLight.style.backgroundColor = "#4b5069";

    readyButton.style.backgroundColor = "#1f1d41";
    readyLight.style.backgroundColor = "#4b5069";

    goButton.style.backgroundColor = "green"; 
    goLight.style.backgroundColor = "green";
});