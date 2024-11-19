import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { NavigateFunction } from "react-router-dom";
import { IBankTransactionsService } from "../../../services/BankTransactions/BankTransactions.service";
import { successfulBankTransactionsServiceMock } from "../../../tests/mocks/bankingServiceMock";
import { useIBankingModel } from "../IBanking.model";
import { IBankingView } from "../IBanking.view";

type MakeSutProps = {
  service?: IBankTransactionsService;
  navigate?: NavigateFunction;
};

const MakeSut = ({
  service = successfulBankTransactionsServiceMock,
  navigate = vi.fn(),
}: MakeSutProps) => {
  const methods = useIBankingModel(service, navigate);
  return <IBankingView {...methods} />;
};

describe("<IBanking />", () => {
  it("should render items", async () => {
    render(<MakeSut />);

    await waitFor(() => {
      const dateTransaction = screen.getByText("01 de fevereiro");
      const descriptionTransaction1 = screen.getByText(
        "Compra de produtos eletrônicos"
      );
      const amountTransaction1 = screen.getByText("- R$ 150.000,00");
      const descriptionTransaction2 = screen.getByText("Reembolso de despesas");
      const amountTransaction2 = screen.getByText("+ R$ 4.500,00");
      const transactions = screen.getAllByTestId("transaction");

      expect(dateTransaction).toBeInTheDocument();
      expect(descriptionTransaction1).toBeInTheDocument();
      expect(amountTransaction1).toBeInTheDocument();
      expect(descriptionTransaction2).toBeInTheDocument();
      expect(amountTransaction2).toBeInTheDocument();
      expect(transactions).toHaveLength(2);
    });
  });

  it("should render filtered items correctly", async () => {
    render(<MakeSut />);

    await waitFor(() => {
      const allButtonFilter = screen.getByRole("button", { name: /todos/i });
      fireEvent.click(allButtonFilter);
    });

    expect(screen.getAllByTestId("transaction")).toHaveLength(2);

    await waitFor(() => {
      const debitButtonFilter = screen.getByRole("button", { name: /débito/i });
      fireEvent.click(debitButtonFilter);
    });

    expect(screen.getAllByTestId("transaction")).toHaveLength(1);

    await waitFor(() => {
      const creditButtonFilter = screen.getByRole("button", {
        name: /crédito/i,
      });
      fireEvent.click(creditButtonFilter);
    });

    expect(screen.getAllByTestId("transaction")).toHaveLength(1);
  });

  it("should navigate to the login page when the exit button is clicked", async () => {
    const mockNavigate = vi.fn();
    render(<MakeSut navigate={mockNavigate} />);

    await waitFor(() => {
      const buttonSubmit = screen.getByRole("button", { name: /sair/i });
      fireEvent.click(buttonSubmit);
    });

    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith("/login");
  });
});
