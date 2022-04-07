import { convertPixelToREM } from "styles/abstracts/_functions";
import { flexbox, setDimensions } from "styles/abstracts/_mixins";
import { ANIMATIONS, FONT_WEIGHT, SIZE } from "styles/abstracts/_variables";
import styled, { css } from "styled-components";

interface ButtonProps {
  hasIcon?: boolean;
  isIconButton?: boolean;
  shape?: "default" | "square" | "circle";
}

export const Container = styled.button<ButtonProps>`
  height: ${convertPixelToREM(40)};
  padding: ${SIZE._12} ${SIZE._16};
  background-color: var(--blue-300);
  color: var(--white);
  border-radius: 4px;
  border: 0;
  font-size: ${SIZE._14};
  letter-spacing: 1.25px;
  text-transform: uppercase;
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
    props.hasIcon &&
    css`
      ${flexbox()};
      gap: ${SIZE._8};
    `}

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

  ${(props) =>
    props.isIconButton &&
    props.shape === "circle" &&
    css`
      padding: 0;
      ${setDimensions("32px")};

      & > svg {
        font-size: 1.3rem;
      }
    `}
`;
