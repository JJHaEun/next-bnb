import { InputHTMLAttributes } from "react";
import { InputContainer } from "../styles/Input/input.styles";

interface InputIProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  error?: string;
}

export default function Input({
  icon,
  error,
  ...props
}: InputIProps): JSX.Element {
  return (
    <InputContainer iconExist={!!icon} error={error}>
      <input {...props} />
      <div className="input-icon-wrap">{icon}</div>
    </InputContainer>
  );
}
