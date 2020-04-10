/**
 * https://www.hackerrank.com/challenges/bon-appetit/problem
 */

function bonAppetit(bill, k, b) {
  let total = bill.reduce((acc, current) => acc + current, 0)
  let shouldBe = (total - bill[k]) / 2;

  // console.log('Should pay equally', shouldBe);
  // console.log('Charged ', b)

  if (b == shouldBe) {
    console.log('Bon Appetit');
  } else if (b > shouldBe) {
    console.log(b - shouldBe);
  }
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
console.log(bonAppetit([3, 10, 2, 9], 1, 7));
