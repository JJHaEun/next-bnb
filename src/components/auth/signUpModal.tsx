import Input from "../commons/Input";
import CloseEyeIcon from "../commons/svg/closeEye";
import CloseIcon from "../commons/svg/closeIcon";
import EmailIcon from "../commons/svg/email";
import OpenEyeIcon from "../commons/svg/openEye";
import PersonIcon from "../commons/svg/person";
import { useSignUp } from "../event/hooks/useSignUp";
import { SignUpModalContainer } from "../styles/modal/signModal.styles";

export default function SignUpModal(): JSX.Element {
  const { onChangeUser, user, hidePassword, toggleHidePassword } = useSignUp();
  return (
    <>
      <SignUpModalContainer>
        <CloseIcon className="modal-close-x-icon" />

        <section>
          <div className="input-wrap">
            <Input
              value={user.email}
              id="email"
              name="email"
              placeholder="이메일 주소"
              icon={<EmailIcon />}
              onChange={onChangeUser}
            />
          </div>
          <div className="input-wrap">
            <Input
              value={user.lastName}
              id="lastName"
              placeholder="이름(예: 길동)"
              icon={<PersonIcon />}
              onChange={onChangeUser}
            />
          </div>
          <div className="input-wrap">
            <Input
              value={user.firstName}
              id="firstName"
              placeholder="성(예: 홍)"
              icon={<PersonIcon />}
              onChange={onChangeUser}
            />
          </div>
          <div className="input-wrap">
            <Input
              value={user.password}
              id="password"
              placeholder="비밀번호 설정하기"
              type={hidePassword ? "text" : "password"}
              icon={
                hidePassword ? (
                  <OpenEyeIcon clickOpenClose={toggleHidePassword} />
                ) : (
                  <CloseEyeIcon clickOpenClose={toggleHidePassword} />
                )
              }
              onChange={onChangeUser}
            />
          </div>
        </section>
      </SignUpModalContainer>
    </>
  );
}
