import styled, { css } from "styled-components";

import { spin } from "styles/abstracts/_animations";
import { setDimensions } from "styles/abstracts/_mixins";

interface ContainerProps {
  isSpinning: boolean;
  size: "sm" | "lg";
  type: "primary" | "secondary";
}

export const Container = styled.i<ContainerProps>`
  display: none;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 4px solid var(--white);
  border-top-color: transparent !important;
  animation: ${spin} 0.6s linear infinite;

  ${(props) =>
    props.isSpinning &&
    css`
      display: block;
    `}

  ${(props) =>
    props.type === "primary" &&
    css`
      border: 4px solid var(--blue-200);
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      border: 4px solid var(--gray-300);
    `}

  ${(props) =>
    props.size === "sm" &&
    css`
      ${setDimensions("1rem")};
      border-width: 2px;
    `}
`;
