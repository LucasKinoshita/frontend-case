import { render, screen, fireEvent } from "@testing-library/react";
import { FilterButtons } from ".";
import { ENTRY } from "../../../../constants";

describe("<FilterButtons />", () => {
  const mockHandleSelectEntry = vi.fn();
  const mockHandleLogout = vi.fn();

  it("should render all three buttons correctly", () => {
    render(
      <FilterButtons
        selectedEntry={ENTRY.All}
        handleSelectEntry={mockHandleSelectEntry}
        handleLogout={mockHandleLogout}
      />
    );

    expect(screen.getByText("Todos")).toBeInTheDocument();
    expect(screen.getByText("Débito")).toBeInTheDocument();
    expect(screen.getByText("Crédito")).toBeInTheDocument();
    expect(screen.getByText("Sair")).toBeInTheDocument();
  });

  it("should call handleSelectEntry with the correct value when a button is clicked", () => {
    render(
      <FilterButtons
        selectedEntry={ENTRY.All}
        handleSelectEntry={mockHandleSelectEntry}
        handleLogout={mockHandleLogout}
      />
    );

    fireEvent.click(screen.getByText("Débito"));
    expect(mockHandleSelectEntry).toHaveBeenCalledWith(ENTRY.Debit);

    fireEvent.click(screen.getByText("Crédito"));
    expect(mockHandleSelectEntry).toHaveBeenCalledWith(ENTRY.Credit);

    fireEvent.click(screen.getByText("Todos"));
    expect(mockHandleSelectEntry).toHaveBeenCalledWith(ENTRY.All);
  });

  it("should call mockHandleLogout when exit is clicked", () => {
    render(
      <FilterButtons
        selectedEntry={ENTRY.All}
        handleSelectEntry={mockHandleSelectEntry}
        handleLogout={mockHandleLogout}
      />
    );

    fireEvent.click(screen.getByText("Sair"));
    expect(mockHandleLogout).toHaveBeenCalledTimes(1);
  });
});
