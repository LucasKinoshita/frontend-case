import "./styles.css";

interface IFilterButtons {
  selectedEntry: "DEBIT" | "CREDIT" | "ALL";
  setSelectedEntry: (
    value: React.SetStateAction<"DEBIT" | "CREDIT" | "ALL">
  ) => void;
}

export const FilterButtons = (props: IFilterButtons) => {
  const { selectedEntry, setSelectedEntry } = props;

  return (
    <div className="ibanking__buttons">
      <button
        className={`ibanking__button ${
          selectedEntry === "DEBIT" ? "" : "ibanking__button--selected"
        }`}
        onClick={() => setSelectedEntry("DEBIT")}
      >
        Débito
      </button>

      <button
        className={`ibanking__button ${
          selectedEntry === "CREDIT" ? "" : "ibanking__button--selected"
        }`}
        onClick={() => setSelectedEntry("CREDIT")}
      >
        Crédito
      </button>
    </div>
  );
};
