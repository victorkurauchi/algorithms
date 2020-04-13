/**
 * https://www.hackerrank.com/challenges/picking-numbers/problem
 */
function pickingNumbers(a) {
  let c = [],
      m = 0

  for (let i = a.length; i-- > 0;) {
    let v = a[i]
    if (isNaN(c[v]))
      c[v] = 1
    else
      ++c[v]
  }

  console.log('c', c)

  for (let i = c.length; i-- > 1;) {
    let v = c[i - 1]

    console.log('v', v)
    v = !isNaN(v) ? v + c[i] : c[i]

    if (v > m)
      m = v
  }

  return m
}

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]));
// console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
