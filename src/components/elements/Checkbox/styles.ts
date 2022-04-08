import styled from "styled-components";
import { convertPixelToREM } from "styles/abstracts/_functions";
import { SIZE } from "styles/abstracts/_variables";

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 25px;
  border-radius: 16px;
  background: var(--gray-300);
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: var(--white);
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 16px;
  width: 40px;
  height: 25px;

  &:checked + ${CheckBoxLabel} {
    background: var(--green-300);

    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: ${SIZE._20};
      transition: 0.2s;
    }
  }
`;
