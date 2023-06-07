import GreenCheckIcon from "../commons/svg/GreenCheckIcon";
import RedXIcon from "../commons/svg/RedXIcon";
import { PasswordWarningContainer } from "../styles/passwordWarning/passwordWarning.styles";

interface IPropsPasswordWaring {
  isValid: boolean;
  text: string;
}

export default function PasswordWarning({
  isValid,
  text,
}: IPropsPasswordWaring): JSX.Element {
  return (
    <PasswordWarningContainer isValid={isValid}>
      {isValid ? <RedXIcon /> : <GreenCheckIcon />}
      {text}
    </PasswordWarningContainer>
  );
}
