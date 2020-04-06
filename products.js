// Given an array of numbers,
// write an algorithm to find out the products of every other number except the number at each index.

//     Input:[1, 3, 9, 4]
//     Output:[108, 36, 12, 27]

const productOfArrayExceptSelf = function (array) {
  let resultArray = [],
    product;
  for (let i = 0; i < array.length; i++) {
    product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product *= array[j];
      }
    }
    resultArray.push(product);
  }
  return resultArray;
};

//Big O(n^k)
