var crea = document.createElement("h3");
crea.innerText = `Criado Dinâmicamente!`;
document.querySelectorAll("div")[0].appendChild(crea);

var sXrea = document.createElement("textarea");
sXrea.innerHTML = `Criado Dinâmicamente!`;
document.querySelectorAll("div")[1].appendChild(sXrea);

var btn = document.querySelector("button");
btn.addEventListener("click", display);

function display() {
  var addImg = document.createElement("img");
  addImg.src = "flashpanther.jpg";
  document.querySelectorAll("div")[2].appendChild(addImg);
}
