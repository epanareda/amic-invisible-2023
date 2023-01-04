let btn = document.getElementsByTagName("button")[0];

let user = document.getElementById("user");
let password = document.getElementById("password");

let modal = document.getElementById("modal");
let user_name = document.getElementsByTagName("strong")[0];
let user_link = document.getElementById("user-link");

btn.addEventListener("click", function() {
    // console.log(user.value);
    // console.log(password.value);
    // modal.hidden = false;
    if(user.value == "participant_01" && password.value == "e") {
        user_name.innerHTML = "ESTEVE ROIG ALBERTI";
        user_link.href = "introduction.html";
        modal.hidden = false;
    } else if(user.value == "participant_02" && password.value == "1") {
        user_name.innerHTML = "EDUARD ROIG SOLA";
        user_link.href = "introduction.html";
        modal.hidden = false;
    } else {
        alert("L'usuari o el mot de pas són incorrectes, estigues al lloro!");
    }
})