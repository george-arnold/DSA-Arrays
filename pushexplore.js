const Array = require("./arrays");

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  // arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);
  // ...
  // arr.pop();
  // arr.pop();
  // arr.pop();
  console.log(arr);
}

//What is the length, capacity and memory address of your array? (after arr.push(3))
//length: 1, 3, 0

// arr.push(5);
// arr.push(15);
// arr.push(19);
// arr.push(45);
// arr.push(10);

//What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
//length 6, cap 12, memory address 4)  Length is 6, because the array has 6 items in it. The cap is 12 because it extended after the 3rd item, 3+1 =4, 4*3 is 12. So the resize would use the value of 12.
// the memory address is marked by the first item in the array, and the resize of the array pushed a new array on top of the old one, so the first 3 blocks are empty and the 4th block is where the address of the current array begins

//What is the length, capacity, and address of your array?
// Explain the result of your program after adding the new lines of code.
// the length is 3, as 3 results have been popped off
// the capacity is 12, since pop does not effect the capacity
// the address is 4 since pop does not effect the address of the entire array, it just removes items from inside it

//Print the 1st item in the array arr.
//15
//Empty the array and add just 1 item: arr.push("tauhida");
// done
//Print this 1 item that you just added. What is the result? Can you explain your result?
// I'm not sure, it's not printing
//What is the purpose of the _resize() function in your Array class?
// the resize function creates additional memory space for new items in the array if the capacity of the array isn't large enough for the whole array
