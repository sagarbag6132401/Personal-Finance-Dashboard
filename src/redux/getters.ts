import type { RootState } from "./store";

export const selectAllItems = (state: RootState) =>{
  return state.transactionData.allTransactions;
}

export const selectItemById = (state: RootState, key: string) =>{
  return state.transactionData.allTransactions.find((item) => item.key === key);
}