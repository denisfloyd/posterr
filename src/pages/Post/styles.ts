import styled from "styled-components";
import { convertPixelToREM } from "styles/abstracts/_functions";
import { flexbox } from "styles/abstracts/_mixins";
import { SIZE } from "styles/abstracts/_variables";

export const Container = styled.main`
  width: 100%;
  padding: 0 ${SIZE._16} ${SIZE._16};
  background-color: var(--white);
  gap: ${SIZE._8};

  form {
    ${flexbox("column", "flex-start", "flex-start")};
    gap: ${SIZE._8};
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  padding: ${SIZE._8};
  height: ${convertPixelToREM(150)};

  border: 1px solid var(--gray-300);

  &:focus-visible {
    outline: 0;
  }
`;

export const TextaAreaRemain = styled.span`
  color: var(--red-600);
  align-self: flex-end;
`;
