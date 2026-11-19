/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
/* This function makes the bubbles on the left sort using 
 the bubbleSort sorting algorithm by checking two elements and seeing
 if the element with the lower index has a greater value compared
 to the element with the higher index*/
async function bubbleSort(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        for (let j = array.length - 1; j >= i + 1; j--) {
            if (array[j].value < array[j - 1].value) {
                swap(array, j, j - 1);
                updateCounter(bubbleCounter);
                await sleep();
            }
        }
    }
}

// TODO 3: Implement quickSort
/* This function uses the quickSort sorting algorithm to sort 
    all values in a provided array from smallest to largest by
    partially dividing the array and sorting this partition, 
    then, using recursion on both the index values on the left and 
    right side of the partially sorted section, the function sorts the rest
    of the values */
async function quickSort(array, left, right) {
    if (right - left > 0) {
        var index = await partiton(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
}

// TODOs 4 & 5: Implement partition
/* This is a helper function creates the partition 
    needed in the first step of the quickSort function by 
    finding the random index to start at and end at then sorting
    these values by moving all values greater than the starting value
    to the right and all values less than the starting value to the
    left. To find the starting point, the function uses the 
    Math.floor method */
async function partiton(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)].value;
    while (left < right) {
        while (array[left].value < pivot) {
            left++;
        }
        while (array[right].value > pivot) {
            right--;
        }
        if (left < right) {
            swap(array, left, right);
            updateCounter(quickCounter);
            await sleep();
        }
    }
    return left + 1;
}


// TODO 1: Implement swap
/* This function uses array destruction to swap two elements
   of a provided array then it uses the drawSwap function to 
   draw what was done to the elements in the array */
function swap(array, i, j) {
[array[i], array[j]] = [array[j], array[i]];
drawSwap(array, i, j);
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}