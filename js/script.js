const body = document.querySelector("body");
const colorInput = document.querySelector("#color-input");
const changeColorBtn = document.querySelector("#change-color");
const copyColorBtn = document.querySelector("#copy-color");
const eventMessage = document.querySelector(".event-message");
const form = document.querySelector("form");
let hexcolor;

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function changeColor() {
    hexcolor = "#";
	for (i = 0; i < 6; i++) {
		hexcolor += colors[Math.floor(Math.random() * colors.length)];
	}
	body.style.backgroundColor = hexcolor;
	colorInput.value = hexcolor;
    eventMessage.innerHTML = "";
}
changeColorBtn.addEventListener("click", changeColor);

function copyColor() {
	colorInput.select();
	document.execCommand("copy");
	eventMessage.innerHTML = `<b>${colorInput.value}</b> Copied!`;
}
copyColorBtn.addEventListener("click", copyColor);

form.addEventListener("submit", function(event){
    event.preventDefault();
    eventMessage.innerHTML = "";
    if(colorInput.value.includes("#")){
        hexcolor = "";
    }else{
        hexcolor = "#";
    }
    hexcolor += colorInput.value;
    body.style.backgroundColor = hexcolor;
    if(colorInput.value.length >= 9){
        eventMessage.innerHTML = "Please enter valid code";
    }
})