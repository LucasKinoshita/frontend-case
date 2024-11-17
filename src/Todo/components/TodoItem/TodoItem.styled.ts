import styled from "styled-components";

const Container = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 0.938rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-light-gray);
  }
`;

const ItemNumberOrder = styled.span`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 2em;
  line-height: 1em;
  padding-right: 0.625rem;
`;

const Content = styled.div`
  flex: 1;
  text-align: left;

  h3 {
    font-size: 2em;
    line-height: 1em;
    margin-bottom: 0.625rem;
  }

  [data-type] {
    transform: translateY(-3px);
    font-size: 0.5em;
    line-height: 1em;
    margin-left: 0.313rem;
    border: 1px solid;
    border-radius: 5px;
    padding: 0.313rem;
    display: inline-block;
    text-transform: uppercase;
  }

  p {
    font-size: 1.6em;
    line-height: 1.3em;
    color: var(--color-gray);
  }

  [data-type="pending"] {
    color: var(--color-error);
    border-color: var(--color-error);
  }

  [data-type="done"] {
    color: var(--color-success);
    border-color: var(--color-success);
  }
`;

const Links = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 0.625rem;
`;

const Link = styled.a`
  display: inline-block;
  font-size: 1.4em;
  padding-right: 0.438rem;
`;

const Actions = styled.div`
  display: flex;
  margin-top: 1.25rem;

  button {
    display: inline-block;
    font-size: 1.1em;
    padding: 0.438rem;
    border-radius: 5px;
    margin-right: 0.313rem;
    cursor: pointer;
    text-transform: uppercase;
    color: var(--color-main);
    border: 1px solid var(--color-main);
    background-color: transparent;
  }
`;

export { Container, Actions, Link, Links, Content, ItemNumberOrder };
