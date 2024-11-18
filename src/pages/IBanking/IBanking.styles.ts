import styled from "styled-components";

export const Container = styled.div`
  margin: 3.75rem auto;
  max-width: 64.5rem;
  padding: 0 0.5rem;

  @media (max-width: 768px) {
    margin: 2rem auto;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    margin: 1.5rem auto;
  }
`;
