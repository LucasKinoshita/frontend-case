import { IBankTransactionsService } from "../../services/BankTransactions/BankTransactions.service";

export const successfulBankTransactionsServiceMock: IBankTransactionsService = {
  signIn: () => Promise.resolve({ token: "123456" }),
};
