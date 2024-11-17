import { render, screen, fireEvent } from "@testing-library/react";
import { ITodo } from "../../Todo.type";
import { TodoItem } from ".";

describe("TodoItem Component", () => {
  const mockItems: ITodo[] = [
    {
      id: "1",
      title: "Todo 1",
      ref: "1",
      description: "Description 1",
      status: "pending",
      required: true,
      links: [{ name: "Google", url: "https://google.com" }],
    },
    {
      id: "2",
      title: "Todo 2",
      ref: "1",
      description: "Description 2",
      status: "done",
      required: false,
      links: [],
    },
  ];

  const mockOnDelete = vi.fn();
  const mockOnChangeStatus = vi.fn();

  it("renders todo items length correctly", () => {
    render(
      <TodoItem
        items={mockItems}
        onDelete={mockOnDelete}
        onChangeStatus={mockOnChangeStatus}
      />
    );

    expect(screen.getAllByTestId("todo-item")).toHaveLength(2);
  });

  it("calls onDelete function when delete button is clicked", () => {
    render(
      <TodoItem
        items={mockItems}
        onDelete={mockOnDelete}
        onChangeStatus={mockOnChangeStatus}
      />
    );

    const deleteButtons = screen.getAllByText("delete");
    fireEvent.click(deleteButtons[0]);

    expect(mockOnDelete).toHaveBeenCalledWith("1");
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

  it("calls onChangeStatus function with correct status when change status button is clicked", () => {
    render(
      <TodoItem
        items={mockItems}
        onDelete={mockOnDelete}
        onChangeStatus={mockOnChangeStatus}
      />
    );

    const changeStatusButtons = screen.getAllByText(/change to/i);
    fireEvent.click(changeStatusButtons[0]);

    expect(mockOnChangeStatus).toHaveBeenCalledWith("1", "pending");

    fireEvent.click(changeStatusButtons[1]);

    expect(mockOnChangeStatus).toHaveBeenCalledWith("2", "done");
    expect(mockOnChangeStatus).toHaveBeenCalledTimes(2);
  });

  it("renders links if provided", () => {
    render(
      <TodoItem
        items={mockItems}
        onDelete={mockOnDelete}
        onChangeStatus={mockOnChangeStatus}
      />
    );

    const link = screen.getByText("Google");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://google.com");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("does not render links if none are provided", () => {
    const itemWithoutLinks: ITodo[] = [
      {
        id: "3",
        title: "Todo 3",
        ref: "1",
        description: "Description 3",
        status: "pending",
        required: false,
        links: [],
      },
    ];

    render(
      <TodoItem
        items={itemWithoutLinks}
        onDelete={mockOnDelete}
        onChangeStatus={mockOnChangeStatus}
      />
    );

    const links = screen.queryByRole("link");
    expect(links).not.toBeInTheDocument();
  });
});
