let btn = document.querySelector(".btn");
let changecolor = document.getElementById("change-color");
let body = document.querySelector("body");

let colors = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

function changeColor(){
    let hexcolor = "#";
    for(i=0;i<6;i++){
        hexcolor+= colors[Math.floor(Math.random() * colors.length)];
    }
    body.style.backgroundColor = hexcolor;
    changecolor.innerHTML = hexcolor;
}