import { LoginFormData } from "../../pages/Login/Login.type";
import { HttpClient, HttpMethod } from "../../infra/http/HttpClient.type";
import {
  ITransactionList,
  ITransactionListLong,
} from "../../pages/IBanking/IBanking.type";

export interface IBankTransactionsService {
  signIn: (data: LoginFormData) => Promise<{ token: string }>;
  getTransactions: () => Promise<ITransactionList[]>;
}

export const createBankTransactionsService = (
  httpClient: HttpClient
): IBankTransactionsService => ({
  signIn: async (data: LoginFormData) => {
    const response = await httpClient.request<{ token: string }>({
      endpoint: "/auth",
      method: HttpMethod.POST,
      body: data,
    });

    return response;
  },

  getTransactions: async () => {
    const token = localStorage.getItem("auth_token");

    const response = await httpClient.request<ITransactionListLong>({
      endpoint: "/list",
      method: HttpMethod.GET,
      headers: {
        token: `Bearer ${token}`,
      },
    });

    return response.results;
  },
});
