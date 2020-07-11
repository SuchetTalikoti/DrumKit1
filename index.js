var numofButton = document.querySelectorAll("button");
var i, btn_clicked;  
function switch_sound(key1){
switch(key1){
	case "w" :
		var audio = new Audio("sounds/tom-1.mp3");
		audio.play();
		break;
	case "a" :
		var audio = new Audio("sounds/tom-2.mp3");
		audio.play();
		break;
	case "s":
		var audio = new Audio("sounds/tom-3.mp3");
		audio.play();
		break;
	case "d" :
		var audio = new Audio("sounds/tom-4.mp3");
		audio.play();
		break;
	case "j":
		var audio = new Audio("sounds/snare.mp3");
		audio.play();
		break;
	case "k":
		var audio = new Audio("sounds/crash.mp3");
		audio.play();
		break;
	case "l" :
		var audio = new Audio("sounds/kick-bass.mp3");
		audio.play();
		break; 
	default : console.log(btn_clicked); 
}

}
for(i=0 ; i < numofButton.length; i++){
	numofButton[i].addEventListener("click",function (){ 
		btn_clicked = this.innerHTML;
		switch_sound(btn_clicked);
	});

}

addEventListener("keydown",function (event){
	// console.log(event.key);
switch_sound(event.key);
})