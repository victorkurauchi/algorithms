function findClosestSumInArrays(a, b, target) {
  const occur = {};

  for (let i = 0; i < a.length; i++) {
    console.log('----------')
    occur[a[i]] = a[i];

    for (let j = 0; j < a.length; j++) {
      let valueInFirstArray = a[i];

      if (valueInFirstArray + b[j] == target) {
        console.log('Found!')
        return;
      }
      console.log('Not found')
    }
  }

  // for (let i = 0; i < b.length; i++) {
  //   let valueInFirstArray = occ
  //   console.log(iterator.next().value);
  //   // console.log(occur[a[i]])
  //   if (b[i] + valueInFirstArray == target) {
  //     console.log('Found!')
  //     return;
  //   }

  //   console.log('Not found')
  // }

}

findClosestSumInArrays(
  [-1, 3, 8, 2, 9, 5],
  [21, 1, 2, 10, 5, 20],
  24
)
