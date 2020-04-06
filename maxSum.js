// You are given an array containing positive and negative integers. Write an algorithm which will
//find the largest sum in a continuous sequence.

//     Input: [4, 6, -3, 5, -2, 1]
//     Output: 12

const maxSum = function (array) {
  result = 0;
  maxResult = 0;
  for (let i = 0; i < array.length; i++) {
    //linear
    // only add to result but only return if the result is bigger than previous result
    result += array[i];
    if (result > maxResult) {
      //constant
      maxResult = result;
    }
  }
  return maxResult;
};

// big O -> O(n)
