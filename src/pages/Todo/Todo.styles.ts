import styled from "styled-components";

const Container = styled.main`
  align-items: center;
  display: flex;
  font-size: 0.625rem;
  justify-content: center;
  margin: 0 auto;
  max-width: calc(100% - 50px);
  min-height: 100vh;
  min-width: 20rem;
  padding: 3.125rem 0 1.563rem;
  text-align: center;
  width: 100%;
`;

const TodoWrapper = styled.div`
  margin: 1.25rem auto 0;
  max-width: 46.875rem;
`;

const TodoList = styled.ul`
  background-color: rgba(0, 0, 0, 0.01);
  border: 1px solid var(--color-light-gray);
  border-radius: 5px;
  list-style: none;
  width: 100%;
`;

export { Container, TodoWrapper, TodoList };
