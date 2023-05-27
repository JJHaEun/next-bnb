import Link from "next/link";
import AirBnBIconComponents from "./components/commons/svg/logoIcon";
import AirBnBLogoTextComponents from "./components/commons/svg/logoText";
import * as S from "./components/styles/header/header.styles";

export default function Home(): JSX.Element {
  return (
    <>
      <S.Container>
        <Link href="/" legacyBehavior>
          <a className="header-logo-wrap">
            <AirBnBIconComponents />
            <AirBnBLogoTextComponents />
          </a>
        </Link>
        <section className="header-sign-wrap">
          <button className="signUp-button">회원가입</button>
          <button className="signIn-button">로그인</button>
        </section>
      </S.Container>
    </>
  );
}
