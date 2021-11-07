document.querySelector('.selector').addEventListener('click',()=>{
    document.querySelector('.list').classList.toggle('show');
    document.querySelector('.down-arrow').classList.toggle('rotate180');
})

const arrow =document.getElementById("arrow");
const sign_in =document.getElementById("sign_in");

arrow.addEventListener('click',popupbox);

function popupbox()
{
    sign_in.style.display = "block";
}