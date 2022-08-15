/**
 * @Author: Samraj Soundarajan
 */

/**
 * Question:
 * Find the total number of same item present in an given dataset
 *
 */

let givenArray = [5, 5, 5, 3, 3, 3, 1];

// Expected [5, 3, 3, 3, 1, 1];

let uniqueArray = [...new Set(givenArray)];

let resultedArray = [];
// Simple Iteration
uniqueArray.forEach((element) => {
  let filteredArray = givenArray.filter((arr) => arr === element);
  resultedArray.push(element);
  resultedArray.push(filteredArray.length);
});

// Map Iteration

let mapArray = {};

givenArray.forEach((element) => {
  if (mapArray[element]) {
    mapArray[element] = mapArray[element] + 1;
  } else {
    mapArray[element] = 1;
  }
});

// Map Iteration Version 2

let mapArray2 = {};

uniqueArray.forEach((element) => {
  mapArray2[element] = givenArray.filter((arr) => arr === element).length;
});

console.log(mapArray2);
