import styled from "styled-components";

const Header = styled.header`
  padding: 1.25rem;
  text-align: center;
`;

const Logo = styled.img`
  height: auto;
  margin-bottom: 0.625rem;
  width: 7.5rem;
`;

const HGroup = styled.hgroup`
  margin-bottom: 1.25rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0.625rem 0;
`;

const Subtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: normal;
  margin-bottom: 0.9375rem;
`;

const Section = styled.section`
  margin: 1.25rem 0;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Disclaimer = styled.p`
  background-color: rgba(0, 0, 0, 0.02);
  border: 1px solid var(--color-light-gray);
  border-radius: 0.3125rem;
  color: #555;
  font-size: 0.9rem;
  margin: 1.25rem auto 0;
  max-width: 28.125rem;
  padding: 0.9375rem;
`;

const Highlight = styled.strong`
  text-decoration: underline;
`;

export {
  Header,
  Logo,
  HGroup,
  Title,
  Subtitle,
  Section,
  Paragraph,
  Disclaimer,
  Highlight,
};
