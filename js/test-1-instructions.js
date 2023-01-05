let start_btn = document.getElementById("start-btn");

let modal = document.getElementById("modal");
let close_modal_btn = document.getElementById("close-modal-btn");

start_btn.addEventListener("click", function() {
    modal.hidden = false;
})

close_modal_btn.addEventListener("click", function() {
    modal.hidden = true;
})

let audio_btn = document.getElementById("audio-btn");
let audio = new Audio("../sounds/test-1-instructions.wav");

audio_btn.addEventListener("click", function() {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }    
})