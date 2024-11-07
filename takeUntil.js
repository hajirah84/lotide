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
        console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
}


function takeUntil(array, callback) {
    const result = [];
    
    for (const item of array) {
      if (callback(item)) {
        break;
      }
      result.push(item);
    }
    
    return result;
}
  
const data = [1, 2, 5, 7, 2, -1, 4, 5];
const expectedResult = [1, 2, 5, 7, 2];

assertArraysEqual(takeUntil(data, x => x < 0), expectedResult); 