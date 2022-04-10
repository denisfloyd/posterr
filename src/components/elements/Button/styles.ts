import { convertPixelToREM } from "styles/abstracts/_functions";
import { flexbox, setDimensions } from "styles/abstracts/_mixins";
import { ANIMATIONS, FONT_WEIGHT, SIZE } from "styles/abstracts/_variables";
import styled, { css } from "styled-components";

interface ButtonProps {
  shape?: "default" | "square" | "circle";
}

export const Container = styled.button<ButtonProps>`
  height: ${convertPixelToREM(40)};
  padding: ${SIZE._12} ${SIZE._16};
  background-color: var(--blue-200);
  color: var(--white);
  border-radius: 16px;
  border: 0;
  font-size: ${SIZE._14};
  letter-spacing: 1.25px;
  font-weight: ${FONT_WEIGHT.MEDIUM};
  cursor: pointer;

  transition: filter ${ANIMATIONS.DEFAULT},
    background-color ${ANIMATIONS.DEFAULT}, color ${ANIMATIONS.DEFAULT};

  svg {
    font-size: ${SIZE._24};
  }

  &:not(:disabled):hover {
    filter: opacity(0.8);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }

  ${(props) =>
    props.shape === "square" &&
    css`
      border-radius: 0;
    `}

  ${(props) =>
    props.shape === "circle" &&
    css`
      border-radius: 50%;
    `}
`;
