import { render, screen, fireEvent } from "@testing-library/react";
import { TodoSearch } from ".";

describe("TodoSearch Component", () => {
  const mockHandleChange = vi.fn();
  const mockHandleSubmit = vi.fn();

  it("renders the search input and button", () => {
    render(
      <TodoSearch
        searchInputValue=""
        handleChange={mockHandleChange}
        handleSubmit={mockHandleSubmit}
      />
    );

    const input = screen.getByRole("textbox", { name: "" });
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "busca por texto...");

    const button = screen.getByRole("button", { name: /buscar/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("buscar");
  });

  it("calls handleChange when typing in the input", async () => {
    render(
      <TodoSearch
        searchInputValue=""
        handleChange={mockHandleChange}
        handleSubmit={mockHandleSubmit}
      />
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "testing" } });

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });

  it("calls handleSubmit when the form is submitted", () => {
    render(
      <TodoSearch
        searchInputValue="testing"
        handleChange={mockHandleChange}
        handleSubmit={mockHandleSubmit}
      />
    );

    const button = screen.getByRole("button", { name: /buscar/i });
    fireEvent.click(button);

    expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
  });

  it("updates the input value based on searchInputValue prop", () => {
    render(
      <TodoSearch
        searchInputValue="testing"
        handleChange={mockHandleChange}
        handleSubmit={mockHandleSubmit}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("testing");
  });
});
