// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
/*This function changes the image by changing the rgb string values
to arrays then back to strings while allowing the pixel value to change
*/
function applyFilter(filterFunction) {
  for (var r = 0; r < image.length; r++) {
    var row = image[r];
    for (var c = 0; c < row.length; c++) {
      console.log(image[r][c]);
      // pixel looks like "rgb(150, 150, 150)"
      var pixel = image[r][c];
      console.log("pixel:", pixel);
      // pixel looks like "[100, 50, 0]"
      var pixelArray = rgbStringToArray(pixel);
      console.log("pixelArray:", pixelArray);
      // This is where I'll modify the color values later
      filterFunction(pixelArray);
      // pixel looks like "rgb(100, 50, 0)"
      var updatedPixel = rgbArrayToString(pixelArray);
      image[r][c] = updatedPixel;
      console.log("updatedPixel:", updatedPixel);
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
/*This function applies the filter that is chosen as an argument
without changing the backgroung of the image
*/
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++) {
    var row = image[i];
    for (var j = 0; j < row.length; j++) {
      var pixel = image[i][j];
      if (pixel !== backgroundColor) {
        var pixelArray = rgbStringToArray(pixel);
        filterFunction(pixelArray);
        var updatedPixel = rgbArrayToString(pixelArray);
        image[i][j] = updatedPixel;
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
/* This function keeps the value of each pixel, 0 to 225, so that 
 it stays withing the appropriate rgb values
*/
function keepInBounds(num) {
  return num < 0 ? 0 : num > 255 ? 255 : num;
}

// TODO 4: Create reddify filter function
//This function gives the image a red tent
function reddify(pixelArr) {
  pixelArr[RED] = 200;
}

// TODO 7 & 8: Create more filter functions
//This function removes the blue tint from the image
function decreaseBlue(pixelArr) {
  pixelArr[BLUE] -= 50;
  pixelArr[BLUE] = keepInBounds(pixelArr[BLUE]);
}
//This function gives the image a green tint within rgb values
function increaseGreenByBlue(pixelArr) {
  var diffGreen = pixelArr[GREEN] + pixelArr[BLUE];
  pixelArr[GREEN] = keepInBounds(diffGreen);
}

// CHALLENGE code goes below here