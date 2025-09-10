import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { StateType, Transaction } from "../types/storeTypes";

const initialState: StateType = {
  allTransactions: [
    { key: "exp1", amount: 1200, date: "2024-01-01", transactionType: "Housing", description: "Rent" },
    { key: "exp2", amount: 350, date: "2024-01-02", transactionType: "Groceries", description: "Supermarket" },
    { key: "exp3", amount: 85, date: "2024-01-03", transactionType: "Transportation", description: "Gas" },
    { key: "exp4", amount: 45, date: "2024-01-04", transactionType: "Dining", description: "Restaurant" },
    { key: "exp5", amount: 29.99, date: "2024-01-06", transactionType: "Entertainment", description: "Streaming" },
  ],
};

const itemsSlice = createSlice({
  name: "transactionData",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Transaction>) => {
      state.allTransactions.push(action.payload);
    },
    readAllItems: (state, action: PayloadAction<Transaction[]>) => {
      state.allTransactions = action.payload;
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.allTransactions = state.allTransactions.filter(
        (item) => item.key !== action.payload
      );
    },
    updateItem: (state, action: PayloadAction<{ key: string; newData: Partial<Transaction> }>) => {
      const { key, newData } = action.payload;
      const index = state.allTransactions.findIndex((item) => item.key === key);
      if (index !== -1) {
        state.allTransactions[index] = {
          ...state.allTransactions[index],
          ...newData,
        };
      }
    },
  },
});



export const { addItem, deleteItem, updateItem, readAllItems } = itemsSlice.actions;
export default itemsSlice.reducer;
