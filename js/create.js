//GLOBAL LET
var userStatus;
let userInformation = new Array();
let tabUsers = new Array();
let i,x;



// Check Email is igual

function checkEmail(){
	let msgError = document.getElementById('msgError');
	var email = document.getElementById('femail').value;
	var repeatEmail = document.getElementById('r_email').value;


	if(email != repeatEmail){
		msgError.style.display = "block";

		msgError.innerHTML = "Your email is different, please verify!!!";

	}
	if(email == repeatEmail){
		msgError.style.display = "none";
	}
	
}


// Check PassWord is igual
function checkPassword(){

	let msgError = document.getElementById('msgError');
	var cPassword = document.getElementById('fpassword').value;
	var cRepeatPassword = document.getElementById('r_password').value;


	if(cPassword != cRepeatPassword){
		msgError.style.display = "block";

		msgError.innerHTML = "Your email is different, please verify!!!"
	}
	if(cPassword == cRepeatPassword){

		msgError.style.display = "none";
	}
	
}






// Create User

function signUp(){

	if( userStatus == false){

		checkUserId = tabUsers.length;

		for(var i = 0; i <= checkUserId;){

			x = checkUserId + 1;
			break;
		}

		userInformation.push = x;

		userInformation.push =document.getElementById('lname').value;

		userInformation.push =document.getElementById('femail').value;
		userInformation.push = document.getElementById('r_email').value;

		userInformation.push = document.getElementById('fpassword').value;
	
		userInformation.push = document.getElementById('r_password').value;

		userInformation.push = document.getElementById('faddress').value;

		userInformation.push = document.getElementById('fzipCode').value;

		userInformation.push = document.getElementById('fcity').value;

		userInformation.push = document.getElementById('fstate').value;

		userInformation.push = document.getElementById('fcountry').value;


		checkDate();

	}

}



function checkDate(){

	const checkFunc =  userInformation.push != null || userInformation.push != 0 || userInformation.push != undefined;

	if(checkFunc){

		userStatus = true;

	}
	
}

