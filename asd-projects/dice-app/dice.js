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

  $("<div2>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "teal")
    .css("position", "absolute")
    .css("top", 50)
    .css("left", 50)
    .appendTo("#secondDie");

  function makeDot(top, left, elementID) {
    $("<div>")
      .css("height", 15)
      .css("width", 15)
      .css("background-color", "black")
      .css("position", "absolute")
      .css("top", top)
      .css("left", left)
      .appendTo(elementID);
  }

  function rollDie(elementID) {
    $(elementID).empty();
    var randomNum = Math.ceil(Math.random() * 6);
    //console.log(randomNum);
    if (randomNum === 1) {
      makeDot(50, 50, elementID);
    } else if (randomNum === 2) {
      makeDot(25, 25, elementID);
      makeDot(75, 75, elementID);
    } else if (randomNum === 3) {
      makeDot(25, 25, elementID);
      makeDot(75, 75, elementID);
      makeDot(50, 50, elementID);
    } else if (randomNum === 4) {
      makeDot(75, 75, elementID);
      makeDot(25, 25, elementID);
      makeDot(25, 75, elementID);
      makeDot(75, 25, elementID);
    } else if (randomNum === 5) {
      makeDot(50, 50, elementID);
      makeDot(75, 75, elementID);
      makeDot(25, 25, elementID);
      makeDot(25, 75, elementID);
      makeDot(75, 25, elementID);
    } else if (randomNum === 6) {
      makeDot(25, 75, elementID);
      makeDot(50, 75, elementID);
      makeDot(75, 75, elementID);
      makeDot(25, 25, elementID);
      makeDot(50, 25, elementID);
      makeDot(75, 25, elementID);
    }
  }

  function handleClick() {
    rollDie("#die");
  }

  function handleClick2() {
    rollDie("#secondDie");
  }

  $("#die").on("click", handleClick);
  $("#secondDie").on("click", handleClick2);
});
