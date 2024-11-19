import logoImage from "../../../../assets/logo.svg";
import {
  Title,
  Subtitle,
  Section,
  Paragraph,
  Logo,
  Highlight,
  Header,
  HGroup,
  Disclaimer,
} from "./TodoHeader.styles";

export function TodoHeader() {
  return (
    <Header>
      <Logo src={logoImage} alt="Cora" title="Cora" />

      <HGroup>
        <Title>Weekly to-do list &#128467;</Title>
        <Subtitle>
          Bem-vindo ao nosso produto <i>fake</i> de <strong>to-do</strong> list
        </Subtitle>
      </HGroup>

      <Section>
        <Paragraph>
          Marque como <Highlight>done</Highlight> as tasks que você conseguir
          concluir (elas já precisam renderizar com o status{" "}
          <strong>done</strong>)
        </Paragraph>
        <Disclaimer>
          Itens obrigatórios marcados com asterisco (<strong>*</strong>)
        </Disclaimer>
      </Section>
    </Header>
  );
}
