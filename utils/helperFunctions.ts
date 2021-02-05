
export const getMonthlyBalance = (accountBalanceObject: any) => { 
    return accountBalanceObject.account.balance.amount
  }
export const sortAccountsByMonth = (accountBalanceObject: any) => { 
    return accountBalanceObject.sort((a, b) => a.monthNumber - b.monthNumber);
  }

export const validateAccountLength = (accountBalanceObject: any) => { 
    if (accountBalanceObject.length < 3) {
        throw new Error('At least three months is required');
    }
  }  

export const calculateAccountType = (accountBalanceArray: any) => { 
    let inDiff: number;
    const diff: number = getMonthlyBalance(accountBalanceArray[1]) - getMonthlyBalance(accountBalanceArray[0]);
    for(let i = 1; i < accountBalanceArray.length - 1; i++) {
         inDiff = getMonthlyBalance(accountBalanceArray[i+1]) - getMonthlyBalance(accountBalanceArray[i])
            if(inDiff !== diff){
                return false; 
            } 
        }
    return true;    
}

