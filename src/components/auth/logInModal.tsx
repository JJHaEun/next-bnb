import Button from "../commons/button";
import Input from "../commons/Input";
import CloseEyeIcon from "../commons/svg/closeEye";
import CloseIcon from "../commons/svg/closeIcon";
import EmailIcon from "../commons/svg/email";
import OpenEyeIcon from "../commons/svg/openEye";
import { useLogIn } from "../event/hooks/useLogIn";
import { useSignUpInput } from "../event/hooks/useSignUpInput";
import { useSubmitLogIn } from "../event/hooks/useSubmitLogIn";
import { LogInContainer } from "../styles/modal/logInModal.styles";
import AuthModalFooter from "./Modal.footer";

interface IProps {
  closeModal: () => void;
}

export default function LogInModal({ closeModal }: IProps): JSX.Element {
  const { hidePassword, toggleHidePassword } = useSignUpInput();
  const { loginInput, onChangeLoginInput, changeToSignUpModal } = useLogIn();
  const { onSubmitLogIn, validateMode } =
    useSubmitLogIn(loginInput)(closeModal);
  return (
    <LogInContainer onSubmit={onSubmitLogIn}>
      <CloseIcon className="modal-close-x-icon" onClick={closeModal} />
      <section>
        <div className="input-wrap">
          <Input
            placeholder="이메일 주소"
            name="email"
            type="email"
            icon={<EmailIcon />}
            id="email"
            value={loginInput.email}
            onChange={onChangeLoginInput}
            validateMode={validateMode}
            useValidation
            isValid={loginInput.email !== ""}
            errorMessage="이메일이 필요합니다."
          />
        </div>
        <div className="input-wrap">
          <Input
            placeholder="비밀번호 설정하기"
            type={hidePassword ? "text" : "password"}
            icon={
              hidePassword ? (
                <OpenEyeIcon clickOpenClose={toggleHidePassword} />
              ) : (
                <CloseEyeIcon clickOpenClose={toggleHidePassword} />
              )
            }
            id="password"
            value={loginInput.password}
            onChange={onChangeLoginInput}
            validateMode={validateMode}
            useValidation
            isValid={loginInput.password !== ""}
            errorMessage="비밀번호를 입력하세요"
          />
        </div>
      </section>
      <section className="login-modal-submit-button-wrap">
        <Button>로그인</Button>
      </section>
      <AuthModalFooter
        question={"에어비앤비 계정이 없으세요?"}
        moveTo={"회원가입"}
        changeTo={changeToSignUpModal}
      />
    </LogInContainer>
  );
}
