function fibonacci(num) {
  let a = 1;
  let b = 0; 
  let temp;
  let oddSum = 0;

  while (num >= 0) {
    if (a % 2 !== 0 && a < 10000) {
      oddSum += a;
    }

    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return oddSum;
}

console.log(fibonacci(50));
