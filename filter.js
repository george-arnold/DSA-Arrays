// 6. Filtering an array

// Imagine you have an array of numbers.
//Write an algorithm to remove all numbers less than 5 from the array.
//DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

function filter(array) {
  var result = [];
  array.forEach((item) => {
    //runs number of times = length of array
    if (item >= 5) {
      //constant
      result.push(item);
    }
  });
  return result;
}
// big O -> O(n)
