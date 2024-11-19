interface IItem {
  id: string;
  description: string;
  label: string;
  entry: "DEBIT" | "CREDIT";
  amount: number;
  name: string;
  dateEvent: string;
  status: string;
}

export interface ITransactionList {
  items: IItem[];
  date: string;
}

export interface ITransactionListLong {
  results: {
    items: IItem[];
    date: string;
  }[];
  itemsTotal: number;
}

export interface IGroupedTransactions {
  [key: string]: {
    debitTotal: number;
    creditTotal: number;
  };
}

export type IEntry = "DEBIT" | "CREDIT" | "ALL";
