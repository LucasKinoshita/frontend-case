import { ITodo, ITodoStatus } from "../../Todo.type";
import {
  Actions,
  Container,
  Content,
  ItemNumberOrder,
  Links,
  Link,
} from "./TodoItem.styled";

interface ITodoItem {
  items: ITodo[];
  onDelete: (id: string) => void;
  onChangeStatus: (id: string, status: ITodoStatus) => void;
}

export function TodoItem(props: ITodoItem) {
  const { items, onChangeStatus, onDelete } = props;

  return (
    <>
      {items.map((item, order_number) => {
        return (
          <Container key={item.id} data-testid="todo-item">
            <ItemNumberOrder>
              {order_number + 1}
              {item.required ? "*" : ""}.
            </ItemNumberOrder>

            <Content>
              <h3>
                {item.title}
                <span data-type={item.status}>{item.status}</span>
              </h3>

              <p>{item.description}</p>

              {item.links && item.links.length > 0 && (
                <Links>
                  {item.links.map((link) => (
                    <Link key={link.name} target="_blank" href={link.url}>
                      {link.name}
                    </Link>
                  ))}
                </Links>
              )}

              <Actions>
                <button onClick={() => onDelete(item.id)}>delete</button>
                <button onClick={() => onChangeStatus(item.id, item.status)}>
                  change to{" "}
                  <strong>
                    <u>{item.status === "done" ? "pending" : "done"}</u>
                  </strong>
                </button>
              </Actions>
            </Content>
          </Container>
        );
      })}
    </>
  );
}
