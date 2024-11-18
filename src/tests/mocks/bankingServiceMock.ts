import { IBankTransactionsService } from "../../services/BankTransactions/BankTransactions.service";

export const successfulBankTransactionsServiceMock: IBankTransactionsService = {
  signIn: () => Promise.resolve({ token: "123456" }),
  getTransactions: () =>
    Promise.resolve([
      {
        items: [
          {
            id: "abc123def456ghi789",
            description: "Compra de produtos eletrônicos",
            label: "Compra aprovada",
            entry: "DEBIT",
            amount: 150000,
            name: "João da Silva",
            dateEvent: "2024-02-01T08:15:17Z",
            status: "COMPLETED",
          },
          {
            id: "mno123pqr456stu789",
            description: "Reembolso de despesas",
            label: "Transferência recebida",
            entry: "CREDIT",
            amount: 4500,
            name: "Empresa ABC",
            dateEvent: "2024-02-01T08:20:17Z",
            status: "COMPLETED",
          },
        ],
        date: "2024-02-01",
      },
    ]),
};
