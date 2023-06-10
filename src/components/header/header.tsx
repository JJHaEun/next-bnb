import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "../../../store";
import { authActions } from "../../../store/auth";
import AuthModal from "../auth/authModal";
import SignUpModal from "../auth/signUpModal";
import HamburgerIcon from "../commons/svg/logInHeaderIcon";
import AirBnBIconComponents from "../commons/svg/logoIcon";
import AirBnBLogoTextComponents from "../commons/svg/logoText";
import { useShowModalSign } from "../event/hooks/useModal";
import * as S from "../styles/header/header.styles";

export default function Header(): JSX.Element {
  const { closeModal, showSignModal, ModalPortal } = useShowModalSign();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  return (
    <>
      <ModalPortal>
        <AuthModal closeModal={closeModal} />
      </ModalPortal>
      <S.Container>
        <Link href="/" legacyBehavior>
          <a className="header-logo-wrap">
            <AirBnBIconComponents />
            <AirBnBLogoTextComponents />
          </a>
        </Link>
        {!user.isLoggedIn && (
          <section className="header-sign-wrap">
            <button
              className="signUp-button"
              onClick={() => {
                dispatch(authActions.setAuthMode("signup")); // state변경
                showSignModal();
              }}
            >
              회원가입
            </button>
            <button
              className="signIn-button"
              onClick={() => {
                dispatch(authActions.setAuthMode("login"));
                showSignModal();
              }}
            >
              로그인
            </button>
          </section>
        )}
        {user.isLoggedIn && (
          <button className="header-user-profile">
            <HamburgerIcon />
            <img
              src="/static/image/user/default_user_profile_image.jpg"
              className="header-user-profile-img"
              alt="유저"
            />
          </button>
        )}
      </S.Container>
    </>
  );
}
