import { TodoView } from "./Todo.view";
import { useTodoModel } from "./Todo.model";

export default function Todo() {
  const methods = useTodoModel();

  return <TodoView {...methods} />;
}
