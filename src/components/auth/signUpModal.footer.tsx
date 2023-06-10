import styled from "styled-components";
import palette from "../../../styles/palette";

const MoveToLogin = styled.div`
  padding: 16px 0 32px 0;
  display: flex;
  flex-direction: row;
  gap: 8px;
  .move-login {
    font-weight: 600;
    color: ${palette.dark_cyan};
    cursor: pointer;
  }
`;
interface IFooterProps {
  question: string;
  moveTo: string;
}

export default function AuthModalFooter({
  question,
  moveTo,
}: IFooterProps): JSX.Element {
  return (
    <MoveToLogin className="signUp-Under-Move-to-Login">
      <span className="Under-question">{question}</span>
      <span className="move-login">{moveTo}</span>
    </MoveToLogin>
  );
}
