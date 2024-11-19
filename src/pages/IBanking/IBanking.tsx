import { useNavigate } from "react-router-dom";
import { HttpClienteAxiosAdpter } from "../../infra/http/HttpClient";
import { createBankTransactionsService } from "../../services/BankTransactions/BankTransactions.service";
import { useIBankingModel } from "./IBanking.model";
import { IBankingView } from "./IBanking.view";

export default function IBanking() {
  const navigate = useNavigate();
  const httpAxiosAdpter = HttpClienteAxiosAdpter;
  const bankingService = createBankTransactionsService(httpAxiosAdpter);
  const methods = useIBankingModel(bankingService, navigate);

  return <IBankingView {...methods} />;
}
