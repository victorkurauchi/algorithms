function createPalindrome(input, b, isOdd) {
  let n = input;
  let palin = input;
  
  if (isOdd == 1)
    n = Math.floor(n / b);
  
  while (n > 0) {
    palin = palin * b + (n % b);
    n = Math.floor(n / b);
  }

  return palin;
}

function generatePalindromes(n) {
  let number = 0;
  let palindromes = [];
  
  for (let j = 0; j < 2; j++) {

    let i = 1;
    while ((number = createPalindrome(i, 10, j % 2)) < n)
    {
      palindromes.push(number);
      // console.log(number + " ");
      i++;
    }
  }

  const reducer = (acc, val) => acc + val;
  return palindromes.reduce(reducer, 0);
}

console.log(generatePalindromes(10000));

