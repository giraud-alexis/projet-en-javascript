//evenement au scroll sur une donné précise

const nav = document.querySelector("nav");
//
//window.addEventListener("scroll", () => {
//  if (window.scrollY > 120) {
//    nav.style.top = 0;
//  } else {
//    nav.style.top = "-50px";
//  }
//});
//-----------------------------------

//evenement au scroll sur la derniere donné renseigner

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-50px";
  }
  lastScroll = window.scrollY;
});
//---------------------------------

//evenement suivi de souris navbar//
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
//----------------------------
