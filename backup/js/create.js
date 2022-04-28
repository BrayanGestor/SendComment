//GLOBAL LET
var userStatus;
let userDate = new Array();
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

		userDate["id"] = x;
		userDate["userName"] = document.getElementById('fname').value;

		userDate["userLastName"] = document.getElementById('lname').value;

		userDate["userEmail"] = document.getElementById('femail').value;
		userDate["userRepeatEmail"] = document.getElementById('r_email').value;

		userDate["userPassword"] = document.getElementById('fpassword').value;
		userDate["userRepeatPassword"] = document.getElementById('r_password').value;

		userDate["userAddress"] = document.getElementById('faddress').value;

		userDate["userZipCode"] = document.getElementById('fzipCode').value;

		userDate["userCity"] = document.getElementById('fcity').value;

		userDate["userState"] = document.getElementById('fstate').value;

		userDate["userCountry"] = document.getElementById('fcountry').value;


		checkDate();

	}else{
		window.location = "feed.html";
	}

}



function checkDate(){

	if(userDate["id"] != null || userDate["id"] != 0 || userDate["id"] != undefined){
		if(userDate["userName"] != null || userDate["userName"] != 0 || userDate["userName"] != undefined){
			if(userDate["userLastName"] != null || userDate["userLastName"] != 0 || userDate["userLastName"] != undefined){
				if(userDate["userPassword"] != null || userDate["userPassword"] != 0 || userDate["userPassword"] != undefined){
					if(userDate["userAddress"] != null || userDate["userAddress"] != 0 || userDate["userAddress"] != undefined){
						if(userDate["userZipCode"] != null || userDate["userZipCode"] != 0 || userDate["userZipCode"] != undefined){
							if(userDate["userCity"] != null || userDate["userCity"] != 0 || userDate["userCity"] != undefined){
								if(userDate["userState"] != null || userDate["userState"] != 0 || userDate["userState"] != undefined){
									if(userDate["userCountry"] != null || userDate["userCountry"] != 0 || userDate["userCountry"] != undefined){
										userStatus = true;

									}
								}

							}

						}

					}

				}

			}

		}

	}
	
}


function Status(){

	if(userStatus == true){
	tabUsers[x] = userDate;
	window.location = "feed.html";
	}

	console.log("ok3")

}
