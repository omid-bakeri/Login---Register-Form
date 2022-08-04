var usernameoremail = document.forms['form']['usernameoremail'];
var password = document.forms['form']['password'];

var usernameorpasswordtexterror = document.getElementById('formMessageError');
var passwordtexterror = document.getElementById('formInputErrorPasswordMessage');
// var passwordtexterrorrule = document.getElementById('formInputErrorPasswordMessagerule');

usernameoremail.addEventListener('textInput', validationCheckemail);
password.addEventListener('textInput', validationCheckpassword);


function controlFunction() {
    if (usernameoremail.value.length == 0) {
        usernameoremail.style.border = "3px solid red";
        usernameorpasswordtexterror.style.display = "block";
        usernameoremail.focus();
        return false;
    }

    if (password.value.length == 0) {
        password.style.border = "3px solid red";
        passwordtexterror.style.display = "block";
        password.focus();
        return false;
    }

    if (password.value.length < 10) {
        password.style.border = "3px solid red";
        passwordtexterror.style.display = "block";
        password.focus();
        return false;
    }

}

function validationCheckemail() {
    if (usernameoremail.value.length >= 1) {
        usernameoremail.style.border = "2px solid silver";
        usernameorpasswordtexterror.style.display = "none";
        return true;
    }
}


function validationCheckpassword() {
    if (password.value.length > 8) {
        password.style.border = "2px solid silver";
        passwordtexterror.style.display = "none";
        return true;
    }
}