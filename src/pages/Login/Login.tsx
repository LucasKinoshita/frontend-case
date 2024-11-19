import { useNavigate } from "react-router-dom";
import { HttpClienteAxiosAdpter } from "../../infra/http/HttpClient";
import { createBankTransactionsService } from "../../services/BankTransactions/BankTransactions.service";
import { useLoginModel } from "./Login.model";
import { LoginView } from "./Login.view";

export default function Login() {
  const navigate = useNavigate();
  const httpAxiosAdpter = HttpClienteAxiosAdpter;
  const bankingService = createBankTransactionsService(httpAxiosAdpter);
  const methods = useLoginModel(bankingService, navigate);

  return <LoginView {...methods} />;
}
