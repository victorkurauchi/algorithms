/**
 * Function Description

  Complete the function maximumToys in the editor below. 
  
  It should return an integer representing the maximum number of toys Mark can purchase.

  maximumToys has the following parameter(s):

  prices: an array of integers representing toy prices
  k: an integer, Mark's budget
 */

function maximumToys(prices, k) {
  const sorted = prices.sort((a, b) => a-b);
  const length = sorted.length;
  let sum = 0;
  let items = 0;

  for (let i = 0; i < length; i++) {
    sum += sorted[i];
    items = i + 1;

    if (sum + sorted[i+1] > k) {
      break;
    }
  }

  // console.log('sum', sum)
  // console.log('items', items)

  return items;
}

// maximumToys([1, 2, 3, 4], 7)
// maximumToys([1, 12, 5, 111, 200, 1000, 10], 50)
maximumToys([3, 7, 2, 9, 4], 15)
