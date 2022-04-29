//GLOBAL LET
v



// Check Email and PassWord for login

function login(){
	let userLogin = "admin";
	let userPassword = "admin";

	var login = document.getElementById('userlog').value;
	var password = document.getElementById('userPwd').value;

	if(userLogin == login && userPassword == password){
		window.location = "feed.html";
	}else{
		var html = document.getElementById('login_save');
		html.style.display = "block";
		html.innerHTML = "Login ou Senha incorreto.";
	}
}

