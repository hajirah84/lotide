const assertEqual = require("../assertequal")
const tail = require ("../tail")
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
console.log(words.length === 3); // original array should still have 3 elements!
