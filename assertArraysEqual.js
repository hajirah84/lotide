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
    if (arr1.length !== arr2.length) {
        console.log("this array doesn't match");
    }

    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log("this array doesn't match"); 
        }
    }
    console.log("this array is a match"); // 
}