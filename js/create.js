//GLOBAL LET
var userStatus;
let userInformation = new Array();
let divLocate, msgError, i, x, y, z;


function getInformation(id){

	divLocate = document.getElementById(id);
}

function getEmail(x,y){
	
	getInformation(x);
	var cEmail = divLocate.value;

	getInformation(y);
	var cRepeatEmail = divLocate.value;

	showMsgError(cEmail,cRepeatEmail);
}



function getPassword(x,y){

	getInformation(x);
	var cPassword = divLocate.value;

	getInformation(y);
	var cRepeatPassword = divLocate.value;

	showMsgError(cPassword,cRepeatPassword);
}



function initError(){
	getInformation('msgError');
	msgError = divLocate;
}

function showMsgError(x,y){

	if(x != y){

		initError();

		divLocate.style.display = "block";

		divLocate.innerHTML = `Your ${y} is different, please verify!!!`;


	}

	keep(x,y);
}


function keep(x,y){

	if (x == y){
		initError();
		msgError.style.display = "none";
	}
	
}



// Check Email is igual

function checkEmail(){

	var e = 'femail';
	var r = 'r_email';

	getEmail(e,r);

}


// Check PassWord is igual
function checkPassword(){

	var p = 'fpassword';
	var c = 'r_password';

	getPassword(p,c);
	
}

function addValue(x){
	userInformation.push(x);
}

// Create User

function signUp(){

	getInformation('fname');
	addValue(divLocate.value)

	getInformation('lname');
	addValue(divLocate.value)

	getInformation('femail');
	addValue(divLocate.value)

	getInformation('r_email');
	addValue(divLocate.value)

	getInformation('fpassword');
	addValue(divLocate.value);

	getInformation('r_password');
	addValue(divLocate.value)

	getInformation('faddress');
	addValue(divLocate.value)

	getInformation('fzipCode');
	addValue(divLocate.value)

	getInformation('fcity');
	addValue(divLocate.value)

	getInformation('fstate');
	addValue(divLocate.value)

	getInformation('fcountry');
	addValue(divLocate.value)


		checkNull();
		checkEmpty();
		checkUndef();
	
}


function msgErrorForm(id){

	var userInf = id;


	console.log(userInf);

	if(userInformation[id] == null){

		initError();

		msgError.innerHTML = `The field ${userInformation[id]} be null, please verify!!!`;

		return;
	}

	if(userInformation[id] == 0){

		initError();
		msgError.innerHTML = `The field ${userInformation[id]} be empty, please verify!!!`;

		return;
	}

	if(userInformation[id] == undefined){

		initError();
		msgError.innerHTML = `The field ${userInformation[id]} be undefined, please verify!!!`;

		return;
	}
}

function checkNull(){

	for(i = 0; i < userInformation.length; i++ ){
		userInformation[i];

		if(userInformation[i] == null){
			msgError = true;
			msgErrorForm(i);
			return;
		}
	
	}

}

function checkEmpty(){

	for(i = 0; i < userInformation.length; i++ ){

		if(msgError != true){

			if(userInformation[i] == 0){
				msgError = true;
				msgErrorForm(i);
				return;

			}

		}
	}
}

function checkUndef(){

	for(i = 0; i < userInformation.length; i++ ){
		userInformation[i];

		if(userInformation[i] == undefined){
			msgError = true;
			msgErrorForm(i);
			return;
		}
	}

}

