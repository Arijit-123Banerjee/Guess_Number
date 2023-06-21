"use strict";
// Generating Random Number-----------------------------------------------
let Random = Math.trunc(Math.random() * 20) + 1;
let scorecount = 20;
let highScorecount = 0;
// Selecting Dom Elements-----------------------------------------------
let display = document.querySelector("#display");
let checkBtn = document.querySelector("#button_check");
let score = document.querySelector("#Score");
let highScore = document.querySelector("#HighScore");
let h1 = document.querySelector("#h1");
let p = document.querySelector("#p");

let body = document.querySelector("body");

// display the secret Contents --------------------------------

// Adding Event Listeners----------------------------------------------------
checkBtn.addEventListener("click", function () {
  let inputField = Number(document.querySelector("#guess").value);
  //   if there is no input ----------------------------------------------------------------
  if (inputField == "") {
    display.textContent = "Enter a Value🚫";
  }
  //   if the value come to 0----------------------------------
  else if (score.textContent == 1) {
    display.textContent = "Game Over";
    display.style.color = "red";
    score.textContent = 0;
    document.querySelector("#secret_number").textContent = Random;
  }
  //   if the random number and the inputfield is same---------------------------------
  else if (inputField === Random) {
    display.textContent = "Correct Guess🎉🎉";
    if (score.textContent > highScore.textContent) {
      highScore.textContent = score.textContent;
      highScorecount = highScore.textContent;
    }
    document.querySelector("#secret_number").textContent = Random;
    document.querySelector("#button_check").disabled = true;
    h1.style.color = "yellow";
    document.querySelector("#secret_number").style.backgroundColor = "yellow";
  }

  //   if the number is greater---------------------------------
  else if (inputField > Random) {
    display.textContent = "Try a Smaller Number";
    score.textContent = scorecount;
    scorecount--;
  }
  //   if the number is smaller------------------------------------
  else {
    display.textContent = "Try a Greater Number";
    score.textContent = scorecount;
    scorecount--;
  }
});
// reset part----------------------------
document.querySelector("#reset").addEventListener("click", function () {
  Random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("#guess").value = "";
  display.textContent = "Start Guessing...";
  scorecount = 20;
  score.textContent = scorecount;
  highScore.textContent = highScorecount;
  document.querySelector("#button_check").disabled = false;
  document.querySelector("#secret_number").textContent = "?";
  display.style.color = "white";
  h1.style.color = "white";
  document.querySelector("#secret_number").style.backgroundColor = "white";
});
