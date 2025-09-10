export type CardProps = {
  icon: string;
  amount: number;
  amountType: string;
};
export interface DataType {
  key: React.Key;
  description: string;
  amount: number;
  transactionType: string;
}

export interface Transaction {
  key: string;
  description: string;
  amount: number;
  transactionType: string;
  date?: string;
}

export interface StateType {
  allTransactions: Transaction[];
}
