import Link from "next/link";
import SignUpModal from "../auth/signUpModal";
import AirBnBIconComponents from "../commons/svg/logoIcon";
import AirBnBLogoTextComponents from "../commons/svg/logoText";
import { useShowModalSign } from "../event/hooks/useModal";
import * as S from "../styles/header/header.styles";

export default function Header(): JSX.Element {
  const { modalOpened, showSignModal, ModalPortal } = useShowModalSign();
  return (
    <>
      {modalOpened && (
        <ModalPortal>
          <SignUpModal />
        </ModalPortal>
      )}
      <S.Container>
        <Link href="/" legacyBehavior>
          <a className="header-logo-wrap">
            <AirBnBIconComponents />
            <AirBnBLogoTextComponents />
          </a>
        </Link>
        <section className="header-sign-wrap">
          <button className="signUp-button" onClick={showSignModal}>
            회원가입
          </button>
          <button className="signIn-button">로그인</button>
        </section>
      </S.Container>
    </>
  );
}
