import styled from "styled-components";

interface ButtonProps {
  isSelected: boolean;
}

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const Button = styled.button<ButtonProps>`
  background: ${({ isSelected }) =>
    isSelected ? "var(--color-black)" : "var(--color-lighter-gray)"};
  color: ${({ isSelected }) =>
    isSelected ? "var(--color-white)" : "var(--color-black)"};
  border-radius: 2rem;
  cursor: pointer;
  height: 2rem;
  padding: 0.25rem 1rem;
  width: 5.125rem;
  transition: background 0.3s, color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export { ButtonsContainer, Button };
