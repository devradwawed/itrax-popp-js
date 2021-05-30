var myImges = Array.from( document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector(".light-box-container")

for(var i= 0 ; i < myImges.length; i++ ){
  myImges[i].addEventListener("click" , showBox)
}

function showBox (e) {
  var imgSrc = e.target.src;
  lightBoxContainer.style.display = "flex"
  lightBoxContainer.firstElementChild.style.backgroundImage ="url("+imgSrc+")";
}