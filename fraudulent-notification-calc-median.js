function median(values) {

  values.sort((a,b) => a - b);

  let half = Math.floor(values.length/2);

  // console.log(values)
  // console.log('length', values.length % 2)
  // console.log('hald', half)
  // console.log('values[half-1]', values[half-1])
  // console.log('values[half]', values[half])
  if (values.length % 2)
    return values[half];
  else
    return (values[half-1] + values[half]) / 2.0;
}

function activityNotifications(expenditure, d) {
  const length = expenditure.length;

  if (d == length - 1) return 0;
  let priorTransaction = [];
  let notifications = 0;

  for (let i = 0; i < length; i++) {
    let spent = expenditure[i];
    if (i >= d && spent <= 200) {
      console.log('spent today', spent);
      console.log('prior', priorTransaction);
      let m = median(priorTransaction);
      console.log('median', m);

      console.log(`${spent} >= ${(2 * m)} ?`)

      if (spent >= (2 * m)) {
        notifications++
      }

      priorTransaction.splice(0, 1);

    }
    priorTransaction.push(spent);
  }

  console.log('notifications', notifications)
  return notifications;
}

// activityNotifications([10, 20, 30, 40, 50], 3)
activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5)

// console.log(median([3, 8, 9, 1, 5, 7, 9, 21]));
// console.log(median([20, 30, 40]));
