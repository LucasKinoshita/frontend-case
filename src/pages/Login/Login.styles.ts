import styled from "styled-components";

const LoginContainer = styled.main`
  background-color: var(--color-dark-main);
  border-radius: 0 0 16px 16px;
  margin: 0 auto;
  padding: 6.0625rem 5.4375rem 5.4375rem;
  width: calc(100% - 50px);
  max-width: 42.125rem;
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: var(--color-white);
  font-size: 1.75rem;
  line-height: 2.375rem;
  margin: 5.25rem 0 3rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  background-color: var(--color-lighter-gray);
  border: none;
  border-radius: 16px;
  display: block;
  font-size: 1rem;
  line-height: 1rem;
  padding: 1.25rem 1rem;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: var(--color-black);
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  align-items: center;
  background-color: var(--color-white);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding: 1.25rem 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-light-gray);
  }
`;

const ArrowIcon = styled.img`
  margin-left: 0.5rem;
`;

export {
  ArrowIcon,
  Button,
  ErrorMessage,
  Form,
  Input,
  InputContainer,
  LoginContainer,
  Logo,
  Title,
};
