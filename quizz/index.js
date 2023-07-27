const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const reponse = document.querySelector("p");

console.log(btn1, btn2);

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  reponse.classList.add("show-reponse");
  reponse.style.background = "green";
});

btn2.addEventListener("click", () => {
  reponse.classList.add("show-reponse");
  reponse.style.background = "red";
});
