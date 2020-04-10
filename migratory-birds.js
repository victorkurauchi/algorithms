/**
 * https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */


function migratoryBirds(arr) {
  let occurences = {};
  let maxCount = 0;
  let maxKey;
  arr = arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (!occurences[val]) {
      occurences[val] = 1;
    } else {
      occurences[val] += 1;

      if (occurences[val] > maxCount) {
        maxCount = occurences[val];
        maxKey = val;
      }
    }
  }

  // console.log('oc', occurences)
  // console.log('maxCount', maxCount)
  // console.log('maxKey', maxKey)

  // return occurences;
  return maxKey;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))
