const assertEqual = require("../assertequal")
const tail = require ("../tail")
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
const words = ["Hello", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);  
