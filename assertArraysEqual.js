
const eqArrays = require("./eqArrays"); // requiring eqArrays function because it will be used in the assertArraysEqual function

const assertArraysEqual = function (arr1, arr2) {
    if (eqArrays(arr1, arr2)) { //comparing both arrays
        console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
}
module.exports = assertArraysEqual; //exporting the function