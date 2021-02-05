module.exports = {
 exampleCase : [
  {
    monthNumber: 0,
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, 
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2,
    account: {
      balance: { amount: 200 },
    },
  }
],

variableCase : [
  {
    monthNumber: 0,
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1,
    account: {
      balance: { amount: 120 },
    },
  },
  {
    monthNumber: 2,
    account: {
      balance: { amount: 200 },
    },
  }
],

 unorderedObjects : [
  {
    monthNumber: 1,
    account: {
      balance: { amount: 200 },
    },
  },
  {
    monthNumber: 0,
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 2,
    account: {
      balance: { amount: 400 },
    },
  }
],


lastMonthVariable: [
  {
    monthNumber: 0,
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 1, 
    account: {
      balance: { amount: 200 },
    },
  },
  {
    monthNumber: 2, 
    account: {
      balance: { amount: 300 },
    },
  },
  {
      monthNumber: 3, 
      account: {
        balance: { amount: 350 },
      },
    }
],


variableDifferences: [
  {
    monthNumber: 0, 
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, 
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2,
    account: {
      balance: { amount: 500 },
    },
  }
],


fromNegativeToPositive: [
  {
    monthNumber: 0, 
    account: {
      balance: { amount: 300 },
    },
  },
  {
    monthNumber: 1, 
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 2,
    account: {
      balance: { amount: -300 },
    },
  }
],

fromPositiveToNegative: [
  {
    monthNumber: 0, 
    account: {
      balance: { amount: -200 },
    },
  },
  {
    monthNumber: 1, 
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 2,
    account: {
      balance: { amount: 200 },
    },
    
  },
  {
    monthNumber: 3,
    account: {
      balance: { amount: 400 },
    },
    
  }
],
oneVariableMonth: [
  {
    monthNumber: 0,
    account: {
      balance: { amount: 0},
    },
  },
  {
    monthNumber: 1, 
    account: {
      balance: { amount: 400 },
    },
  },
  {
    monthNumber: 2, 
    account: {
      balance: { amount: 500 },
    },
  },
  {
      monthNumber: 3, 
      account: {
        balance: { amount: 600 },
      },
    },
    {
      monthNumber: 4, 
      account: {
        balance: { amount: 700 },
      },
    },
    {
      monthNumber: 5, 
      account: {
        balance: { amount: 800 },
      },
    },
],
}

