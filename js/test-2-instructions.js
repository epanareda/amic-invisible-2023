let audio_btn = document.getElementById("audio-btn");
let audio = new Audio("test-2-instructions.mp3");

audio_btn.addEventListener("click", function() {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }    
})