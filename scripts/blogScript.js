const blogs = [
	{
		author: "Abhijoy Sarkar",
		date: "20200323",
		heading: "Colorful Image Colorization".slice(0,45),    /*Example entry*/
		someText: "Implementation based on Zhang et al.'s paper".slice(0,70)
	},
	{
		author: "Abhijoy Sarkar",
		date: "20200405",
		heading: "Tic Tac Toe AI using Minimax Algorithm".slice(0,40),    /*Example entry*/
		someText: "Implementation of adverserial search AI to play tic tac toe".slice(0,70)
	}
];

const noOfBackgrounds = 15;


function getArticleDate(blogID){
	var date = blogs[blogID].date; /*Contains date string*/
	return {
		year: parseInt(date.slice(0,4)),
		month: parseInt(date.slice(4,6)),
		day: parseInt(date.slice(6))
	};
}

function setDate(blogID){
	const monthNames = ["January", "February", "March", "April", "May", "June",
	  "July", "August", "September", "October", "November", "December"
	];

	var date = document.getElementById("date");
	const {year, month, day} = getArticleDate(blogID);
	var d = new Date(year,month - 1,day);
	date.innerText = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}

function setAuthor(blogID){
	var author = document.getElementById("author");
	author.innerText = blogs[blogID].author;
}

function setTitle(blogID){
	var heading = document.getElementById("heading");
	heading.innerText = blogs[blogID].heading;
}

		/*
		<div class="card" style="width:400px">
		    <img class="card-img-top" src="../images/0_blog.jpg" alt="Card image" style="width:100%">
		    <div class="card-body">
		      <h4 class="card-title">John Doe</h4>
		      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
		      <a href="#" class="btn btn-primary">See Profile</a>
	    	</div>
	    </div>
	    */

function populateBlogList(){
	var ul = document.getElementById("ul");
	for(var i = 0;i < blogs.length; i++){
		var div = document.createElement("div");
		div.className = "card";
		div.style.width = '250px';

		var img = document.createElement("img");
		img.src = "../images/" + i +"_blog.jpg";
		img.alt = "Card Image";
		img.style.width = div.style.width;
		img.style.height = div.style.width;

		var div2 = document.createElement("div")
		div2.className = "card-body";

		var h5 = document.createElement("h5")
		h5.innerHTML = blogs[i].heading;
		h5.className = "card-title";
		h5.style.height = "2em";

		var p = document.createElement("p")
		p.innerHTML = blogs[i].someText;
		p.className = "card-text";
		p.style.height = "5em";
		p.style.fontSize = "0.8rem";

		var a = document.createElement("a");
		a.href = "../blogs/" + i + "_blog.html";
		a.className = "btn btn-primary";
		a.innerHTML = "Read More";
		a.style.width = "200px";

		//var div = document.createElement("div");
		//div.className = "list-item"
		//===

		//=====
		div2.appendChild(h5);
		div2.appendChild(p);
		div2.appendChild(a);

		//a.appendChild(div)
		div.appendChild(img);
		div.appendChild(div2);

		ul.appendChild(div);

	}
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	  mybutton.style.display = "block";
	} else {
	  mybutton.style.display = "none";
	}
  }
  
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  
function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}
	
var i = 0;
function randomColor(){
	i = (i+1)%noOfBackgrounds;
	return "url(../assets/background_" + i.toString() + ".jpg)"+" center";
}

function setColor(){
	document.querySelector("body").style.background = randomColor();
}

// This is how to use media queries in JavaScript
var x = window.matchMedia("(max-width: 600px)")
document.querySelector("body").style.background = "url(../assets/background_0.jpg) center"
function checker(x){
	if(x.matches){
		document.querySelector("body").style.background = "url(../assets/background_0.jpg) center";
	}else{
		sleep(30000);
		setColor();
	}
	setTimeout(checker,1000,x)
}

//==============================DEFINITIONS ABOVE THIS LINE===========================================================================


var isBlogArticle = document.getElementById("isBlogArticle").innerText
if(isBlogArticle == 1){
	setDate(document.getElementById("blogID").innerText)
	setAuthor(document.getElementById("blogID").innerText)
	setTitle(document.getElementById("blogID").innerText)
	checker(x)
}else{
	populateBlogList();
}


mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};