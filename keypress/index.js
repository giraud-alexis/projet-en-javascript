const keypressContainer = document.querySelector(".keypress");
const key = document.querySelector("#key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Audio2.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "Enter") {
    keypressContainer.style.background = "red";
  } else if (e.key === "0") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "black";
  }

  ring();
});
