import { AppProps } from "next/app";
import Header from "../src/components/header/header";
import { wrapper } from "../store";
import { GlobalStyle } from "../styles/GlobalStyles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <div id="root-modal" />
    </>
  );
};
export default wrapper.withRedux(App);
