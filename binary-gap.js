function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const binary = N.toString(2);
  let binaryGap = 0;
  let lastBinaryGap = -1;

  for (let i =0; i < binary.length; i++) {
    for (let j = i+1; j < binary.length; j++) {

      if (binary[i] == 1 && binary[j] == 0) {
          binaryGap++;
      } else if (binary[i] == 1 && binary[j] == 1) {
          if (binaryGap > lastBinaryGap) {
              lastBinaryGap = binaryGap;    
          }
          
          binaryGap = 0;
      }
        
    }
  }
  
  return lastBinaryGap == -1 ? 0 : lastBinaryGap;
}

const bgap = solution(1041);
