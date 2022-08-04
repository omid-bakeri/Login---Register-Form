var email = document.getElementById('email') ; 
var formButtonid = document.getElementById('formButtonid') ; 

var TextAttentioncheck = document.getElementById('TextAttention') ;
var TextErrorcheck = document.getElementById('TextError') ;
var TextAchivecheck = document.getElementById('TextAchive') ;

email.addEventListener('click' , functioncheck) ; 


function functioncheck(){
	if(email.value.length == 0){
		// email.style.border = "3px solid #cc4444" ; 
		// TextAttentioncheck.style.display = "block" ; 
		// email.focus() ;
		// return false ;

		alert('لطفا آدرس پست الکرتونیکی خود را وارد نمایید');
	}

	if(email.value.length > 10){
		email.style.border = "2px solid green" ; 
		TextAchivecheck.style.display = "block" ; 
		email.focus() ;
		return false ;
	}
}


