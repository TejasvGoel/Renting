
window.onload=zero;

function zero(){
	var disp = document.getElementsByClassName('error');
	for(var i = 0 ; i < disp.length ; i++){
		disp[i].style.display="none";
	}


}

function firstName(i) {
	var x = document.getElementById('fname');
	if(x.value.length!=0){
	var name_match = /^[a-zA-Z]+$/;
	if(name_match.test(x.value)==false){
		document.getElementById('errorFname').style.display="block";
		document.getElementById(i).style.border="1px solid red";
		return false;
	}
	else
		document.getElementById('errorFname').style.display="none";
		document.getElementById(i).style.border="1px solid #ccc";
		return true;
}
}

function lastName(i) {
var x = document.getElementById('lname');
if(x.value.length!=0) {
	var name_match = /^[a-zA-Z]+$/;
	if(name_match.test(x.value)==false){
		document.getElementById('errorLname').style.display="block";
		document.getElementById(i).style.border="1px solid red";
		return false;
}
	else
	document.getElementById('errorLname').style.display="none";
    document.getElementById(i).style.border="1px solid #ccc";
	return true;

}
}

function eMail(i) {
	var x = document.getElementById('email');
	if(x.value.length!=0) {

		var email_match=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if(email_match.test(x.value)==false) {
			document.getElementById('errorEmail').style.display="block";
			document.getElementById(i).style.border="1px solid red";
			return false;
		}	
		else
			document.getElementById('errorEmail').style.display="none";
		document.getElementById(i).style.border="1px solid #ccc";
	        return true;
	}


}

function Phn(i) {
	var x = document.getElementById('phone');
	if(x.value.length!=0){
	var phnNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(phnNo.test(x.value)==false){
		document.getElementById('errorPhn').style.display="block";
		document.getElementById(i).style.border="1px solid red";
		return false;

	}
	else
		document.getElementById('errorPhn').style.display="none";
		document.getElementById(i).style.border="1px solid #ccc";
		return true;
}
}

function Pswd(i) {
	var x = document.getElementById('pswd');
	if(x.value.length!=0){
	var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	if(password.test(x.value)==false){
		document.getElementById('errorPswd').style.display="block";
		document.getElementById(i).style.border="1px solid red";
		return false;

	}
	else
		document.getElementById('errorPswd').style.display="none";
		document.getElementById(i).style.border="1px solid #ccc";
		return true;
}
}

function CPswd(i) {
	var x = document.getElementById('cpswd');
	if(x.value.length!=0){
	var passwrd = document.getElementById('pswd');
	if(passwrd.value!=x.value){
		document.getElementById('errorCpswd').style.display="block";
		document.getElementById(i).style.border="1px solid red";
		return false;

	}
	else
		document.getElementById('errorCpswd').style.display="none";
		document.getElementById(i).style.border="1px solid #ccc";
		return true;
}
}

function userName(i) {
	var x = document.getElementById('uname');
	if(x.value!=0){
		name_match = /^([a-zA-Z])?(*[0-9])+$/
		if(name_match.test(x.value)==false){
			document.getElementById('errorUname').style.display="block";
			document.getElementById(i).style.border="1px solid red";
			return false;
		}
		else
			document.getElementById('errorUname').style.display="none";
			document.getElementById(i).style.border="1px solid #ccc";
	}
}