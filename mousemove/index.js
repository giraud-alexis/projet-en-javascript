const blocContainer = document.querySelector(".click-event");
const titre = document.querySelector("h1");
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
});

blocContainer.addEventListener("mouseenter", () => {
  blocContainer.style.background = "rgba(0,0,0,0.6)";
});

blocContainer.addEventListener("mouseout", () => {
  blocContainer.style.background = "cyan";
});

titre.addEventListener("mouseover", () => {
  titre.style.transform = "rotate(10deg)";
});
