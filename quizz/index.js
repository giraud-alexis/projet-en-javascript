const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const reponse = document.querySelector("p");

console.log(btn1, btn2);

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

//optionnel ci dessous----------
//btn1.addEventListener("click", () => {
//let answer = prompt("Enter votre nom !");
//questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
//});
//------------------------------

btn1.addEventListener("click", () => {
  reponse.classList.add("show-reponse");
  reponse.style.background = "green";
});

//optionnel ci dessous-----------
//btn2.addEventListener("click", () => {
//confirm("voulez vous vraiment vous tromper ?");
//});
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

//let interval = setInterval ---->créé un evenement tout les ?segonde//

//remove() --> enlève un element sur la page//

// location
// console. log(location.herf);
// console. log(location.host);
// console. log(location.pathname);
// console. log(location.search);
// location.replace("nom du site");

//windows.onload () => {
//location.herf = "http://facebook.com";
//};

//navigator//
//console.log(navigator.userAgent);

//localisation user//
//liens : https://developeur.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

//history
//console.log(history);
//window.history.back();

//----------------------------------
