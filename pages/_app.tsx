import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
