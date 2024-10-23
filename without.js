const eqArrays = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false; 
        }
    }
    return true; // 
}

const assertArrayEqual = function (arr1, arr2) {
    if (eqArrays(arr1, arr2)) {
        console.log ("✅✅✅")
    } else {
        console.log("🛑🛑🛑")
    }
}

const without = function(source,itemsToRemove){
    return !itemsToRemove.includes(source);
};
const result = source.filter(without);
console.log(result);





without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]