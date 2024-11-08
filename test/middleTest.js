const assertArraysEqual = require ("../middle")
const eqArrays = require ("../middle");
const middle = require ("../middle")
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); 
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);