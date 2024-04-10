/* JavaScript Starter Code */

let numbers = document.getElementById('initialNumbers');
let result = document.getElementById('permutedNumbers');
let btn = document.getElementById('btnPermute');
let resultDiv = document.getElementById('resultDiv');
let numArray = [];

function randomPermuteMe(numArray) {
  // ToDo
  let permutedArray = [...numArray]; 
  for (let i = permutedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [permutedArray[i], permutedArray[j]] = [permutedArray[j], permutedArray[i]]; 
  }
  return permutedArray;
}

window.onload = function() {
  // ToDo
  let input = prompt("Enter a list of numbers separated by commas:");
  numArray = input.split(",");
  numbers.textContent = numArray.join(", ");
}

btn.onclick = function() {
  // ToDo
  let permutedArray = randomPermuteMe(numArray);
  result.textContent = permutedArray.join(', '); 
}