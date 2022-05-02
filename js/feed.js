


// Variable Global

var  idComment, getHours, divCreate, divMensage, divComment, divImage,divPost, idPost, showImg, id, i;

const initNewDate = new Date();
let dateAll, dateYear, dateMonth, dateDay, dateHours, dateMinute;

//Array Global
var newImage = new Array();

const createComment = [
	{
		"id": 0,
		"name": "Marcos",
		"Post": "life style is more things.",
		"img": "./img/post/post01.jpg",
	},
	{
		"id": 1,
		"Name": "Alice",
		"Post": "I need know how wold function.",
		"img": "./img/post/post02.jpg",
	},
	{
		"id": 2,
		"Name": "Angelic",
		"Post": "I like very much eat and drink coffebreak.",
		"img": "./img/post/post03.jpg",
	}

]

// Create a Comment

function getInformation(id){

	divLocate = document.getElementById(id);

}

 function createItem(id){

	divCreate = document.createElement(id);

}

function createText(txt){
	createTxt = document.createTextNode(txt);
}

function sendComment(){

		var newComment = ["comentarios"];

		idComment = "comment";
		idPost = "input-file";

	getInformation(idPost);
		newImage.push(divLocate.value);
	getImage(newImage);

	getInformation(idComment);
		newComment.push(divLocate.value);


	if(newComment != undefined || newComment != null){

		newComment.forEach((newComment, i) => {

			for(i = 0; i < newComment.length; i++){

				verificaNull(newComment[i]);
				
			}

		});

	}

	return;
	
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
	return;
}

function mostraMsgFeed(){

		idComment = "comment";

	getInformation(idComment);
		divComment = divLocate.value;

		divMensage.innerHTML = divComment;

	return;

}

function mostraImgFeed(newImage){
	showImg = "box_post";
	getInformation(showImg);
	divLocate.style.display = "block";

	showImgMsg = "imgPost";
	getInformation(showImgMsg);
	showImgContent = divLocate;
	showImgContent.style.display = "none";

	createItem('div');

	divMensage = "Imagem inserida aparece aqui!";
	createText(divMensage);


	divCreate.appendChild(createTxt); 

	boxImage = "box_image";
	getInformation(boxImage);

	divLocate.insertBefore(divCreate,showImgContent);

	return;
}


function getImage(newImage){
	if (newImage != undefined || newImage != null ) {

		mostraImgFeed(newImage);
	}

	return;
}


function loadPage(id){
	window.location = `${id}.html`;
}

function deleteItem(id){
	getInformation(id);

	divLocate.remove();

}

function showDate(){

	dateYear = initNewDate.getFullYear();
	dateMonth = initNewDate.getMonth();
	dateDay = initNewDate.getDate();
	dateHours = initNewDate.getHours();
	dateMinute = initNewDate.getMinutes();

	if(dateDay <= 9){
		var x = '0';
		dateDay = x + dateDay;
	}

	if(dateMonth <= 9){
		dateMonth = x + dateMonth;
	}


	console.log(dateMonth);

	dateAll = `Create: ${dateDay}/${dateMonth}/${dateYear} - ${dateHours}:${dateMinute}`;

	return

}

function showCommentAdd(){

	for(var [key, value] of Object.entries(createComment)){

			createItem('p');
			createP = `${dateAll}`;
			createNewTime = createText(createP);
			divCreate.appendChild(createTxt);

			//create date post
			var divContent = divCreate; 

			createItem('div');

			divMensage =  `${value.Post}`;
			divComment = createText(divMensage);
			divCreate.appendChild(createTxt);

			divCreate.appendChild(divContent);

	 		divFather.insertBefore(divCreate, divChild);

	 		
	}
	return
}


function loadNewComment(){
	getInformation('box_comment');

	divFather = divLocate;

	getInformation('box_comment');

	divChild = divLocate.firstChild;

	showDate();

	showCommentAdd();	
}



function logout(){
	window.location = "index.html";
}
