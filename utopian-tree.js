/**
 * https://www.hackerrank.com/challenges/utopian-tree/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */
function utopianTree(n) {
  let height = 1;
  
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      height += 1;
    } else {
      height = height * 2;
    }
  }

  console.log(height);
  return height;
}

// utopianTree(1);
utopianTree(6);
// utopianTree(5);
// utopianTree(4);
