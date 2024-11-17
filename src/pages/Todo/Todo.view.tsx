import { ResultsNotFound } from "./components/ResultsNotFound";
import { TodoHeader } from "./components/TodoHeader";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { useTodoModel } from "./Todo.model";
import { Container, TodoWrapper, TodoList } from "./Todo.styles";

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
    <Container>
      <div>
        <TodoHeader />

        <TodoWrapper>
          <TodoSearch
            searchInputValue={searchInputValue}
            handleChange={handleSearchInputChange}
            handleSubmit={handleSearchSubmit}
          />

          <TodoList>
            <ResultsNotFound totalItems={items.length} />

            <TodoItem
              items={items}
              onChangeStatus={handleToggleTaskStatus}
              onDelete={handleDeleteTaskById}
            />
          </TodoList>
        </TodoWrapper>
      </div>
    </Container>
  );
};
