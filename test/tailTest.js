// const assertEqual = require("../assertequal")
// const tail = require ("../tail")
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
// Tests
// const words = ["Hello", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);  

// const singleElementArray = ["Hello"];
// const singleResult = tail(singleElementArray);
// assertEqual(singleResult.length, 0); 
const assert = require('chai').assert;
const tail = require('../tail'); 

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
    assert.strictEqual(words.length, 3); 
  });

  it("returns an empty array for a single-element array ['Hello']", () => {
    const singleElementArray = ["Hello"];
    const result = tail(singleElementArray);
    assert.strictEqual(result.length, 0); 
  });
});