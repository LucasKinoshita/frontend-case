import { formatDateWithMonthName } from "../../../../utils/formatDate";
import { formatCurrency } from "../../../../utils/formatCurrency";
import { IGroupedTransactions, ITransactionList } from "../../IBanking.type";
import { Transaction } from "../Transaction";
import {
  TransactionsList,
  HeaderBalance,
  HeaderDate,
  TransactionsHeader,
  TransactionsContainer,
} from "./Transactions.styles";

interface ITransactions {
  groupedTransactions: IGroupedTransactions;
  filteredTransactions: ITransactionList[];
}

export default function Transactions(props: ITransactions) {
  const { filteredTransactions, groupedTransactions } = props;

  return (
    <>
      {filteredTransactions.map((transaction) => {
        const { debitTotal, creditTotal } =
          groupedTransactions[transaction.date];
        const balance = creditTotal - debitTotal;

        return (
          <TransactionsContainer key={transaction.date}>
            <TransactionsHeader>
              <HeaderDate>
                <strong>{formatDateWithMonthName(transaction.date)}</strong>
              </HeaderDate>
              <HeaderBalance>
                saldo do dia <strong>{formatCurrency(balance)}</strong>
              </HeaderBalance>
            </TransactionsHeader>

            <TransactionsList>
              {transaction.items.map((transactionItem) => (
                <Transaction key={transactionItem.id} {...transactionItem} />
              ))}
            </TransactionsList>
          </TransactionsContainer>
        );
      })}
    </>
  );
}
