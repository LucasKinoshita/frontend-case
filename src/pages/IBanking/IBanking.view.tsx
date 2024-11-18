import { FilterButtons } from "./components/FilterButtons";
import { Transactions } from "./components/Transactions";
import { useIBankingModel } from "./IBanking.model";
import { Container } from "./IBanking.styles";

type IBankingViewProps = ReturnType<typeof useIBankingModel>;

export function IBankingView(props: IBankingViewProps) {
  const {
    selectedEntry,
    handleSelectEntry,
    filteredTransactions,
    groupedTransactions,
  } = props;

  return (
    <Container>
      <FilterButtons
        selectedEntry={selectedEntry}
        handleSelectEntry={handleSelectEntry}
      />

      <Transactions
        filteredTransactions={filteredTransactions}
        groupedTransactions={groupedTransactions}
      />
    </Container>
  );
}
