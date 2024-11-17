import { HttpClienteAxiosAdpter } from "../infra/http/HttpClient";
import { createBankTransactionsService } from "../services/BankTransactions/BankTransactions.service";
import { useLoginModel } from "./Login.model";
import { LoginView } from "./Login.view";

export function Login() {
  const httpAxiosAdpter = HttpClienteAxiosAdpter;
  const bankingService = createBankTransactionsService(httpAxiosAdpter);
  const methods = useLoginModel(bankingService);

  return <LoginView {...methods} />;
}
