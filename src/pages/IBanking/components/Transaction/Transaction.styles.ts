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

const TransactionName = styled("span").withConfig({
  shouldForwardProp: (prop) => prop !== "isCredit",
})<{ isCredit: boolean }>(({ isCredit }) => ({
  color: isCredit ? "var(--color-blue)" : "var(--color-black)",
}));

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

const TransactionAmount = styled("span").withConfig({
  shouldForwardProp: (prop) => prop !== "isCredit",
})<{ isCredit: boolean }>(({ isCredit }) => ({
  display: "flex",
  fontSize: "0.875rem",
  fontWeight: "bold",
  justifyContent: "flex-end",
  textAlign: "right",
  color: isCredit ? "var(--color-blue)" : "var(--color-black)",

  "@media (max-width: 768px)": {
    justifyContent: "flex-start",
    textAlign: "left",
  },
}));

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
