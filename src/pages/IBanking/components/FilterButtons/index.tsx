import { ENTRY } from "../../../../constants";
import { IEntry } from "../../IBanking.type";
import { ButtonsContainer, Button } from "./FilterButtons.style";

interface IFilterButtons {
  selectedEntry: IEntry;
  handleSelectEntry: (entry: IEntry) => void;
}

export const FilterButtons = ({
  selectedEntry,
  handleSelectEntry,
}: IFilterButtons) => {
  return (
    <ButtonsContainer>
      <Button
        isSelected={selectedEntry === ENTRY.All}
        onClick={() => handleSelectEntry(ENTRY.All)}
      >
        Todos
      </Button>

      <Button
        isSelected={selectedEntry === ENTRY.Debit}
        onClick={() => handleSelectEntry(ENTRY.Debit)}
      >
        Débito
      </Button>

      <Button
        isSelected={selectedEntry === ENTRY.Credit}
        onClick={() => handleSelectEntry(ENTRY.Credit)}
      >
        Crédito
      </Button>
    </ButtonsContainer>
  );
};
