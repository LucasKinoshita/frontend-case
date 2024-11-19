import { renderHook, waitFor } from "@testing-library/react";
import { useIBankingModel } from "../IBanking.model";
import { successfulBankTransactionsServiceMock } from "../../../tests/mocks/bankingServiceMock";
import { ENTRY } from "../../../constants";

describe("<useIBankingModel />", () => {
  it("should show correctly transactions loaded", async () => {
    const { result } = renderHook(() =>
      useIBankingModel(successfulBankTransactionsServiceMock)
    );

    await waitFor(() => {
      expect(result.current.transactions).toHaveLength(1);
    });
  });

  it("should select correct entry", async () => {
    const { result } = renderHook(() =>
      useIBankingModel(successfulBankTransactionsServiceMock)
    );

    result.current.handleSelectEntry(ENTRY.Credit);

    await waitFor(() => {
      expect(result.current.selectedEntry).toEqual(ENTRY.Credit);
    });
  });

  it("should select correct transaction filtered when entry is ALL", async () => {
    const { result } = renderHook(() =>
      useIBankingModel(successfulBankTransactionsServiceMock)
    );

    result.current.handleSelectEntry(ENTRY.All);

    await waitFor(() => {
      expect(result.current.selectedEntry).toEqual(ENTRY.All);
      expect(result.current.filteredTransactions[0].items).toHaveLength(2);
    });
  });

  it("should select correct transaction filtered when entry is DEBIT", async () => {
    const { result } = renderHook(() =>
      useIBankingModel(successfulBankTransactionsServiceMock)
    );

    result.current.handleSelectEntry(ENTRY.Debit);

    await waitFor(() => {
      expect(result.current.selectedEntry).toEqual(ENTRY.Debit);
      expect(result.current.filteredTransactions[0].items).toHaveLength(1);
    });
  });

  it("should select correct transaction filtered when entry is CREDIT", async () => {
    const { result } = renderHook(() =>
      useIBankingModel(successfulBankTransactionsServiceMock)
    );

    result.current.handleSelectEntry(ENTRY.Credit);

    await waitFor(() => {
      expect(result.current.selectedEntry).toEqual(ENTRY.Credit);
      expect(result.current.filteredTransactions[0].items).toHaveLength(1);
    });
  });

  it("should return correctly the transactions amount separated by credit and debit", async () => {
    const { result } = renderHook(() =>
      useIBankingModel(successfulBankTransactionsServiceMock)
    );

    await waitFor(() => {
      expect(result.current.groupedTransactions).toEqual({
        "2024-02-01": {
          creditTotal: 4500,
          debitTotal: 150000,
        },
      });
    });
  });
});
