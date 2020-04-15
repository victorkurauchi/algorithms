/**
 * https://www.hackerrank.com/challenges/angry-professor/
 */

function angryProfessor(k, a) {
  let threshold = k;
  let onTimePeople = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      onTimePeople.push(a[i]);
    }
  }

  if (onTimePeople.length < threshold) {
    // canceled
    console.log('YES');
    return 'YES';
  } else {
    console.log('NO');
    return 'NO';
  }
}

// angryProfessor(3, [-1, -3, 4, 2])
angryProfessor(2, [0, -1, 2, 1]) 
