/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var boardWidth = parseInt($("#board").width());
  var boardHeight = parseInt($("#board").height());
  // Game Item Objects
  // This object holds all the key values so that they are not magic numbers
  const KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };
  // This object holds vital information about the walker 
  var walker = {
    x: 0,
    y: 0,
    width: parseInt($("#walker").width()),
    height: parseInt($("#walker").height()),
    speedX: 0,
    speedY: 0
  };
  
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)

  //helpful variable that need to be declared after the objects
  //Variables that find the right and bottom of the walker
  walker.rightSide = walker.x + walker.width;
  walker.bottom = walker.y + walker.height;
  //Variables that find the max x and max y of the border
  //var maxX = boardWidth - walker.x;
  //var maxY = boardHeight - walker.y;
  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();

    wallCollision();

    redrawGameItem();
  }

  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
 // This function changes the walkers speed based on what arrow key is pressed
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      walker.speedX = -5;
    }
    if (event.which === KEY.UP) {
      walker.speedY = -5;
    }
    if (event.which === KEY.RIGHT) {
      walker.speedX = 5;
    }
    if (event.which === KEY.DOWN) {
      walker.speedY = 5;
    }
    console.log(event.which);
  }
  // This function makes the walker stop moving when any arrow key in released
  function handleKeyUp(event) {
    if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
      walker.speedX = 0;
    }
    if (event.which === KEY.UP || event.which === KEY.DOWN) {
      walker.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  // This function ends the game
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  //This function repositions the walker based on its speed
  function repositionGameItem() {
    walker.x += walker.speedX;
    walker.y += walker.speedY;
    walker.rightSide += walker.speedX;
    walker.bottom += walker.speedY;
  }
  //This function redraws the walker on the screen using its css values
  function redrawGameItem() {
    $("#walker").css("left", walker.x);
    $("#walker").css("top", walker.y);
    $("#walker").css("right", walker.rightSide);
    $("#walker").css("bottom", walker.bottom);
  }
  /* This function checks if the walker hits the border of the screen
     and changes its speed if it does */
  function wallCollision() {
    if (walker.x < 0 || walker.rightSide > boardWidth) {
      walker.x -= walker.speedX;
    }
    if (walker.y < 0 || walker.bottom > boardHeight) {
      walker.y -= walker.speedY;
    }
  }
  
}
