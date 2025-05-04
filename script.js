alert("Welcome to the Water Counter App!");
const glassCountDisplay = document.getElementById("glass-count");
const addGlassButton = document.getElementById("add-glass");
const resetButton = document.getElementById("reset-count");
const messageDisplay = document.getElementById("message");
let count = 0;
const dailyGoal = 8;

addGlassButton.addEventListener("click", () => {
  count++;
  glassCountDisplay.textContent = count;
  if (count >= dailyGoal) {
    messageDisplay.textContent = "Great! You are fully hydrated.";
  } else {
    messageDisplay.textContent = "Drink more water to be fully hydrated.";
  }
});

resetButton.addEventListener("click", () => {
  count = 0;
  glassCountDisplay.textContent = count;
  messageDisplay.textContent = "All history reseted. Start drinking again.";
});
