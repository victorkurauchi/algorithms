/**
 * https://www.hackerrank.com/challenges/save-the-prisoner/problem
 */

function saveThePrisoner(n, m, s) {
  const prisoners = n;
  const sweets = m;

  return (sweets-1 + s) % prisoners || prisoners;
}

// saveThePrisoner(5, 2, 1);
// saveThePrisoner(5, 2, 2);
// saveThePrisoner(7, 19, 2);
// saveThePrisoner(3, 7, 3);
// saveThePrisoner(559033664, 822024089, 131746755);
// saveThePrisoner(488548761, 788602693, 77870628)
// saveThePrisoner(778215945, 909050919, 708988472);
// saveThePrisoner(8356530, 190030533, 2613496)
