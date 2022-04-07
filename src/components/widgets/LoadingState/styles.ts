import styled from "styled-components";
import { flexbox } from "styles/abstracts/_mixins";

export const Container = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  ${flexbox()};
`;
