// Imagine you have 2 arrays which have already been sorted.
//Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

//     Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
//     Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

const mergeAndSort = function (arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result[k] = arr1[i];
      i++;
      k++;
    } else {
      result[k] = arr2[j];
      j++;
      k++;
    }
  }
  while (i < arr1.length) {
    result[k++] = arr1[i++];
  }
  while (j < arr2.length) {
    result[k++] = arr2[j++];
  }
  return result;
};

// Big O --> (O(n))
