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
    if(user.value == "participant_0304" && password.value == "avkzjutkS2Hv5SPgpF7B") {
        user_name.innerHTML = "ESTEVE ROIG ALBERTI";
        user_link.href = "introduction-esteve.html";
        modal.hidden = false;
    } else if(user.value == "participant_0182" && password.value == "njnNiDj4u6VyweiBGqxN") {
        user_name.innerHTML = "EDUARD ROIG SOLA";
        user_link.href = "introduction-eduard.html";
        modal.hidden = false;
    } else {
        alert("L'usuari o el mot de pas són incorrectes, estigues al lloro!");
    }
})