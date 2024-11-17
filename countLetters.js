const assertEqual = require ('./.assertequal')
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
const result = countLetters("hello");

assertEqual(result["h"], 1); 
assertEqual(result["e"], 1);  
assertEqual(result["l"], 2); 
assertEqual(result["o"], 1);
            