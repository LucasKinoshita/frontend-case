import { LoginFormData } from "../../pages/Login/Login.type";
import { HttpClient, HttpMethod } from "../../infra/http/HttpClient.type";

export interface IBankTransactionsService {
  signIn: (data: LoginFormData) => Promise<{ token: string }>;
}

export const createBankTransactionsService = (
  httpClient: HttpClient
): IBankTransactionsService => ({
  signIn: async (data: LoginFormData): Promise<{ token: string }> => {
    const response = await httpClient.request<{ token: string }>({
      endpoint: "/auth",
      method: HttpMethod.POST,
      body: data,
    });

    return response;
  },
});
