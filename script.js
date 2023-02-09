let rate = [1, 2, 3, 4, 5];

const thanks = document.getElementById("thanks");
const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rateagain");
const buttons = document.getElementById("buttons");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
let desc = document.getElementById("desc");

submit.addEventListener("click", () => {
  tyScreen();
});

function tyScreen() {
  thanks.classList.remove("none");
}

rateAgain.addEventListener("click", () => {
  homeScreen();
});

function homeScreen() {
  thanks.classList.add("none");
}

button1.addEventListener("click", () => {
  desc.innerHTML = "you selected " + rate[0] + " out of 5";
});

button2.addEventListener("click", () => {
  desc.innerHTML = "you selected " + rate[1] + " out of 5";
});

button3.addEventListener("click", () => {
  desc.innerHTML = "you selected " + rate[2] + " out of 5";
});

button4.addEventListener("click", () => {
  desc.innerHTML = "you selected " + rate[3] + " out of 5";
});

button5.addEventListener("click", () => {
  desc.innerHTML = "you selected " + rate[4] + " out of 5";
});
