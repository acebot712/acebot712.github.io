// !Make entry for all blogs here
const blogs = {
	tictactoe_minimax: {
		author: "Abhijoy Sarkar",
		date: "20200405",
		heading: "Tic Tac Toe AI using Minimax Algorithm".slice(0,45),    /*Example entry*/
		someText: ["#tech","#code","#minimax","#tictactoe","#ai","#adversialsearch"]
	},
	bw2color: {
		author: "Abhijoy Sarkar",
		date: "20200323",
		heading: "Colorful Image Colorization".slice(0,45),    /*Example entry*/
		someText: ["#tech","#paper","#zhang","#machinelearning","#cnn","#bw2color","#imagecolorize"]
	}
};

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

function populateBlogList(){
	const entries = Object.entries(blogs)
	var ul = document.getElementById("ul");
	for(const [blogID, blogDetails] of entries){
		var div = document.createElement("div");
		div.className = "card";
		div.style.width = '250px';

		var img = document.createElement("img");
		img.src = "../images/" + blogID + ".jpg";
		img.alt = "Card Image";
		img.style.width = div.style.width;
		img.style.height = div.style.width;

		var div2 = document.createElement("div")
		div2.className = "card-body";

		var h5 = document.createElement("h5")
		h5.innerHTML = blogDetails.heading;
		h5.className = "card-title";
		h5.style.height = "2em";

		var p = document.createElement("p")
		// Join the array
		var new_array = blogDetails.someText.map(function(e) { 
			e = "<mark>" + e + "</mark>"; 
			return e;
		});
		p.innerHTML = new_array.join(" ");
		p.className = "card-text";
		p.style.height = "5em";
		p.style.fontSize = "0.8rem";

		var a = document.createElement("a");
		a.href = "../blogs/" + blogID +  ".html";
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
	
function randomColor(){	
	return "url(../assets/background_" + Math.floor(Math.random() * noOfBackgrounds).toString() + ".jpg)"+" center top";
}

function setColor(){
	document.querySelector("body").style.background = randomColor();
	setTimeout(setColor,60000);
}

function searchFunction(){
	var input,filter,table, cardText, txtValue,txtValue2, count;
	input = document.getElementById("search");
	filter = input.value.toUpperCase();
	table = document.getElementById("ul");
	cards = document.querySelectorAll(".card");
	count = 0;

	for(var i=0;i<cards.length;i++){
		cardText = cards[i].querySelector(".card-text");
		cardTitle = cards[i].querySelector(".card-title");
		if(cardText){
			txtValue = cardText.textContent || cardText.innerText;
			txtValue = txtValue.replace(/#/gi,"");
			txtValue2 = cardTitle.textContent || cardTitle.innerText;
			if(txtValue.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1){
				cards[i].style.display = "";
			}else{
				cards[i].style.display = "none";
				count++;
				
			}
		}
	}

	var warning = document.getElementById("warning");
	if(count == cards.length){
		warning.style.display = "";
		warning.innerHTML = "&#9888 Oops! Cannot find keyword '" + input.value + "' in blog list.";
	}else{
		warning.style.display = "none";
	}
}

//==============================DEFINITIONS ABOVE THIS LINE===========================================================================


var isBlogArticle = document.querySelector("body").getAttribute("data-is-blog-article");
if(isBlogArticle == 1){
	

	$(window).scroll(function(){
		if($('button.navbar-toggler').attr('aria-expanded')=="false"){
			$('nav').toggleClass('scrolled', $(this).scrollTop() > 5);
			$('nav').toggleClass('navbar-dark', $(this).scrollTop() <= 5);
			$('nav').toggleClass('navbar-light', $(this).scrollTop() > 5);
		}	
	});

	$('button.navbar-toggler').click(function(){
		if($(window).scrollTop() <= 5){
			$('nav').toggleClass('scrolled',$('button.navbar-toggler').attr('aria-expanded'));
			$('nav').toggleClass('navbar-dark', $('button.navbar-toggler').attr('aria-expanded')=="true");
			$('nav').toggleClass('navbar-light', $('button.navbar-toggler').attr('aria-expanded')=="false");
		}
	});

	$(window).click(function(e){
		// console.log($(e.target).closest($('nav'))[0] != $('nav')[0]);
		// console.log($(e.target).closest($('nav'))[0]);
		// console.log($('nav')[0]);
		if($(e.target).closest($('nav'))[0] != $('nav')[0]){
			if($('button.navbar-toggler').attr('aria-expanded')){
				$('.navbar-collapse.collapse').removeClass("show");
				$('button.navbar-toggler').attr('aria-expanded',"false");
				$('button.navbar-toggler').addClass('collapsed');
				// remove scrolled only if not scrolled
				if($(this).scrollTop() <= 5)
					$('nav').removeClass('scrolled');
			}
		}		
	});
	



	setDate(document.querySelector("body").getAttribute("data-blog-id"));
	setAuthor(document.querySelector("body").getAttribute("data-blog-id"));
	setTitle(document.querySelector("body").getAttribute("data-blog-id"));
	document.querySelector("body").style.background = "url(../assets/background_0.jpg) center" //default
	setColor();
}else{
	populateBlogList();
}


mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};