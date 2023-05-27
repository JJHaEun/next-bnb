import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import palette from "./palette";

const globalStyle = css`
  ${reset}
  * {
    box-sizing: border-box;
    padding: 0px;
  }
  body {
    color: ${palette.black_22};
    font-family: "AppleSDGothicNeo", "Noto Sans", "Noto Sans KR", sans-serif;
  }
`;
export const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;
