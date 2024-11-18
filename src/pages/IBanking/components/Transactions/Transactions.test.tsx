import { render, screen } from "@testing-library/react";
import { IGroupedTransactions, IResponseList } from "../../IBanking.type";
import { Transactions } from ".";

const mockGroupedTransactions: IGroupedTransactions = {
  "2024-02-01": { debitTotal: 100, creditTotal: 150 },
};

const mockFilteredTransactions: IResponseList[] = [
  {
    date: "2024-02-01",
    items: [
      {
        id: "1",
        description: "Item 1",
        label: "Label 1",
        entry: "DEBIT",
        amount: 100,
        name: "Transaction 1",
        dateEvent: "2024-02-01T08:15:17Z",
        status: "COMPLETED",
      },
      {
        id: "2",
        description: "Item 2",
        label: "Label 2",
        entry: "CREDIT",
        amount: 150,
        name: "Transaction 2",
        dateEvent: "2024-02-01T08:20:17Z",
        status: "COMPLETED",
      },
    ],
  },
];

describe("Transactions Component", () => {
  it("renders transactions correctly", () => {
    render(
      <Transactions
        filteredTransactions={mockFilteredTransactions}
        groupedTransactions={mockGroupedTransactions}
      />
    );

    const firstTransactionDate = screen.getByText("01 fev 2024 - 05:15");
    const firstTransactionBalance = screen.getByText("- R$ 100,00");
    const secondTransactionDate = screen.getByText("01 fev 2024 - 05:20");
    const secondTransactionBalance = screen.getByText("+ R$ 150,00");
    const balanceOfTheDay = screen.getByText("R$ 50,00");

    expect(firstTransactionDate).toBeInTheDocument();
    expect(firstTransactionBalance).toBeInTheDocument();
    expect(secondTransactionDate).toBeInTheDocument();
    expect(secondTransactionBalance).toBeInTheDocument();
    expect(balanceOfTheDay).toBeInTheDocument();

    const firstTransactionItem = screen.getByText("Transaction 1");
    const secondTransactionItem = screen.getByText("Transaction 2");

    expect(firstTransactionItem).toBeInTheDocument();
    expect(secondTransactionItem).toBeInTheDocument();
  });
});
