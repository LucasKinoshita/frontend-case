import { formatDateWithTime } from "../../../../utils/formatDate";
import { formatCurrency } from "../../../../utils/formatCurrency";
import arrowUpIcon from "../../../../assets/arrow-up-out.svg";
import arrowDownInIcon from "../../../../assets/arrow-down-in.svg";
import {
  TransactionContainer,
  TransactionInfo,
  TransactionIcon,
  TransactionName,
  TransactionDetails,
  TransactionDescription,
  TransactionDate,
  TransactionAmount,
} from "./Transaction.styles";

export interface ITransaction {
  id: string;
  description: string;
  label: string;
  entry: "DEBIT" | "CREDIT";
  amount: number;
  name: string;
  dateEvent: string;
  status: string;
}

export const Transaction = (props: ITransaction) => {
  const { amount, dateEvent, description, entry, name } = props;

  const getTransactionIcon = (entry: string) => {
    return entry === "DEBIT" ? arrowUpIcon : arrowDownInIcon;
  };

  return (
    <TransactionContainer data-testid="transaction">
      <TransactionInfo>
        <TransactionIcon>
          <img
            src={getTransactionIcon(entry)}
            alt={entry === "CREDIT" ? "Credit icon" : "Debit icon"}
          />
        </TransactionIcon>
        <TransactionName isCredit={entry === "CREDIT"}>{name}</TransactionName>
      </TransactionInfo>

      <TransactionDetails>
        <TransactionDescription>{description}</TransactionDescription>
        <TransactionDate>{formatDateWithTime(dateEvent)}</TransactionDate>
      </TransactionDetails>

      <TransactionAmount isCredit={entry === "CREDIT"}>
        {entry === "DEBIT" ? "- " : "+ "}
        {formatCurrency(amount)}
      </TransactionAmount>
    </TransactionContainer>
  );
};
