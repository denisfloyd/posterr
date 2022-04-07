import styled from "styled-components";
import { convertPixelToREM } from "styles/abstracts/_functions";
import { flexbox } from "styles/abstracts/_mixins";
import { SIZE } from "styles/abstracts/_variables";

export const ContainerModal = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Content = styled.section`
  position: relative;
  height: 100%;
  ${flexbox("column")};
  max-width: ${convertPixelToREM(500)};
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  ${flexbox("row", "center", "end")};
  height: ${convertPixelToREM(50)};
  background-color: var(--white);
  border-radius: 8px 8px 0 0;

  svg {
    cursor: pointer;
    margin: ${SIZE._8};
  }
`;
