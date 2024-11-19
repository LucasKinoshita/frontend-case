import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { NavigateFunction } from "react-router-dom";
import { IBankTransactionsService } from "../../../services/BankTransactions/BankTransactions.service";
import {
  failedIBankingServiceMock,
  successfulBankTransactionsServiceMock,
} from "../../../tests/mocks/bankingServiceMock";
import { mockSchemaLoginFormData } from "../../../tests/mocks/schemaIBankingMock";
import { useLoginModel } from "../Login.model";
import { LoginView } from "../Login.view";

type MakeSutProps = {
  service?: IBankTransactionsService;
  navigate?: NavigateFunction;
};

const MakeSutSuccess = ({
  service = successfulBankTransactionsServiceMock,
  navigate = vi.fn(),
}: MakeSutProps) => {
  const methods = useLoginModel(service, navigate);
  return <LoginView {...methods} />;
};

const MakeSutFailed = ({
  service = failedIBankingServiceMock,
  navigate = vi.fn(),
}: MakeSutProps) => {
  const methods = useLoginModel(service, navigate);
  return <LoginView {...methods} />;
};

describe("<Login />", () => {
  it("should render errors when fields are not fill correctly", async () => {
    render(<MakeSutSuccess />);

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
    render(<MakeSutSuccess navigate={mockNavigate} />);

    fireEvent.change(screen.getByPlaceholderText("Insira seu CPF"), {
      target: { value: mockSchemaLoginFormData.cpf },
    });

    fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), {
      target: { value: mockSchemaLoginFormData.password },
    });

    await waitFor(() => {
      const buttonSubmit = screen.getByRole("button", { name: /continuar/i });
      fireEvent.click(buttonSubmit);
    });

    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith("/ibanking");
  });

  it("should show error message when user is not authorized", async () => {
    render(<MakeSutFailed />);

    fireEvent.change(screen.getByPlaceholderText("Insira seu CPF"), {
      target: { value: mockSchemaLoginFormData.cpf },
    });

    fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), {
      target: { value: mockSchemaLoginFormData.password },
    });

    await waitFor(() => {
      const buttonSubmit = screen.getByRole("button", { name: /continuar/i });
      fireEvent.click(buttonSubmit);
    });

    expect(screen.getByText("CPF ou senha inválidos")).toBeInTheDocument();
  });
});
