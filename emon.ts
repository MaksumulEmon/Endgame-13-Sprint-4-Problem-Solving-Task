function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
// Output: "olleh"





function findLargest(numbers: number[]): number {
  return Math.max(...numbers);
}

console.log(findLargest([10, 25, 7, 40, 15]));
// Output: 40









// function checkEvenOdd(num: number): string {
//   if (num % 2 === 0) {
//     return "Even";
//   }

//   return "Odd";
// }

// console.log(checkEvenOdd(10));
// Output: "Even"