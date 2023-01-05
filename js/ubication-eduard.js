let audio_btn = document.getElementById("audio-btn");
let audio = new Audio("../ubication-eduard.mp3");

audio_btn.addEventListener("click", function() {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }    
})