/**
 * https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 */

function designerPdfViewer(h, word) {
  const map = {};

  for (let i = 0; i < h.length; i++) {
    let chr = String.fromCharCode(97 + i); // https://stackoverflow.com/a/3145054/1504455
    map[chr] = h[i];
  }

  let maxHeight = 0;
  for (let i = 0; i < word.length; i++) {
    // console.log('Letter', word[i], 'value', map[word[i]])
    if (map[word[i]] > maxHeight) {
      maxHeight = map[word[i]];
    }
  }

  // console.log('max height', maxHeight)
  return maxHeight * word.length;
}

console.log(designerPdfViewer(
  [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7],
  'zaba'
))
