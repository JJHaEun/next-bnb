import { InputHTMLAttributes } from "react";
import { InputContainer } from "../styles/Input/input.styles";

interface InputIProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  isValid?: boolean;
  useValidation?: boolean;
  validateMode?: boolean;
  errorMessage?: string;
}

export default function Input({
  icon,
  isValid = false,
  errorMessage,
  useValidation = true,
  validateMode,
  ...props
}: InputIProps): JSX.Element {
  return (
    <InputContainer
      iconExist={!!icon}
      isValid={isValid}
      useValidation={validateMode && useValidation}
    >
      <input {...props} />
      {icon}
      {useValidation && validateMode && !isValid && errorMessage ? (
        <p className="input-error-message">{errorMessage}</p>
      ) : (
        <p className="input-error-message" />
      )}
    </InputContainer>
  );
}
