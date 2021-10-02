const mainbutton = document.getElementById("mainbutton");
const maincontainer = document.getElementById("maincontainer");
const card = document.getElementById("card");
const mybutton = document.getElementById("mybutton");
const mybutton2 = document.getElementById("mybutton2");
const close = document.getElementById("close");

mainbutton.addEventListener("click",popupbox);
close.addEventListener("click",closebox);
mybutton.addEventListener("click",flipcard);
mybutton2.addEventListener("click",flipcardback);

function popupbox(){
    maincontainer.style.display = "block";
    
}
function flipcard(){
    card.classList.toggle("flipcard");
}
function flipcardback(){
    card.classList.toggle("flipcard");
}
function closebox(){
    maincontainer.style.display = "none";
}