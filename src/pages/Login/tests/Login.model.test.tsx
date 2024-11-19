import { renderHook, waitFor } from "@testing-library/react";
import { useLoginModel } from "../Login.model";
import { successfulBankTransactionsServiceMock } from "../../../tests/mocks/bankingServiceMock";
import { mockSchemaLoginFormData } from "../../../tests/mocks/schemaIBankingMock";

const mockNavigate = vi.fn();

describe("<useLoginModel />", () => {
  it("should navigate to ibanking transactions when auth is ok", async () => {
    const { result } = renderHook(() =>
      useLoginModel(successfulBankTransactionsServiceMock, mockNavigate)
    );

    await waitFor(() => {
      result.current.onSubmit({
        cpf: mockSchemaLoginFormData.cpf,
        password: mockSchemaLoginFormData.password,
      });
    });

    expect(result.current.errors).toEqual({});
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/ibanking");
  });
});
