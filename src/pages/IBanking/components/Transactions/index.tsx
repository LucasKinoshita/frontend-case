import { formatDateWithMonthName } from "../../../../utils/formatDate";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { Transaction } from "../Transaction";
import "./styles.css";

interface ITransaction {
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

interface IGroupedTransactions {
  [key: string]: {
    debitTotal: number;
    creditTotal: number;
  };
}

interface ITransactions {
  selectedEntry: "DEBIT" | "CREDIT" | "ALL";
  transactions: ITransaction[];
}

export const Transactions = (props: ITransactions) => {
  const { selectedEntry, transactions } = props;

  const filteredTransactions = transactions
    .map((transaction) => ({
      ...transaction,
      items:
        selectedEntry === "ALL"
          ? transaction.items
          : transaction.items.filter((item) => item.entry === selectedEntry),
    }))
    .filter((transaction) => transaction.items.length > 0);

  const groupedTransactions = transactions.reduce<IGroupedTransactions>(
    (acc, transaction) => {
      if (!acc[transaction.date]) {
        acc[transaction.date] = { debitTotal: 0, creditTotal: 0 };
      }

      transaction.items.forEach((item) => {
        if (item.entry === "DEBIT")
          acc[transaction.date].debitTotal += item.amount;

        if (item.entry === "CREDIT")
          acc[transaction.date].creditTotal += item.amount;
      });

      return acc;
    },
    {}
  );

  return (
    <>
      {filteredTransactions.map((transaction) => {
        const { debitTotal, creditTotal } =
          groupedTransactions[transaction.date];
        const balance = creditTotal - debitTotal;

        return (
          <div
            className="ibanking__transactions-container"
            key={transaction.date}
          >
            <div className="ibanking__transactions-header">
              <span className="ibanking__transactions-header-date">
                <strong>{formatDateWithMonthName(transaction.date)}</strong>
              </span>
              <span className="ibanking__transactions-header-balance">
                saldo do dia <strong>{formatCurrency(balance)}</strong>
              </span>
            </div>

            <div className="ibanking__transactions">
              {transaction.items.map((transactionItem) => (
                <Transaction key={transaction.date} {...transactionItem} />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
