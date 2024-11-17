import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Todo } from "..";

describe("<Todo />", () => {
  it("should show all items todos", () => {
    render(<Todo />);

    const todos = screen.getAllByTestId("todo-item");
    expect(todos).toHaveLength(7);
  });

  it("should show correctly items when filtered", () => {
    render(<Todo />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Resolver to-do bugs" } });

    const button = screen.getByRole("button", { name: /buscar/i });
    fireEvent.click(button);

    const todos = screen.getAllByTestId("todo-item");
    expect(todos).toHaveLength(1);
    expect(screen.getByText("Resolver to-do bugs")).toBeInTheDocument();
  });

  it("should update status when button change is cliked", () => {
    render(<Todo />);

    const todos = screen.getAllByTestId("todo-item");
    const status = todos[0].querySelector("span[data-type]");

    expect(status).toHaveTextContent("done");
    expect(status).toHaveAttribute("data-type", "done");

    const changeStatusButtons = screen.getAllByText(/change to/i);
    fireEvent.click(changeStatusButtons[0]);

    expect(status).toHaveTextContent("pending");
    expect(status).toHaveAttribute("data-type", "pending");
  });

  it("should delete todo when button delete is cliked", async () => {
    render(<Todo />);

    const deleteButtons = screen.getAllByRole("button", {
      name: /delete/i,
    });

    await waitFor(() => {
      fireEvent.click(deleteButtons[0]);
    });

    const todos = screen.getAllByTestId("todo-item");
    expect(todos).toHaveLength(6);
  });
});
