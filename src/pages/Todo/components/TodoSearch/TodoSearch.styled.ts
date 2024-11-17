import styled from "styled-components";

const Form = styled.form`
  display: flex;
  margin-bottom: 0.625rem;
`;

const Input = styled.input`
  border: 1px solid var(--color-light-gray);
  border-radius: 0.3125rem 0 0 0.3125rem;
  font-size: 1.6em;
  padding: 0.9375rem;
  width: 100%;
`;

const Button = styled.button`
  background-color: var(--color-light-gray);
  border-radius: 0 0.3125rem 0.3125rem 0;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: 700;
  padding: 0.9375rem;
  text-transform: uppercase;
`;

export { Form, Input, Button };
