import styled from "styled-components";
import { breakLine, flexbox, setDimensions } from "styles/abstracts/_mixins";
import { SIZE } from "styles/abstracts/_variables";

export const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--white);
  padding: 0 ${SIZE._16} ${SIZE._16};
`;

export const Content = styled.div`
  ${flexbox("column", "flex-start")};

  img {
    ${setDimensions("5rem", "5rem")};
  }

  div {
    margin: ${SIZE._8} 0;
    ${flexbox()};
    gap: ${SIZE._16};

    span {
      font-size: ${SIZE._16};
      font-weight: bold;
    }
  }
`;

export const Network = styled.ul`
  list-style: none;
  background-color: var(--gray-300);
  border-radius: 4px;

  li {
    padding: ${SIZE._8};
    border-bottom: 1px solid var(--white);
    color: var(--white);
    ${flexbox("row", "center", "space-between")};
    cursor: pointer;
  }
`;

export const FeedHeader = styled.header`
  background-color: var(--white);
  ${flexbox("row", "center", "space-between")};
  width: 100%;
  padding: ${SIZE._8};

  div {
    ${flexbox("row", "center")};
    gap: ${SIZE._16};
  }
`;

export const Feed = styled.ul`
  list-style: none;
  max-height: 40vh;
  overflow-y: overlay;
  background-color: var(--white);

  li {
    margin: ${SIZE._8};

    p {
      ${breakLine(2)};
    }
  }
`;
