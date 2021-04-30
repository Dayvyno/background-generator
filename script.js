var css = document.getElementsByTagName('h3')[0];
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button")

function changeBackColor(){
    var random1, random2;
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
    random1 = Math.floor(Math.random()*100);
    random2 = Math.floor(Math.random()*100);
    button.innerHTML = "Random 1: " + random1 + "<br>Random 2: " + random2
}


color1.addEventListener("input", changeBackColor)
color2.addEventListener("input", changeBackColor)