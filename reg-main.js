var nlname = document.getElementById('nameLastName');
var uname = document.getElementById('userName');
var email = document.getElementById('email');
var password = document.getElementById('password');

// var nlname = document.forms['form']['nameLastName'];
// var uname = document.forms['form']['userName'];
// var email = document.forms['form']['email'];
// var password = document.forms['form']['password'];



var errorNameLastname = document.getElementById('nlnameError');
var errorUserName = document.getElementById('usernameError');
var errorEmail = document.getElementById('emailError');
var errorPassword = document.getElementById('passwordError');


// var registerButton = document.getElementById('registerButton');
// registerButton.addEventListener('click', formValidationFunction);

nlname.addEventListener('textInput' , checkField1);
uname.addEventListener('textInput' , checkField2);
email.addEventListener('email' , checkField3);
password.addEventListener('keyup' , checkField4);



function formValidationFunction() {
    if (nlname.value.length == 0) {
        nlname.style.border = "2px solid red";
        errorNameLastname.style.display = "block";
        return false;
    }
    if (uname.value.length == 0) {
        uname.style.border = "2px solid red";
        errorUserName.style.display = "block";
        return false;
    }
    if (email.value.length == 0) {
        email.style.border = "2px solid red";
        errorEmail.style.display = "block";
        return false;
    }
    if (password.value.length == 0) {
        password.style.border = "2px solid red";
        errorPassword.style.display = "block";
        return false;
    }
}


function checkField1(){
    if(nlname.value.length > 0){
        nlname.style.border = "2px solid silver" ; 
        errorNameLastname.style.display = "none" ; 
        return true;
    }
}

function checkField2(){
    if(uname.value.length >= 1){
        uname.style.border = "2px solid silver" ; 
        errorUserName.style.display = "none" ; 
        return true;
    }
}

function checkField3(){
    if(email.value.length > 10){
        email.style.border = "2px solid silver" ; 
        errorEmail.style.display = "none" ; 
        return true;
    }
}

function checkField4(){
    if(password.value.length > 8){
        password.style.border = "2px solid silver" ; 
        errorPassword.style.display = "none" ; 
        return true;
    }
}