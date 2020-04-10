/**
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem?h_r=next-challenge&h_v=zen
 */

function birthday(s, d, m) {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < m; i++) sum += s[i];

  if (sum === d) count++;

  for (let i = m, j = 0; i < s.length; i++) {
    sum -= s[j]
    sum += s[i]
    j++
    if (sum === d) count++
  }

  return count;
}


console.log(birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7))
console.log(birthday([1, 2, 1, 3, 2], 3, 2))
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2))
console.log(birthday([4], 4, 1))
