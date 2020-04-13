/**
 * https://www.hackerrank.com/challenges/the-hurdle-race/problem?h_r=next-challenge&h_v=zen
 */

function hurdleRace(k, height) {
  const max = Math.max(...height);
  // console.log('max he can jump', max);

  if (k >= max) return 0

  const minDoses = Math.abs(max - k);
  // console.log('min doses', minDoses);

  return minDoses;
}


// hurdleRace(4, [1, 6, 3, 5, 2]);
hurdleRace(7, [2, 5, 4, 5, 2]);
