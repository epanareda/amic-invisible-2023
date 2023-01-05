let audio_btn = document.getElementById("audio-btn");
let audio = new Audio("../sounds/ubication-eduard.wav");

audio_btn.addEventListener("click", function() {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }    
})