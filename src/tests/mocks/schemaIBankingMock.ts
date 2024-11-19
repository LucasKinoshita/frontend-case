import { ENTRY } from "../../constants";
import { ITransactionList } from "../../pages/IBanking/IBanking.type";
import { LoginFormData } from "../../pages/Login/Login.type";

export const mockSchemaLoginFormData: LoginFormData = {
  cpf: "91130818020",
  password: "bcAgnW",
};

export const mockSchemaListTransactions: ITransactionList = {
  items: [
    {
      id: "abc123def456ghi789",
      description: "Compra de produtos eletrônicos",
      label: "Compra aprovada",
      entry: ENTRY.Debit,
      amount: 150000,
      name: "João da Silva",
      dateEvent: "2024-02-01T08:15:17Z",
      status: "COMPLETED",
    },
    {
      id: "mno123pqr456stu789",
      description: "Reembolso de despesas",
      label: "Transferência recebida",
      entry: ENTRY.Credit,
      amount: 4500,
      name: "Empresa ABC",
      dateEvent: "2024-02-01T08:20:17Z",
      status: "COMPLETED",
    },
  ],
  date: "2024-02-01",
};
