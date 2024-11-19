import styled from "styled-components";

const TransactionsContainer = styled.div`
  margin-bottom: 2rem;
`;

const TransactionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
`;

const HeaderDate = styled.span`
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
`;

const HeaderBalance = styled.span`
  font-size: 0.75rem;
`;

const TransactionsList = styled.div`
  border: 1px solid var(--color-light-gray);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 1rem;
  position: relative;

  &::after,
  &::before {
    content: "";
    height: 1rem;
    width: 0.0625rem;
    background: var(--color-light-gray);
    position: absolute;
    left: 2rem;
  }

  &::after {
    top: -1rem;
  }

  &::before {
    bottom: -1rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

export {
  HeaderBalance,
  HeaderDate,
  TransactionsContainer,
  TransactionsHeader,
  TransactionsList,
};
