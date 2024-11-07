const eqArrays = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false; 
        }
    }
    return true; // 
}

const assertArrayEqual = function (arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
        console.log ("✅✅✅")
    } else {
        console.log("🛑🛑🛑")
    }
}

const letterPositions = function (sentence) { 
const results = {}; 
for (let i=0; i<sentence.length; i++) { 
let index = sentence[i];
if (index === " ") continue;
    if (!results[char]) {
      results[char] = [];
    }
    results[char].push(i);
  }
  
return results; 
};

assertArraysEqual(letterPositions("hello").e, [1]);
