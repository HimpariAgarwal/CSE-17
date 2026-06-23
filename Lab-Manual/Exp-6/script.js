let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 18;


// Change heading
document.getElementById("changeTextBtn").onclick = function(){

if(input.value.trim()!=""){
heading.innerHTML=input.value;
}

};


// Change background
document.getElementById("bgColorBtn").onclick = function(){

let color = "#" + Math.floor(Math.random()*16777215)
.toString(16);

document.body.style.backgroundColor=color;

};


// Increase font size
document.getElementById("fontSizeBtn").onclick = function(){

fontSize += 2;
paragraph.style.fontSize = fontSize + "px";

};


// Show Hide
document.getElementById("toggleBtn").onclick = function(){

if(paragraph.style.display=="none")
{
paragraph.style.display="block";
}
else
{
paragraph.style.display="none";
}

};


// Reset
document.getElementById("resetBtn").onclick=function(){

heading.innerHTML="Welcome to JavaScript Lab";

paragraph.style.display="block";
paragraph.style.fontSize="18px";

document.body.style.background="#f4f4f4";

input.value="";
fontSize=18;

};