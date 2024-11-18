import styled from "styled-components";

const TransactionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const TransactionInfo = styled.div`
  display: flex;
  font-size: 0.875rem;
  gap: 1.4375rem;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const TransactionIcon = styled.span`
  img {
    width: 1rem;
    height: 1rem;
  }
`;

const TransactionName = styled.span<{ isCredit: boolean }>`
  color: ${(props) =>
    props.isCredit ? "var(--color-blue)" : "var(--color-black)"};
`;

const TransactionDetails = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  color: var(--color-gray);
  font-size: 0.875rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const TransactionDescription = styled.span`
  padding-left: 5rem;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const TransactionDate = styled.span`
  text-align: right;
`;

const TransactionAmount = styled.span<{ isCredit: boolean }>`
  display: flex;
  font-size: 0.875rem;
  font-weight: bold;
  justify-content: flex-end;
  text-align: right;
  color: ${(props) =>
    props.isCredit ? "var(--color-blue)" : "var(--color-black)"};

  @media (max-width: 768px) {
    justify-content: flex-start;
    text-align: left;
  }
`;

export {
  TransactionContainer,
  TransactionInfo,
  TransactionIcon,
  TransactionName,
  TransactionDetails,
  TransactionDescription,
  TransactionDate,
  TransactionAmount,
};
