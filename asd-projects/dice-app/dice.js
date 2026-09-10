$(document).ready(function () {
  // Your code goes here
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", 50)
    .css("left", 50)
    .appendTo("#die");
});

function makeDot(top, left, dieID) {
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", top)
    .css("left", left)
    .appendTo(dieID);
}

function rollDie(dieID) {
  $(dieID).empty();
  var randomNum = Math.ceil(Math.random() * 6);
  console.log(randomNum);
  if (randomNum === 1) {
    makeDot(50, 50, dieID);
  } else if (randomNum === 2) {
    makeDot(25, 25, dieID);
    makeDot(75, 75, dieID);
  } else if (randomNum === 3) {
    makeDot(25, 25, dieID);
    makeDot(75, 75, dieID);
    makeDot(50, 50, dieID);
  } else if (randomNum === 4) {
    makeDot(75, 75, dieID);
    makeDot(25, 25, dieID);
    makeDot(25, 75, dieID);
    makeDot(75, 25, dieID);
  } else if (randomNum === 5) {
    makeDot(50, 50, dieID);
    makeDot(75, 75, dieID);
    makeDot(25, 25, dieID);
    makeDot(25, 75, dieID);
    makeDot(75, 25, dieID);
  } else if (randomNum === 6) {
    makeDot(25, 75, dieID);
    makeDot(50, 75, dieID);
    makeDot(75, 75, dieID);
    makeDot(25, 25, dieID);
    makeDot(50, 25, dieID);
    makeDot(75, 25, dieID);
  }
}

function handleClick() {
  rollDie("#die");
}

$("#die").on("click", handleClick);
