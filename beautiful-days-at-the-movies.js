/**
 * https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 */

function beautifulDays(i, j, k) {
  let beautiful = [];

  while (i <= j) {
    let reversed = i.toString().split("").reverse().join("");
    let diff;
    
    if (i > reversed) {
      diff = i - Number(reversed)
    } else {
      diff = Number(reversed) - i;
    }

    let isBeautifulDay = (diff % k == 0);
    if (isBeautifulDay) {
      beautiful.push(i);
    }
    i++;
  }

  return beautiful.length
}

console.log(beautifulDays(20, 23, 6))
