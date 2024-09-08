/*

Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

*/
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(nameArr) {
  let smallestName = nameArr[0];
  for (const element of nameArr) {
    if (element.length < smallestName.length) {
      smallestName = element;
    }
  }
  return smallestName;
}

console.log(smallestName(heights2));
