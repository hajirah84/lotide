const assertEqual = require ('./.assertequal')

    const findKeyByValue = function(object, value) {
        const keys = Object.keys(object); 
        
    for (const allKeys of keys) {
        if (object[allKeys] === value) {
        return allKeys;
          }
        }
        
    return undefined; 
      };

    const bestTVShowsByGenre = {
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama: "The Wire",
      };
      
      assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
      assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
      