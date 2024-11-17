import styled from "styled-components";

const LoginContainer = styled.main`
  width: calc(100% - 50px);
  max-width: 674px;
  margin: 0 auto;
  padding: 97px 87px 87px;
  border-radius: 0 0 16px 16px;
  background-color: var(--color-dark-main);
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 28px;
  line-height: 38px;
  color: var(--color-white);
  margin: 84px 0 48px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  margin-bottom: 24px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 16px;
  line-height: 16px;
  padding: 20px 16px;
  border-radius: 16px;
  background-color: var(--color-lighter-gray);
  border: none;
`;

const ErrorMessage = styled.p`
  color: var(--color-black);
  font-size: 14px;
  margin-top: 8px;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  margin-top: 48px;
  border-radius: 16px;
  background-color: var(--color-white);
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-light-gray);
  }
`;

const ArrowIcon = styled.img`
  margin-left: 8px;
`;

export {
  LoginContainer,
  Logo,
  Title,
  Form,
  InputContainer,
  Input,
  ErrorMessage,
  Button,
  ArrowIcon,
};
