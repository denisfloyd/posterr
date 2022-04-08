import styled from "styled-components";
import { convertPixelToREM } from "styles/abstracts/_functions";
import { flexbox } from "styles/abstracts/_mixins";

export const Container = styled.header`
  height: ${convertPixelToREM(45)};
  background: var(--white);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  width: 100vw;
  content: "";
  z-index: 1;

  ${flexbox()}
`;

export const Content = styled.div`
  width: 80%;
  ${flexbox("row", "center", "space-between")};

  h4 {
    font-family: "Lobster", cursive;
  }
`;

export const Banner = styled.div`
  font-family: "Lobster", cursive;
  font-size: 3rem;
  height: ${convertPixelToREM(200)};
  width: 100%;
  background-color: var(--blue-200);
  margin-top: ${convertPixelToREM(45)};

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--white);
`;
