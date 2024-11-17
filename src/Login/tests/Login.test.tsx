import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { IBankTransactionsService } from "../../services/BankTransactions/BankTransactions.service";
import { successfulBankTransactionsServiceMock } from "../../tests/mocks/bankingServiceMock";
import { useLoginModel } from "../Login.model";
import { LoginView } from "../Login.view";
import { BrowserRouter, NavigateFunction } from "react-router-dom";

type MakeSutProps = {
  service?: IBankTransactionsService;
  navigate?: NavigateFunction;
};

const MakeSut = ({
  service = successfulBankTransactionsServiceMock,
  navigate = vi.fn(),
}: MakeSutProps) => {
  const methods = useLoginModel(service, navigate);
  return (
    <BrowserRouter>
      <LoginView {...methods} />
    </BrowserRouter>
  );
};

describe("<Login />", () => {
  it("should render errors when fields are not fill correctly", async () => {
    render(<MakeSut />);

    await waitFor(() => {
      const buttonSubmit = screen.getByRole("button", { name: /continuar/i });
      fireEvent.click(buttonSubmit);
    });

    const errorMessage = screen.getAllByTestId("error-message");

    expect(errorMessage.length).toBe(2);
    expect(screen.getByText("CPF é obrigatório *")).toBeInTheDocument();
    expect(
      screen.getByText("Senha deve ter pelo menos 6 caracteres *")
    ).toBeInTheDocument();
  });

  it("should navigate when fields are fill correctly", async () => {
    const mockNavigate = vi.fn();
    render(<MakeSut navigate={mockNavigate} />);

    fireEvent.change(screen.getByPlaceholderText("Insira seu CPF"), {
      target: { value: "12345678958" },
    });

    fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), {
      target: { value: "123456" },
    });

    await waitFor(() => {
      const buttonSubmit = screen.getByRole("button", { name: /continuar/i });
      fireEvent.click(buttonSubmit);
    });

    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith("/ibanking");
  });
});
