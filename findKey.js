const assertEqual = require ('./.assertequal')


const findKey = function(object, callback) {
    for (const key in object) {
    if (callback(object[key])) {
     return key;
     }
      }
    return undefined;
      };
      
    const result = findKey(
        {
          "Blue Hill": { stars: 1 },
          Akaleri: { stars: 3 },
          noma: { stars: 2 },
          elBulli: { stars: 3 },
          Ora: { stars: 2 },
          Akelarre: { stars: 3 },
        },
        (x) => x.stars === 2
      );
 assertEqual(result, "noma")