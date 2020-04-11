/**
 * https://www.hackerrank.com/challenges/electronics-shop/problem?h_r=next-challenge&h_v=zen
 */

function getMoneySpent(keyboards, drives, b) {
  let maxSoFar = 0;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let sum = keyboards[i] + drives[j];
      if (sum > maxSoFar && sum <= b) {
        maxSoFar = sum;
      }
      // console.log('Sum', keyboards[i], 'plus', drives[j]);
      // console.log('max so far', maxSoFar)
    }
  }

  if (maxSoFar == 0) return -1;

  return maxSoFar;
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
