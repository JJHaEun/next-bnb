import App, { AppContext, AppProps } from "next/app";
import Header from "../src/components/header/header";
import { axios } from "../src/lib/api";
import { meAPI } from "../src/lib/api/auth";
import { cookieStringToObject } from "../src/lib/utils";
import { initStore, wrapper } from "../store";
import { userActions } from "../store/user";
import { GlobalStyle } from "../styles/GlobalStyles";

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <div id="root-modal" />
    </>
  );
};
app.getInitialProps = async (context: AppContext) => {
  const appInitialProps = await App.getInitialProps(context);
  const cookieObject = cookieStringToObject(context.ctx.req?.headers.cookie);
  console.log(cookieObject);
  const { isLoggedIn } = initStore().getState().user;
  try {
    if (!isLoggedIn && cookieObject?.access_token) {
      // isLoggedIn이 true거나 access_token이 있으면 api보내지 않음ㅁ
      // if (!isLoggedIn && String(cookieObject?.access_token)) {
      //   // access_token 서버로 보내기(api요청 헤더에 같이 보내기) 객체로 만든 Cookie중 access_token만 뽑음
      axios.defaults.headers.cookie = String(cookieObject?.access_token);
      const { data } = await meAPI();
      console.log(data, ":data");
      // redux스토어에 저장하기
      initStore().dispatch(userActions.setLoggedInUser(data));
    }
  } catch (e) {
    console.log(e);
  }

  return { ...appInitialProps };
};
export default wrapper.withRedux(app);
