const map = function (array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item));
    }
    return results;
};

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
};

const assertArrayEqual = function (arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
        console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
};

const words = ["ground", "control", "to", "major", "tom"];
const expectedLengths = [6, 7, 2, 5, 3]; 

// Callback function to return the length of each word
const lengthCallback = function(word) {
    return word.length;
};


const result = map(words, lengthCallback);
assertArrayEqual(result, expectedLengths); 
