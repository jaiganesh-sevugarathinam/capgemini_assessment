export const fetchTransactions = () => {
  const mockTransactions = [
    { customerId: 1, name: 'Curtis Abigail', month: 'June', amount: 119 },
    { customerId: 1, name: 'Curtis Abigail', month: 'July', amount: 12 },
    { customerId: 1, name: 'Curtis Abigail', month: 'August', amount: 198 },
    { customerId: 2, name: 'Lila Gabbard', month: 'June', amount: 80 },
    { customerId: 2, name: 'Lila Gabbard', month: 'July', amount: 0 },
    { customerId: 2, name: 'Lila Gabbard', month: 'August', amount: 40 },
    { customerId: 3, name: 'Lee Ryan', month: 'June', amount: 70 },
    { customerId: 3, name: 'Lee Ryan', month: 'August', amount: 88 },
    { customerId: 4, name: 'Mary Anne Holguin', month: 'July', amount: 0 },
    { customerId: 4, name: 'Mary Anne Holguin', month: 'August', amount: 0 },
    { customerId: 5, name: 'Cheryl Petersen', month: 'June', amount: 0 },
    { customerId: 5, name: 'Cheryl Petersen', month: 'August', amount: 120 },

    
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTransactions);
    }, 1000);
  });
};