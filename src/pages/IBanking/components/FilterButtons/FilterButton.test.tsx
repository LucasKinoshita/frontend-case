import { render, screen, fireEvent } from "@testing-library/react";
import { FilterButtons } from ".";

describe("<FilterButtons />", () => {
  const mockHandleSelectEntry = vi.fn();

  it("should render all three buttons correctly", () => {
    render(
      <FilterButtons
        selectedEntry="ALL"
        handleSelectEntry={mockHandleSelectEntry}
      />
    );

    expect(screen.getByText("Todos")).toBeInTheDocument();
    expect(screen.getByText("Débito")).toBeInTheDocument();
    expect(screen.getByText("Crédito")).toBeInTheDocument();
  });

  it("should call handleSelectEntry with the correct value when a button is clicked", () => {
    render(
      <FilterButtons
        selectedEntry="ALL"
        handleSelectEntry={mockHandleSelectEntry}
      />
    );

    fireEvent.click(screen.getByText("Débito"));
    expect(mockHandleSelectEntry).toHaveBeenCalledWith("DEBIT");

    fireEvent.click(screen.getByText("Crédito"));
    expect(mockHandleSelectEntry).toHaveBeenCalledWith("CREDIT");

    fireEvent.click(screen.getByText("Todos"));
    expect(mockHandleSelectEntry).toHaveBeenCalledWith("ALL");
  });
});
