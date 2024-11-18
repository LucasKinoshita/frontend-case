import { formatDateWithTime, formatDateWithMonthName } from "./formatDate";

describe("formatDate", () => {
  it("should format date and time correctly with formatDateWithTime", () => {
    const inputDate = "2024-11-18T14:30:00Z";
    const formattedDate = formatDateWithTime(inputDate);
    expect(formattedDate).toBe("18 nov 2024 - 11:30");
  });

  it("should format date with month name correctly with formatDateWithMonthName", () => {
    const inputDate = "2024-11-18T00:00:00Z";
    const formattedDate = formatDateWithMonthName(inputDate);
    expect(formattedDate).toBe("18 de novembro");
  });
});
