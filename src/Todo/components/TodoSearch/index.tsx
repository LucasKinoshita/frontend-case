import { ChangeEvent, FormEvent } from "react";
import { Form, Input, Button } from "./TodoSearch.styled";

interface TodoSearchProps {
  searchInputValue: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function TodoSearch(props: TodoSearchProps) {
  const { searchInputValue, handleChange, handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        id="search"
        placeholder="busca por texto..."
        value={searchInputValue}
        onChange={handleChange}
      />
      <Button type="submit">buscar</Button>
    </Form>
  );
}
