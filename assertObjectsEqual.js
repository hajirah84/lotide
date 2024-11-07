const inspect = require("util").inspect;

const assertObjectsEqual = function (obj1, obj2) {
    if (eqObjects(obj1, obj2)) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
    }
};

// Test cases
const object1 = { a: 1, b: 2, c: { d: 3 } };
const object2 = { a: 1, b: 2, c: { d: 3 } };
const object3 = { a: 1, b: 2, c: { d: 4 } };

assertObjectsEqual(object1, object2); 
assertObjectsEqual(object1, object3); 