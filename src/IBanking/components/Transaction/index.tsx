import { formatDateWithTime } from "../../../utils/formatDate";
import { formatCurrency } from "../../../utils/formatCurrency";
import arrowUpIcon from "../../../assets/arrow-up-out.svg";
import arrowDownInIcon from "../../../assets/arrow-down-in.svg";
import "./style.css";

interface ITransaction {
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
  const { amount, dateEvent, description, entry, id, name } = props;

  const getTransactionIcon = (entry: string) => {
    if (entry === "DEBIT") return arrowUpIcon;
    if (entry === "CREDIT") return arrowDownInIcon;
  };

  return (
    <div className="ibanking__transaction" key={id}>
      <div className="ibanking__transaction__info">
        <span className="ibanking__transaction__icon">
          <img src={getTransactionIcon(entry)} alt="arrow" />
        </span>
        <span
          className={`${
            entry === "CREDIT"
              ? "ibanking__transaction__name--credit"
              : "ibanking__transaction__name"
          }`}
        >
          {name}
        </span>
      </div>

      <div className="ibanking__transaction__details">
        <span className="ibanking__transaction__description">
          {description}
        </span>
        <span className="ibanking__transaction__date">
          {formatDateWithTime(dateEvent)}
        </span>
      </div>

      <span
        className={`${
          entry === "CREDIT"
            ? "ibanking__transaction__amount--credit"
            : "ibanking__transaction__amount"
        }`}
      >
        {entry === "DEBIT" ? "- " : "+ "} {formatCurrency(amount)}
      </span>
    </div>
  );
};
