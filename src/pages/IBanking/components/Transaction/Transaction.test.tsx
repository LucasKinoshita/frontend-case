import { render, screen } from "@testing-library/react";
import { Transaction, ITransaction } from ".";

describe("Transaction", () => {
  const mockProps = {
    id: "1",
    description: "Payment for services",
    label: "Payment",
    entry: "DEBIT",
    amount: 100,
    name: "John Doe",
    dateEvent: "2024-11-18T12:34:56Z",
    status: "Completed",
  } as ITransaction;

  it("should render transaction details correctly", () => {
    render(<Transaction {...mockProps} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Payment for services")).toBeInTheDocument();
    expect(screen.getByText("18 nov 2024 - 09:34")).toBeInTheDocument();
    expect(screen.getByText("- R$ 100,00")).toBeInTheDocument();
  });

  it("should display the correct icon based on entry type", () => {
    render(<Transaction {...mockProps} />);

    expect(screen.getByAltText("Debit icon")).toBeInTheDocument();
    expect(screen.queryByAltText("Credit icon")).not.toBeInTheDocument();
  });

  it('should format the amount with a "+" for CREDIT', () => {
    render(<Transaction {...mockProps} entry="CREDIT" />);
    expect(screen.getByText("+ R$ 100,00")).toBeInTheDocument();
  });

  it('should format the amount with a "-" for DEBIT', () => {
    render(<Transaction {...mockProps} entry="DEBIT" />);
    expect(screen.getByText("- R$ 100,00")).toBeInTheDocument();
  });
});
