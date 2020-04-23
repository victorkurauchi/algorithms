function palindrome(str) {
  if (str.length <= 1) return false;
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

function app(N) {
  let sum = 0;
  let i = 0;
  while (i < N) {

    if (palindrome(i.toString())) {
      sum += i;
    }

    i++
  }

  console.log(sum);
  return sum;
}

app(10000)
