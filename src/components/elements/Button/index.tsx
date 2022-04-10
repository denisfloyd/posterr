import { ReactNode, ButtonHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

type ButtonProps = {
  children?: ReactNode;
  shape?: "circle" | "square" | "default";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ shape = "default", children, ...rest }: ButtonProps) {
  return (
    <Container type="button" {...rest} shape={shape}>
      {children}
    </Container>
  );
}
