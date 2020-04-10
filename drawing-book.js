/**
 * https://www.hackerrank.com/challenges/drawing-book/problem?h_r=next-challenge&h_v=zen
 */

function pageCount(n, p) {
  const pageTurns = Math.floor(p / 2);
  const totalTurns = Math.floor(n / 2);

  /* Returns the total number of page turns it takes to get
  to a page or how many it requires if starting from the back */

  return Math.min(pageTurns, totalTurns - pageTurns);
}

console.log(pageCount(5, 4));
console.log(pageCount(6, 2));
