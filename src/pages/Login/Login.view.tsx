import logoFullImage from "../../assets/logo-full.svg";
import arrowRightImage from "../../assets/arrow-right.svg";
import {
  LoginContainer,
  Logo,
  Title,
  Form,
  InputContainer,
  Input,
  ErrorMessage,
  Button,
  ArrowIcon,
} from "./Login.styles";
import { useLoginModel } from "./Login.model";
import { Toaster } from "react-hot-toast";

type LoginViewProps = ReturnType<typeof useLoginModel>;

export function LoginView(props: LoginViewProps) {
  const { register, errors, handleSubmit, onSubmit } = props;

  return (
    <LoginContainer>
      <Toaster position="bottom-right" />
      <Logo src={logoFullImage} alt="Cora" title="Cora" />
      <Title>Fazer Login</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input id="cpf" placeholder="Insira seu CPF" {...register("cpf")} />
          {errors.cpf && (
            <ErrorMessage data-testid="error-message">
              {errors.cpf.message}
            </ErrorMessage>
          )}
        </InputContainer>

        <InputContainer>
          <Input
            id="password"
            placeholder="Digite sua senha"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <ErrorMessage data-testid="error-message">
              {errors.password.message}
            </ErrorMessage>
          )}
        </InputContainer>

        <Button type="submit">
          Continuar
          <ArrowIcon src={arrowRightImage} alt="Seta" />
        </Button>
      </Form>
    </LoginContainer>
  );
}
