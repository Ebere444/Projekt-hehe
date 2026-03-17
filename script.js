const image = document.getElementById("image");
const NavUi = document.getElementById("NavUi");
image.addEventListener("click", function(){
    image.classList.toggle("jelen");
    NavUi.classList.toggle("jelen");
})