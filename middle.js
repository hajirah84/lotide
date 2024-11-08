const eqArrays = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false; 
        }
    }
    return true; 
};

const assertArraysEqual = function (arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(arr1)} === ${inspect(arr2)}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)}`);
    }
};

const middle = function(arr) {
    const length = arr.length; 
    let i, j; 

    if (length % 2 === 0) { 
        i = length / 2;
        j = length / 2 - 1;
        return [arr[j], arr[i]]; 
    } else {
        i = Math.floor(length / 2);
        return [arr[i]]; 
    }
};
module.exports = middle; 
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); 
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);