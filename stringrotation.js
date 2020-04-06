// 12. String rotation

// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

//     Input: amazon, azonma

//     Output: False

//     Input: amazon, azonam

//     Output: true

const checkRotation = function (str1, str2) {
  let doMatch = false;
  for (let i = 0; i < string.length - 1; i++) {
    // set match to the value checked each combination of sub strings
    // each substring is calculated and remoformed at index i of the loop
    // checking all possible combinations
    match =
      rotatedString.substring(i, rotatedString.length) +
        rotatedString.substring(0, i) ===
      string;
  }
  return match;
};

// O(n)
