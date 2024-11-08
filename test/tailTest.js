const assertEqual = require("../assertequal")
const tail = require ("../tail")
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
// Tests
const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);  

const singleElementArray = ["Hello"];
const singleResult = tail(singleElementArray);
assertEqual(singleResult.length, 0); 