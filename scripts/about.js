const noOfBackgrounds = 2;
var i = 0;


function randomColor(){
    i = (i+1)%noOfBackgrounds;
	return "url(../assets/about_" + i.toString() + ".png)"+" center";
}

function setColor(){
	document.querySelector("body").style.background = randomColor();
	setTimeout(setColor,10000);
}

//==============================DEFINITIONS ABOVE THIS LINE===========================================================================
setColor()