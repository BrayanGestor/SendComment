


// Variable Global

var divLocate, idComment, divMensage, divComment, id, i;

// Create a Comment

 function getInformation(id){

	for(i = 0; i < id.length; i++){ 

		divLocate = document.getElementById(id);
	}

}

function sendComment(){

	var newComment = ["comentarios"];

	idComment = "comment";

	getInformation(idComment);
	newComment.push = divLocate.value;


	if(newComment != undefined || newComment != null){

		newComment.forEach((newComment, i) => {

			for(i = 0; i < newComment.length; i++){

				verificaNull(newComment[i]);
			}

		});

	}
	
}

function verificaNull(newComment){
	
	if(newComment!= undefined){

		let createMsg = true;

		showMsg(createMsg);
	}
}

function showMsg(createMsg){
	
	idCreate = "createComment";

	if(createMsg == true){

		getInformation(idCreate);
		divMensage = divLocate;
		
		divMensage.style.display = "block";

		mostraMsgFeed();
	}
}

function mostraMsgFeed(){

	idComment = "comment";

	getInformation(idComment);
	divComment = divLocate.value;

	divMensage.innerHTML = divComment;

}








