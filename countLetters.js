const assertEqual = function (actual, expected) {
    if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  }
function countLetters(str) {
let letters = {};
for (let character of str) {
  if ((character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')) {
    if (letters[character]) {
      letters[character]++;
    } else {
      letters[character] = 1;
    }
  }
}

return letters;
}
            