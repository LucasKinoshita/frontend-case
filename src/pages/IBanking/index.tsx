import { HttpClienteAxiosAdpter } from "../../infra/http/HttpClient";
import { createBankTransactionsService } from "../../services/BankTransactions/BankTransactions.service";
import { useIBankingModel } from "./IBanking.model";
import { IBankingView } from "./IBanking.view";

export function IBanking() {
  const httpAxiosAdpter = HttpClienteAxiosAdpter;
  const bankingService = createBankTransactionsService(httpAxiosAdpter);
  const methods = useIBankingModel(bankingService);

  return <IBankingView {...methods} />;
}
