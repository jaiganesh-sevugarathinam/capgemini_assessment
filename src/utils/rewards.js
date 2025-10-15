export const calculatePoints = (amount) => {
  let points = 0;
  if (amount > 100) {
    points += 2 * (amount - 100);
    points += 50; // 1 point per dollar from $50 to $100
  } else if (amount >= 50) {
    points += amount - 50;
  }
  return points;
};

export const processTransactions = (transactions) => {
  const pointsByCustomer = {};

  transactions.forEach(({ customerId, name, month, amount }) => {
    if (!pointsByCustomer[customerId]) {
      pointsByCustomer[customerId] = {
        name,
        months: { June: 0, July: 0, August: 0 , September: 0, October: 0},
        total: 0,
      };
    }
    const points = calculatePoints(amount);
    pointsByCustomer[customerId].months[month] += points;
    pointsByCustomer[customerId].total += points;
  });

  return Object.values(pointsByCustomer);
};