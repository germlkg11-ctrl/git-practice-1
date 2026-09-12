// Exercise 2b: a click counter
const countButton = document.querySelector("#count-button");
const countMessage = document.querySelector("#count-message");
let clicks = 0;
function countClick() {
  clicks++;
  countMessage.textContent = "You have clicked " + clicks + " times.";
}
countButton.addEventListener("click", countClick);