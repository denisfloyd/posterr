import { ReactNode, ButtonHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";

import { Container } from "./styles";

type ButtonProps = {
  children?: ReactNode;
  icon?: React.ComponentType<IconBaseProps>;
  shape?: "circle" | "square" | "default";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  icon: Icon,
  shape = "default",
  children,
  ...rest
}: ButtonProps) {
  return (
    <Container
      type="button"
      {...rest}
      hasIcon={!!Icon}
      isIconButton={!!Icon && !children}
      shape={shape}
    >
      {Icon && <Icon />}
      {children}
    </Container>
  );
}
