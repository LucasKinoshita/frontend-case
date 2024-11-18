import { ButtonsContainer, Button } from "./FilterButtons.style";

interface IFilterButtons {
  selectedEntry: "DEBIT" | "CREDIT" | "ALL";
  handleSelectEntry: (entry: "ALL" | "DEBIT" | "CREDIT") => void;
}

export const FilterButtons = ({
  selectedEntry,
  handleSelectEntry,
}: IFilterButtons) => {
  return (
    <ButtonsContainer>
      <Button
        isSelected={selectedEntry === "ALL"}
        onClick={() => handleSelectEntry("ALL")}
      >
        Todos
      </Button>

      <Button
        isSelected={selectedEntry === "DEBIT"}
        onClick={() => handleSelectEntry("DEBIT")}
      >
        Débito
      </Button>

      <Button
        isSelected={selectedEntry === "CREDIT"}
        onClick={() => handleSelectEntry("CREDIT")}
      >
        Crédito
      </Button>
    </ButtonsContainer>
  );
};
