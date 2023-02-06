// var rate = 0;

const thanks = document.getElementById("thanks");
const submit = document.getElementById("submit");
var buttons = document.getElementById("button-1").innerHTML;
const desc = document.getElementById("desc");

// document.querySelector("#submit").addEventListener("click", () => {
//   document.querySelector("#thanks").classList.remove("none");
// });

submit.addEventListener("click", () => {
  tyScreen();
});

function tyScreen() {
  thanks.classList.remove("none");
}

desc.innerHTML = "you selected " + buttons + " out of 5";

// buttons.addEventListener("click", () => {
//   countRate();
// });

// function countRate() {
//   rate = buttons;
// }
