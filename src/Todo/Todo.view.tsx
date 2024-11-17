import { ResultsNotFound } from "./components/ResultsNotFound";
import { TodoHeader } from "./components/TodoHeader";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { useTodoModel } from "./Todo.model";

type TodoViewProps = ReturnType<typeof useTodoModel>;

export const TodoView = (props: TodoViewProps) => {
  const {
    items,
    handleToggleTaskStatus,
    handleDeleteTaskById,
    handleSearchInputChange,
    handleSearchSubmit,
    searchInputValue,
  } = props;

  return (
    <main id="page" className="todo">
      <div>
        <TodoHeader />

        <div className="todo__wrapper">
          <TodoSearch
            searchInputValue={searchInputValue}
            handleChange={handleSearchInputChange}
            handleSubmit={handleSearchSubmit}
          />

          <ul className="todo__list">
            <ResultsNotFound totalItems={items.length} />

            <TodoItem
              items={items}
              onChangeStatus={handleToggleTaskStatus}
              onDelete={handleDeleteTaskById}
            />
          </ul>
        </div>
      </div>
    </main>
  );
};
