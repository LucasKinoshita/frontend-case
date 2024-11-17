import { TodoView } from "./Todo.view";
import { useTodoModel } from "./Todo.model";
import "./Todo.css";

function Todo() {
  const methods = useTodoModel();

  return <TodoView {...methods} />;
}

export default Todo;
