import { AppProps } from "next/app";
import Header from "../src/components/header/header";
import { GlobalStyle } from "../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <div id="root-modal" />
    </>
  );
}
