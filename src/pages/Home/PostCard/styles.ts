import styled from "styled-components";
import { flexbox } from "styles/abstracts/_mixins";
import { SIZE } from "styles/abstracts/_variables";

export const Container = styled.li`
  ${flexbox("column", "flex-start")};
  margin: ${SIZE._4} 0;
  box-shadow: 0 0 ${SIZE._8} 0 rgba(0, 0, 0, 0.1);

  background-color: var(--white);
  padding: ${SIZE._16};

  h3,
  span {
    color: var(--gray-600);
  }

  span {
    display: block;
    margin-top: ${SIZE._16};
    font-size: ${SIZE._14};
  }
`;

export const Actions = styled.div`
  margin-top: ${SIZE._16};
  display: flex;
  gap: ${SIZE._32};

  svg {
    cursor: not-allowed;

    &:first-child {
      cursor: pointer;
    }
  }
`;