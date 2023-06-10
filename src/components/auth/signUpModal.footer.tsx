import styled from "styled-components";
import palette from "../../../styles/palette";

const MoveToLogin = styled.div`
  .signUp-Under-Move-to-Login {
    padding: 16px 0 32px 0;
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  .move-login {
    font-weight: 600;
    color: ${palette.dark_cyan};
    cursor: pointer;
  }
`;

export default function SignUpModalFooter(): JSX.Element {
  return (
    <MoveToLogin className="signUp-Under-Move-to-Login">
      <span className="Under-question">이미 에어비앤비 계정이 있나요?</span>
      <span className="move-login">로그인</span>
    </MoveToLogin>
  );
}
