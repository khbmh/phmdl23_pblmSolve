/*

Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk

Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

*/
const laptopPrice = 35000;
const tabletPrice = 15000;
const mobilePrice = 20000;
function calculateElectronicsBudget(totalLaptop, totalTablet, totalMobile) {
  return (
    laptopPrice * totalLaptop +
    tabletPrice * totalTablet +
    mobilePrice * totalMobile
  );
}
console.log(calculateElectronicsBudget(7, 12, 1));
