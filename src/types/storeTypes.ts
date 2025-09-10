interface Transaction {
  key: string;
  description: string;
  amount: number;
  transactionType: string;
  date?: string;
}

interface StateType {
  allTransactions: Transaction[];
}

export type { Transaction, StateType };