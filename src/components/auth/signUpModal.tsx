import { dayList, monthList, yearList } from "../../lib/staticData";
import Input from "../commons/Input";
import Selector from "../commons/selector";
import CloseEyeIcon from "../commons/svg/closeEye";
import CloseIcon from "../commons/svg/closeIcon";
import EmailIcon from "../commons/svg/email";
import OpenEyeIcon from "../commons/svg/openEye";
import PersonIcon from "../commons/svg/person";
import { useSignUpInput } from "../event/hooks/useSignUpInput";
import { useSignUpSelector } from "../event/hooks/useSignUpSelect";
import { SignUpModalContainer } from "../styles/modal/signModal.styles";

export default function SignUpModal(): JSX.Element {
  const { onChangeUser, user, hidePassword, toggleHidePassword } =
    useSignUpInput();

  const { birthDate, onChangeBirthDate } = useSignUpSelector();
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
              />
            </div>
            <div className="signUp-day-selector">
              <Selector
                name="birthDay"
                options={dayList}
                defaultValue={birthDate.birthDay || "일"}
                disableOptions={["일"]}
                onChange={onChangeBirthDate}
              />
            </div>
            <div className="signUp-year-selector">
              <Selector
                name="birthYear"
                options={yearList}
                defaultValue={birthDate.birthYear || "년"}
                disableOptions={["년"]}
                onChange={onChangeBirthDate}
              />
            </div>
          </div>
        </section>
      </SignUpModalContainer>
    </>
  );
}
