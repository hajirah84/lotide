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

const flatten = function(arr) {
    const result = []; 
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    });
    return result;
    }

    return result; 