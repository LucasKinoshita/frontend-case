import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { TODO_LIST } from "./Todo.initialState";
import { ITodo, ITodoStatus } from "./Todo.type";

export const useTodoModel = () => {
  const [items, setItems] = useState<ITodo[]>(TODO_LIST);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState<ITodo[]>(items);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(searchInputValue);
  };

  const handleDeleteTaskById = (id: string) => {
    console.log(id);
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const handleToggleTaskStatus = (id: string, status: ITodoStatus) => {
    const reversedStatus = status === "pending" ? "done" : "pending";

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, status: reversedStatus } : item
      )
    );
  };

  useEffect(() => {
    const isQueryEmpty = (query: string) => !query.trim();

    const filterItemsByTitle = (query: string) => {
      return items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
    };

    const getFilteredItems = (filterQuery: string) => {
      if (isQueryEmpty(filterQuery)) return items;

      return filterItemsByTitle(filterQuery);
    };

    setFilteredItems(getFilteredItems(search));
  }, [search, items]);

  return {
    items: filteredItems,
    search,
    searchInputValue,
    handleSearchInputChange,
    handleSearchSubmit,
    handleDeleteTaskById,
    handleToggleTaskStatus,
  };
};
