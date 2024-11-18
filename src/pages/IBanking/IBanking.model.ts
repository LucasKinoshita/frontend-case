import { useEffect, useState } from "react";
import { IGroupedTransactions, IResponseList } from "./IBanking.type";
import { IBankTransactionsService } from "../../services/BankTransactions/BankTransactions.service";

export function useIBankingModel(
  bankTransactionsService: IBankTransactionsService
) {
  const [transactions, setTransactions] = useState<IResponseList[]>([]);
  const [selectedEntry, setSelectedEntry] = useState<
    "ALL" | "DEBIT" | "CREDIT"
  >("ALL");

  const handleSelectEntry = (entry: "ALL" | "DEBIT" | "CREDIT") => {
    setSelectedEntry(entry);
  };

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

  const getTransactions = async () => {
    const response = await bankTransactionsService.getTransactions();
    setTransactions(response);
  };

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    transactions,
    selectedEntry,
    handleSelectEntry,
    filteredTransactions,
    groupedTransactions,
  };
}
