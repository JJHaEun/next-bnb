import Button from "../commons/button";
import Input from "../commons/Input";
import CloseEyeIcon from "../commons/svg/closeEye";
import CloseIcon from "../commons/svg/closeIcon";
import EmailIcon from "../commons/svg/email";
import OpenEyeIcon from "../commons/svg/openEye";
import { useLogIn } from "../event/hooks/useLogIn";
import { useSignUpInput } from "../event/hooks/useSignUpInput";
import { LogInContainer } from "../styles/modal/logInModal.styles";
import AuthModalFooter from "./signUpModal.footer";

interface IProps {
  closeModal: () => void;
}

export default function LogInModal({ closeModal }: IProps): JSX.Element {
  const { hidePassword, toggleHidePassword } = useSignUpInput();
  const { loginInput, onChangeLoginInput, changeToSignUpModal } = useLogIn();
  return (
    <LogInContainer>
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
