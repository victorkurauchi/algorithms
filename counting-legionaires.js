function romanize(num) {
  let lookup = {
    M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1
  }
  let roman = '';
  let i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

function legionaires(N, x) {
  let result = 0;
  for (let i = 0; i < N + 1; i++) {
    let str = romanize(i);
    for (let j = 0; j < str.length; j++) {
      if (str[j] == x) result++;
    }
  }

  return result;
}

// console.log(legionaires(13, 1));
console.log(legionaires(2660, 'X'));
