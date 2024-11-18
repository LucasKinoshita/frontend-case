export interface IResponseList {
  items: {
    id: string;
    description: string;
    label: string;
    entry: "DEBIT" | "CREDIT";
    amount: number;
    name: string;
    dateEvent: string;
    status: string;
  }[];
  date: string;
}

export interface IResponseListLong {
  results: {
    items: {
      id: string;
      description: string;
      label: string;
      entry: "DEBIT" | "CREDIT";
      amount: number;
      name: string;
      dateEvent: string;
      status: string;
    }[];
    date: string;
  }[];
  itemsTotal: number;
}

export interface ITransactions {
  selectedEntry: "DEBIT" | "CREDIT" | "ALL";
  transactions: IResponseList[];
}

export interface IGroupedTransactions {
  [key: string]: {
    debitTotal: number;
    creditTotal: number;
  };
}
