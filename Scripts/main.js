const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/imagem-jogos.png") {
    myImage.setAttribute("src", "imagens/Steam-deck.png");
  } else {
    myImage.setAttribute("src", "imagens/imagem-jogos.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Steam é daora, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Steam é daora, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};