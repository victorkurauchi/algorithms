/**
 Function Description

  Complete the function minimumBribes in the editor below. It must print an integer representing the minimum number of bribes necessary, or Too chaotic if the line configuration is not possible.

  minimumBribes has the following parameter(s):

  q: an array of integers

  Sample Input
  2
  5
  2 1 5 3 4
  5
  2 5 1 3 4
  Sample Output

  3
  Too chaotic
 */


function minimumBribes(q) {
  // too chaotic speical case
  for (let i = 0; i < q.length; i++) {
    if (q[i] > i+3) {
        console.log("Too chaotic");
        return;            
    }
  }

  // bubble sort count
  let count = 0;
  let i = 0;
  while (i < q.length - 1) {
    // console.log('i', i)
    if (q[i] > q[i+1]) {
      // console.log(`${q[i]} greater than ${q[i+1]}`)
        let x = q[i];
        q[i] = q[i+1];
        q[i+1] = x;

        count++;
        i-=2;   // i will be -1 instead of re-starting from the beginning. 
    }
    i++;
  }
  console.log(count);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
minimumBribes([ 2, 1, 5, 3, 4 ]);
minimumBribes([ 2, 5, 1, 3, 4 ]);
