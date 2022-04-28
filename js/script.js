//GLOBAL LET
var userStatus;
let userDate = new Array();
let tabUsers = new Array();
let i,x;




// Create a Comment

function sendComment(){

	var comment = new Array();
	var saveComment = new Array();

	comment = document.getElementById("comment");
	saveComment =document.getElementById('comment_save');

	getComment = comment.value;

	if(getComment == undefined || getComment == null || getComment == "" || getComment == " "  || getComment == NaN){
		var x = saveComment;

		saveComment.style.display = "block";
		x.style.background = "white";
		x.style.color = "red";
		x.innerHTML = "Favor inserir seu coment&aacute;rio!! ";

	}else{

		var x = saveComment;

		saveComment.style.display = "block";
		x.style.background = "#75E6DA";
		x.style.color = "black";
		x.innerHTML = comment.value;
	}
}






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






function setButton(){
	var $input    = document.getElementById('input-file'),
    	$fileName = document.getElementById('file-name');

	$input.addEventListener('change', function(){
  		$fileName.textContent = this.value;

	});
}