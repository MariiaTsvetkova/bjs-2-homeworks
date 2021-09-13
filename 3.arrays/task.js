function compareArrays(arr1, arr2) {
  let result;

  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  if (arr1.length !== arr2.length) return false;
  
  result = arr1.every((item, idx) => { 
    if (arr2[idx] !== item) return false;
    return true
  }) 

  return result; // boolean
}

function advancedFilter(arr) {
  
  let resultArr = arr.filter((number) => number > 0 && number % 3 === 0).map((number) => number * 10);

  
  return resultArr; // array
}
