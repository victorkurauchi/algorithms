/**
 * https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */

/**
 * 
 * @param {cat A} x 
 * @param {cat B} y 
 * @param {mouse C} z 
 */ 
function catAndMouse(x, y, z) {
  let catA = Math.abs(z - x)
  let catB = Math.abs(z - y)

  console.log('distance for cat A', catA)
  console.log('distance for cat B', catB)

  if (catA == catB) {
    return 'Mouse C'
  }

  if (catA > catB) {
    return 'Cat B'
  }

  return 'Cat A'

}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));
