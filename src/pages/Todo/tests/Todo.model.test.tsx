import { renderHook, waitFor } from "@testing-library/react";
import { useTodoModel } from "../Todo.model";
import { TODO_LIST } from "../Todo.initialState";
import { ChangeEvent, FormEvent } from "react";

describe("useTodoModel", () => {
  it("should initialize items from TODO_LIST", () => {
    const { result } = renderHook(() => useTodoModel());

    expect(result.current.items).toEqual(TODO_LIST);
  });

  it("should update searchInputValue when handleSearchInputChange is called", async () => {
    const { result } = renderHook(() => useTodoModel());

    await waitFor(() => {
      result.current.handleSearchInputChange({
        target: { value: "New search query" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.searchInputValue).toBe("New search query");
  });

  it("should update search query and filter items when handleSearchSubmit is called", async () => {
    const { result } = renderHook(() => useTodoModel());

    await waitFor(() => {
      result.current.handleSearchInputChange({
        target: { value: "Resolver to-do bugs" },
      } as ChangeEvent<HTMLInputElement>);
    });

    await waitFor(() => {
      result.current.handleSearchSubmit({
        preventDefault: () => {},
      } as FormEvent<HTMLFormElement>);
    });

    expect(result.current.search).toBe("Resolver to-do bugs");
    expect(result.current.items.length).toBeGreaterThan(0);
  });

  it("should delete a task by id when handleDeleteTaskById is called", async () => {
    const { result } = renderHook(() => useTodoModel());
    const initialItems = result.current.items;

    await waitFor(() => {
      result.current.handleDeleteTaskById(initialItems[0].id);
    });

    expect(result.current.items).toHaveLength(initialItems.length - 1);

    expect(
      result.current.items.find((item) => item.id === initialItems[0].id)
    ).toBeUndefined();
  });

  it("should toggle task status when handleToggleTaskStatus is called", async () => {
    const { result } = renderHook(() => useTodoModel());
    const initialItems = result.current.items;
    const taskToToggle = initialItems[0];

    await waitFor(() => {
      result.current.handleToggleTaskStatus(
        taskToToggle.id,
        taskToToggle.status
      );
    });

    expect(result.current.items[0].status).toBe(
      taskToToggle.status === "pending" ? "done" : "pending"
    );
  });

  it("should filter items by search query", async () => {
    const { result } = renderHook(() => useTodoModel());

    await waitFor(() => {
      result.current.handleSearchInputChange({
        target: { value: "visualizar to-do list corretamente" },
      } as ChangeEvent<HTMLInputElement>);
    });

    await waitFor(() => {
      result.current.handleSearchSubmit({
        preventDefault: () => {},
      } as FormEvent<HTMLFormElement>);
    });

    const filteredItems = result.current.items;
    expect(filteredItems.length).toEqual(1);
    expect(filteredItems[0].title.toLowerCase()).toContain(
      "visualizar to-do list corretamente"
    );
  });
});
