const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const reponse = document.querySelector("p");

console.log(btn1, btn2);

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

//optionnel ci dessous----------
btn1.addEventListener("click", () => {
  let answer = prompt("Enter votre nom !");
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});
//------------------------------

btn1.addEventListener("click", () => {
  reponse.classList.add("show-reponse");
  reponse.style.background = "green";
});

//optionnel ci dessous-----------
btn2.addEventListener("click", () => {
  confirm("voulez vous vraiment vous tromper ?");
});
//-------------------------------

btn2.addEventListener("click", () => {
  reponse.classList.add("show-reponse");
  reponse.style.background = "red";
});

// timer, compte a rebours
setTimeout(() => {
  questionContainer.style.background = "orange";
}, 3000);
//---------------------------
