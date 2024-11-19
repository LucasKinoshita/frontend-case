import { IBankTransactionsService } from "../../services/BankTransactions/BankTransactions.service";
import { mockSchemaListTransactions } from "./schemaIBankingMock";

export const successfulBankTransactionsServiceMock: IBankTransactionsService = {
  signIn: () => Promise.resolve({ token: "123456" }),
  getTransactions: () => Promise.resolve([mockSchemaListTransactions]),
};

export const failedIBankingServiceMock: IBankTransactionsService = {
  signIn: () => Promise.reject(new Error("Error")),
  getTransactions: () => Promise.reject(new Error("Error")),
};
