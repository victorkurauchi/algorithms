/**
https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

For example, assume her scores for the season are represented in the array . Scores are in the same order as the games played. She would tabulate her results as follows:
Complete the breakingRecords function in the editor below. It must return an integer array containing the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1 is for breaking least points records.

  breakingRecords has the following parameter(s):
 */

function breakingRecords(scores) {
  let maxScore = 0;
  let minScore = 0;
  let timesMinScored = 0;
  let timesMaxScored = 0;

  const length = scores.length;

  for (let i = 0; i < length; i++) {
    if (i == 0) {
      maxScore = scores[i];
      minScore = scores[i];
    } else {
      if (scores[i] > maxScore) {
        maxScore = scores[i]
        timesMaxScored++
      }
  
      if (scores[i] < minScore) {
        minScore = scores[i]
        timesMinScored++
      }
    }
  }

  console.log([timesMaxScored, timesMinScored]);
  return [timesMaxScored, timesMinScored];
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
