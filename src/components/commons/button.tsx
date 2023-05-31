import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "../styles/button/button.style";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({
  children,
  ...props
}: IButtonProps): JSX.Element {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}
