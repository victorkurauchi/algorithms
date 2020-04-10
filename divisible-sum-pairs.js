/**
 * https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?h_r=next-challenge&h_v=zen
 */

function divisibleSumPairs(n, k, ar) {
  let validPairs = 0;

  for (let i = 0; i < n; i++) {
    let val = ar[i];
    for (let j = i +1; j < n; j++) {
      // console.log('parent', val, 'current', ar[j]);
      // console.log(val + ar[j]);
      if ((val + ar[j]) % k == 0) {
        validPairs += 1;
      }
    }
  }

  return validPairs;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))

// console.log(9 % 3);
