let input = "turpentine and turtles";

// Using these lowercase letters, create an array
const vowels = ["a", "e", "i", "o", "u"];

// Create a variable and set it equal to an empty array.
// This will serve as a place to store the vowels from the input string.
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]);
      }
    }
  }
}
// Declare a variable resultString that joins our resultArray into a single string and capitalizes all of its letters
const resultString = resultArray.join("").toUpperCase();
console.log(resultString);
