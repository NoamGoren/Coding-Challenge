
import {sortAccountsByMonth,calculateAccountType,validateAccountLength} from "../utils/helperFunctions";

export const accountTypeChecker = (accountBalanceHistory: any) :string => {
    const accountTypeVaries : string = "A";
    const accountTypeFixed : string = "B";
    try {
        validateAccountLength(accountBalanceHistory)
        sortAccountsByMonth(accountBalanceHistory)
        const result: boolean = calculateAccountType(accountBalanceHistory);
        return result ? accountTypeFixed : accountTypeVaries ;  
    } catch (error) {
        throw Error(error);
    }
  };
