import { render, screen } from "@testing-library/react";
import { ResultsNotFound } from ".";

describe("ResultsNotFound Component", () => {
  it("should display the message when totalItems is 0", () => {
    render(<ResultsNotFound totalItems={0} />);

    expect(screen.getByText(/Ops!!!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Nenhum resultado foi encontrado 😕/i)
    ).toBeInTheDocument();
  });

  it("should not render anything when totalItems is greater than 0", () => {
    const { container } = render(<ResultsNotFound totalItems={5} />);

    expect(container).toBeEmptyDOMElement();
  });
});
