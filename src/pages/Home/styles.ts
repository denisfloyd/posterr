import styled from "styled-components";
import { flexbox, mediaQuery, setDimensions } from "styles/abstracts/_mixins";
import { SIZE } from "styles/abstracts/_variables";

export const Container = styled.main`
  position: relative;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  max-width: 80%;
  margin: ${SIZE._24} auto;

  background-color: var(--gray-100);

  ${mediaQuery("max", "md")`
    grid-template-columns: 1fr
  `}
`;

export const Profile = styled.aside`
  ${flexbox("column", "flex-start", "flex-start")};
  transform: translateY(-100px);

  ${mediaQuery("max", "md")`
    display: none;
  `}

  img {
    ${setDimensions("13rem", "13rem")}
  }
`;

export const CheckContainer = styled.div`
  ${flexbox("row", "center", "flex-start")};
  gap: ${SIZE._4};
`;

export const Posts = styled.aside`
  overflow: hidden;
  ul {
    list-style: none;
  }
`;
