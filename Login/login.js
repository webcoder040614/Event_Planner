const CustBtn = document.getElementById("CustBtn");
const maincontainer = document.getElementById("maincontainer");
const close = document.getElementById("close");
const card = document.getElementById("card");
const back_close = document.getElementById("back_close");
const bg_image = document.getElementById("bg_image");
const signupbtn = document.getElementById("signupbtn");
const Signinbtn = document.getElementById("Signinbtn");

CustBtn.addEventListener("click",popupbox);
close.addEventListener("click",closebox);
back_close.addEventListener("click",closebox);
signupbtn.addEventListener("click",flipcard);
Signinbtn.addEventListener("click",flipcard);

function popupbox(){
    maincontainer.style.display = "block";
    /* Add the blur effect */
    bg_image.style.filter = "blur(5px)";

}
function closebox(){
    maincontainer.style.display = "none";
    bg_image.style.filter = "none";
}
function flipcard(){
    card.classList.toggle("flipcard");
}