/**
 * https://www.hackerrank.com/challenges/circular-array-rotation/problem?h_r=next-challenge&h_v=zen
 */

// let numbers = [1, 1, 3, 4, 5, 2, 2];
// console.log(numbers.unshift(numbers.pop()));
// console.log(numbers);

function circularArrayRotation(a, k, queries) {
  let i = 0;
  while (i < k) {
    a.unshift(a.pop());
    // console.log('rotation', i, a); 
    i++;
  }

  for (let j of queries) {
    console.log(a[j]);
    result.push(a[j])
  }

  return result;
}

circularArrayRotation([ 1, 2, 3 ], 2, [ 0, 1, 2 ])
