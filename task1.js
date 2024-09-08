/*

Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

*/

const heights2 = [167, 190, 120, 165, 137];

function lowestNum(numArr) {
  /*
   * take a variable to store the lowest number, first take the 0th value of the array
   * iterate all the values from the array and compare them with each other every time put the lowest number in the previously call variable
   * return the variable where lowest number is stored
   */
  let lowestNum = numArr[0];
  for (const element of numArr) {
    if (element < lowestNum) {
      lowestNum = element;
    }
  }
  return lowestNum;
}

console.log(lowestNum(heights2));
