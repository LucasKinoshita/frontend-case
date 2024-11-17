import { renderHook, waitFor } from "@testing-library/react";
import { useLoginModel } from "../Login.model";
import { successfulBankTransactionsServiceMock } from "../../../tests/mocks/bankingServiceMock";

const mockNavigate = vi.fn();

describe("<useLoginModel />", () => {
  it("should navigate to ibanking transactions when auth is ok", async () => {
    const { result } = renderHook(() =>
      useLoginModel(successfulBankTransactionsServiceMock, mockNavigate)
    );

    await waitFor(async () => {
      result.current.onSubmit({ cpf: "45685423654", password: "1234" });
    });

    expect(result.current.errors).toEqual({});
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/ibanking");
  });
});
