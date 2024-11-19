import { Message } from "./ResultsNotFound.styled";

interface IResultsNotFound {
  totalItems: number;
}

export default function ResultsNotFound(props: IResultsNotFound) {
  const { totalItems } = props;

  return (
    <>
      {totalItems === 0 ? (
        <Message>
          <strong>Ops!!!</strong> Nenhum resultado foi encontrado &#128533;
        </Message>
      ) : null}
    </>
  );
}
