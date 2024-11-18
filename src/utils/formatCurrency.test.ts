import { formatCurrency } from "./formatCurrency";

describe("formatCurrency", () => {
  it("should format a positive number as BRL currency", () => {
    const result = formatCurrency(1234.56);
    expect(result).toBe("R$ 1.234,56");
  });

  it("should format a negative number as BRL currency", () => {
    const result = formatCurrency(-987.65);
    expect(result).toBe("-R$ 987,65");
  });

  it("should format zero as BRL currency", () => {
    const result = formatCurrency(0);
    expect(result).toBe("R$ 0,00");
  });

  it("should handle large numbers with BRL formatting", () => {
    const result = formatCurrency(1234567890.99);
    expect(result).toBe("R$ 1.234.567.890,99");
  });

  it("should handle small fractional numbers correctly", () => {
    const result = formatCurrency(0.1);
    expect(result).toBe("R$ 0,10");
  });
});
