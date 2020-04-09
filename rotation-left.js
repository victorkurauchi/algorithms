/**
A left rotation operation on an array shifts each of the array's elements  unit to the left. 
For example, if  left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2].

Given an array a of n integers and a number, d, 
perform d left rotations on the array. 

Return the updated array to be printed as a single line of space-separated integers.

**/

function rotLeft(a, d) {
  const headIndex = d % a.length;
  console.log('head index', headIndex);
  const head = a.splice(0, headIndex);
  console.log('head', head);
  console.log('a', a);
  a.push(...head);
  return a
}

const arr = [1, 2, 3, 4, 5]
const result = rotLeft(arr, 4)

console.log('result', result)
