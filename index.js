const CustBtn = document.getElementById("CustBtn");
const maincontainer = document.getElementById("maincontainer");
const close = document.getElementById("close");
const signupbtn = document.getElementById("signupbtn");
const card = document.getElementById("card");
const closeback = document.getElementById("closeback");

CustBtn.addEventListener("click",popupbox);
close.addEventListener("click",closebox);
closeback.addEventListener("click",closebox);
signupbtn.addEventListener("click",flipcard);

function popupbox(){
    maincontainer.style.display = "block";
}
function closebox(){
    maincontainer.style.display = "none";
}
function flipcard(){
    card.classList.toggle("flipcard");
}