/**
 * https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?h_r=next-challenge&h_v=zen
 */

function climbingLeaderboard(scores, alice) {
  let allPositions = [];
  let arr = [...new Set(scores)];

  for (let i = 0; i < alice.length; i++) {
    let copy = [...arr];
    let positionInGame;

    for (let j = 0; j < copy.length; j++) {
      // console.log('Alice i', alice[i], 'over rank', copy[j])
      if (alice[i] < copy[j]) {
        positionInGame = j + 2;
      }

      if (alice[i] > copy[j]) {
        positionInGame = j + 1
        break;
      }

      if (alice[i] == copy[j]) {
        positionInGame = j + 1;
        break;
      }
    }

    // console.log(positionInGame)

    allPositions.push(positionInGame);
  }

  // console.log(allPositions)
  return allPositions;
}


// console.log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 100]));
console.log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102]));
