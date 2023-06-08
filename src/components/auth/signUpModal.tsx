import { dayList, monthList, yearList } from "../../lib/staticData";
import Button from "../commons/button";
import Input from "../commons/Input";
import Selector from "../commons/selector";
import CloseEyeIcon from "../commons/svg/closeEye";
import CloseIcon from "../commons/svg/closeIcon";
import EmailIcon from "../commons/svg/email";
import OpenEyeIcon from "../commons/svg/openEye";
import PersonIcon from "../commons/svg/person";
import { useOnFocusPassword } from "../event/hooks/useonFocusedPassword";
import { usePasswordValidation } from "../event/hooks/usePasswordvalidation";
import { useSignUpInput } from "../event/hooks/useSignUpInput";
import { useSignUpSelector } from "../event/hooks/useSignUpSelect";
import { useSubmitSignUp } from "../event/hooks/useSubmitSignUp";
import { SignUpModalContainer } from "../styles/modal/signModal.styles";
import PasswordWarning from "./passwordWarning";

interface IProps {
  closeModal: () => void;
}
export default function SignUpModal({ closeModal }: IProps): JSX.Element {
  const { onChangeUser, user, hidePassword, toggleHidePassword } =
    useSignUpInput();

  const { birthDate, onChangeBirthDate } = useSignUpSelector();
  const { onSubmitSignUp, validateMode } =
    useSubmitSignUp(birthDate)(user)(closeModal);
  const { onFocusPassword, passwordFocused } = useOnFocusPassword();
  const {
    isPasswordHasNameOrEmail,
    isPasswordHasNumberOrSymbol,
    isPasswordMinLength,
  } = usePasswordValidation(user);

  return (
    <>
      <SignUpModalContainer onSubmit={onSubmitSignUp}>
        <CloseIcon className="modal-close-x-icon" onClick={closeModal} />

        <section>
          <div className="input-wrap">
            <Input
              value={user.email}
              id="email"
              name="email"
              placeholder="이메일 주소"
              icon={<EmailIcon />}
              onChange={onChangeUser}
              validateMode={validateMode}
              useValidation
              isValid={!!user.email}
              errorMessage="이메일을 입력해주세요"
            />
          </div>
          <div className="input-wrap">
            <Input
              value={user.lastname}
              id="lastname"
              placeholder="이름(예: 길동)"
              icon={<PersonIcon />}
              onChange={onChangeUser}
              validateMode={validateMode}
              useValidation
              isValid={!!user.lastname}
              errorMessage="이름을 입력해주세요"
            />
          </div>
          <div className="input-wrap">
            <Input
              value={user.firstname}
              id="firstname"
              placeholder="성(예: 홍)"
              icon={<PersonIcon />}
              onChange={onChangeUser}
              validateMode={validateMode}
              useValidation
              isValid={!!user.firstname}
              errorMessage="성을 입력해주세요"
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
              validateMode={validateMode}
              useValidation
              isValid={
                !isPasswordHasNameOrEmail &&
                !isPasswordHasNumberOrSymbol &&
                isPasswordMinLength
              }
              errorMessage="비밀번호를 입력해주세요"
              onFocus={onFocusPassword}
            />
          </div>
          {passwordFocused && (
            <>
              <PasswordWarning
                isValid={isPasswordHasNameOrEmail}
                text="비밀번호에 본인 이름이나 이메일 주소를 포함할 수 없습니다."
              />
              <PasswordWarning isValid={!isPasswordMinLength} text="최소 8자" />
              <PasswordWarning
                isValid={isPasswordHasNumberOrSymbol}
                text="숫자나 기호를 포함하세요"
              />
            </>
          )}
        </section>
        <section className="select-section">
          <label className="signUp-birthday">생일</label>
          <span className="signUp-modal-birthday-info">
            만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른
            에어비앤비 이용자에게 공개되지 않습니다.
          </span>
          <div className="signUp-birthday-selector">
            <div className="signUp-month-selector">
              <Selector
                name="birthMonth"
                options={monthList}
                defaultValue={birthDate.birthMonth || "월"}
                disableOptions={["월"]}
                onChange={onChangeBirthDate}
                isValid={!!birthDate.birthMonth}
              />
            </div>
            <div className="signUp-day-selector">
              <Selector
                name="birthDay"
                options={dayList}
                defaultValue={birthDate.birthDay || "일"}
                disableOptions={["일"]}
                onChange={onChangeBirthDate}
                isValid={!!birthDate.birthDay}
              />
            </div>
            <div className="signUp-year-selector">
              <Selector
                name="birthYear"
                options={yearList}
                defaultValue={birthDate.birthYear || "년"}
                disableOptions={["년"]}
                onChange={onChangeBirthDate}
                isValid={!!birthDate.birthYear}
              />
            </div>
          </div>
        </section>
        <section className="signUp-modal-submit-button-wrap">
          <Button>가입하기</Button>
        </section>
        <div className="signUp-Under-Move-to-Login">
          <span className="Under-question">이미 에어비앤비 계정이 있나요?</span>
          <span className="move-login">로그인</span>
        </div>
      </SignUpModalContainer>
    </>
  );
}
