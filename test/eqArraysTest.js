const assertEqual = require("../assertequal")
const eqArrays = require ("../eqArrays")
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays ([5,4,3], [[5,4,3]]), true);