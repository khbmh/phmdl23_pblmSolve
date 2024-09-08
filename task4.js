/*

You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

*/

const phones = [
  { model: 'PhoneA', brand: 'Iphone', price: 95000 },
  { model: 'PhoneB', brand: 'Samsung', price: 40000 },
  { model: 'PhoneC', brand: 'Oppo', price: 26000 },
  { model: 'PhoneD', brand: 'Nokia', price: 35000 },
  { model: 'PhoneE', brand: 'Iphone', price: 105000 },
  { model: 'PhoneF', brand: 'HTC', price: 48000 },
];

function findAveragePhonePrice(phonesArr) {
  /*
   * iterate all object (phone details)
   * getting the price from all the object: object.key
   * sum the prices and divide it by the value of main array length to get the average
   */
  let average = 0;
  let sum = 0;
for (const element of phonesArr) {
  sum += element.price
}
average = sum / phonesArr.length
  return average.toFixed(2);
}
console.log(findAveragePhonePrice(phones));
