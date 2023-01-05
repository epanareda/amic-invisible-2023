let score_screen = document.getElementById("score");
let seconds_screen = document.getElementById("seconds");
let mil_seconds_screen = document.getElementById("mil-seconds");

let operation_screen = document.getElementById("operation-screen");
let calculator_screen = document.getElementById("calculator-screen");

let btn_delete = document.getElementById("btn-delete");
let btn_check = document.getElementById("btn-check");

let correct_sound = new Audio("../sounds/correct.mp3");
let incorrect_sound = new Audio("../sounds/incorrect.mp3");

let modal_error = document.getElementById("modal-error");
let correct_result = document.getElementById("correct-result");
let modal_error_close = document.getElementById("btn-close-error-modal");

let modal = document.getElementById("modal");
let modal_panel = document.getElementById("modal-panel");
let score_modal = document.getElementById("score-modal");

let operation_solution;
let num = [];
let num1, op, num2, sol;
let score = 0;
let end_time = new Date().getTime() + (60 * 1000);

set_operation();
let timer = setInterval(update_timer, 10);

for(let i=0; i<10; i++) {
    document.getElementById("btn-"+i).addEventListener("click", function() {
        num.push(i);
        // console.log(num.join(""));
        calculator_screen.innerHTML = num.join("");
        if(num.reduce((accumulator, value) => {
            return accumulator + value;
          }, 0) == 0) {
            num = [];
          }
    })
}

btn_delete.addEventListener("click", function() {
    num.pop();
    if(num.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0) == 0) {
        calculator_screen.innerHTML = 0;
    } else {
        calculator_screen.innerHTML = num.join("");
    }
})

btn_check.addEventListener("click", function() {
    if(Number(num.join("")) == operation_solution) {
        score++;
        // console.log("Score: " + score);
        correct_sound.play()
        update_score();
    } else {
        // alert(operation_solution);
        incorrect_sound.play()
        correct_result.innerHTML = num1 + " " + op + " " + num2 + " = " + sol;
        modal_error.hidden = false;
    }
    
    set_operation();
    num = [];
    calculator_screen.innerHTML = 0;
})

modal_error_close.addEventListener("click", function() {
    modal_error.hidden = true;
})

function update_score() {
    if(score < 10) {
        score_screen.innerHTML = "0" + score;
        score_modal.innerHTML = "0" + score;
    } else {
        score_screen.innerHTML = score;
        score_modal.innerHTML = score;
    }
}

function update_timer() {
    let now = new Date().getTime();
    let time_left = end_time - now;
    console.log(end_time - now);

    let seconds = Math.floor((time_left % (60 * 1000)) / 1000);
    let mil_seconds = Math.floor((time_left % 1000) / 10);

    if(seconds == 0 && time_left > 2000) {
        seconds_screen.innerHTML = 60;
    } else if(seconds < 10) {
        seconds_screen.innerHTML = "0" + seconds;
    } else {
        seconds_screen.innerHTML = seconds;
    }

    if(mil_seconds < 10) {
        mil_seconds_screen.innerHTML = "0" + mil_seconds;
    } else {
        mil_seconds_screen.innerHTML = mil_seconds;
    }

    if(time_left < 0) {
        seconds_screen.innerHTML = "00";
        mil_seconds_screen.innerHTML = "00";
        modal.hidden = false;
    }

    if(time_left < -1000) {
        clearInterval(timer);
        modal_panel.classList.remove("top-100");
        modal_panel.classList.add("top-0");
    }
}

function set_operation() {
    [num1, op, num2, sol] = random_operation();
    operation_screen.innerHTML = num1 + " " + op + " " + num2 + " =";
    operation_solution = sol;
}

function random_operation() {
    let random_num_1 = Math.floor(Math.random() * 10) + 1;
    let random_num_2 = Math.floor(Math.random() * 10) + 1;

    let random_operator = ["+", "-", "x", "/"][Math.floor(Math.random() * 4) + 0];

    let solution;
    if(random_operator == "+") {
        solution = random_num_1 + random_num_2;
    } else if(random_operator == "-") {
        if(random_num_1 > random_num_2) {
            solution = random_num_1 - random_num_2;
        } else {
            solution = random_num_2 - random_num_1;
            return [random_num_2, random_operator, random_num_1, solution];
        }
    } else if(random_operator == "x") {
        solution = random_num_1 * random_num_2;
    } else {
        solution = random_num_1 * random_num_2;
        return [solution, random_operator, random_num_1, random_num_2];
    }

    return [random_num_1, random_operator, random_num_2, solution];
}

