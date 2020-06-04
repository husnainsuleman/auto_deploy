function signup() {
    var box = document.getElementById("reality");
    box.style.left = "17%";
    var signupform = document.getElementById("signupform");
    signupform.style.display = "block";
    var loginform = document.getElementById("loginform");
    loginform.style.display = "none";
    var signuptitle = document.getElementById("signuptitle");
    signuptitle.style.display = "none";
}
function login() {
    var box = document.getElementById("reality");
    box.style.left = "50%";
    var signupform = document.getElementById("signupform");
    signupform.style.display = "none";
    var loginform = document.getElementById("loginform");
    loginform.style.display = "block";
    var signuptitle = document.getElementById("signuptitle");
    signuptitle.style.display = "block";
}