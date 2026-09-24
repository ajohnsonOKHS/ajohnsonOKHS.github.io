$(document).ready(function () {
  // Your code goes here
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", 40)
    .css("left", 40)
    .appendTo("#die");

  $("<div2>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "teal")
    .css("position", "absolute")
    .css("top", 40)
    .css("left", 40)
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
      makeDot(40, 40, elementID);
    } else if (randomNum === 2) {
      makeDot(15, 15, elementID);
      makeDot(65, 65, elementID);
    } else if (randomNum === 3) {
      makeDot(15, 15, elementID);
      makeDot(65, 65, elementID);
      makeDot(40, 40, elementID);
    } else if (randomNum === 4) {
      makeDot(65, 65, elementID);
      makeDot(15, 15, elementID);
      makeDot(15, 65, elementID);
      makeDot(65, 15, elementID);
    } else if (randomNum === 5) {
      makeDot(40, 40, elementID);
      makeDot(65, 65, elementID);
      makeDot(15, 15, elementID);
      makeDot(15, 65, elementID);
      makeDot(65, 15, elementID);
    } else if (randomNum === 6) {
      makeDot(15, 65, elementID);
      makeDot(40, 65, elementID);
      makeDot(65, 65, elementID);
      makeDot(15, 15, elementID);
      makeDot(40, 15, elementID);
      makeDot(65, 15, elementID);
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
