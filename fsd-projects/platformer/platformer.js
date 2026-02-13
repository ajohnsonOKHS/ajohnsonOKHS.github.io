$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(495, 650, 75, 100, "#4D6A92");
    createPlatform(570, 650, 350, 20, "#4D6A92");
    createPlatform(1000, 590, 52, 40, "#4D6A92");
    createPlatform(540, 475, 400, 48, "#4D6A92");
    createPlatform(400, 400, 100, 50, "#4D6A92");
    createPlatform(250, 325, 110, 35, "#4D6A92");
    createPlatform(250, 325, 110, 35, "#4D6A92");
    createPlatform(425, 225, 40, 60, "#4D6A92");
    createPlatform(680, 115, 100, 125, "#4D6A92");
    createPlatform(560, 335, 200, 48, "#4D6A92");
    // TODO 3 - Create Collectables
    createCollectable("softWheel", 1005, 545);
    createCollectable("mediumWheel", 715, 50);
    createCollectable("hardWheel", 1000, 185);

    
    // TODO 4 - Create Cannons
    createCannon("top", 1082, 1100);
    createCannon("left", 250, 800);
    createCannon("left", 650, 1100);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
