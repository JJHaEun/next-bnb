import styled from "styled-components";
import palette from "../../../../styles/palette";

// interface IconProps {
//   // 1. 타입을 Interface로 만들어서 적는 방법.
//   iconExist: boolean;
// }
/* padding: ${(props: IconProps) =>
      props.iconExist ? "0 44px 0 11px" : "0 11px"}; */

export const InputContainer = styled.div<{
  iconExist?: boolean;
  error?: boolean;
}>`
  // 2. 여기다가 바로 타입을 적는 방법.
  > input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: ${({ iconExist }) => (iconExist ? "0 44px 0 11px" : "0 11px")};
    border: ${({ error }) =>
      error ? `1px solid ${palette.orange}` : `1px solid ${palette.gray_eb}`};
    border-radius: 4px;
    outline: none;
    background-color: ${({ error }) => (error ? `${palette.orange}` : "")};
    ::placeholder {
      color: ${palette.gray_76};
    }
    &:focus {
      border-color: ${palette.dark_cyan} !important;
    }
  }
  .input-icon-wrap {
    position: absolute;
    top: 0px;
    right: 11px;
    height: 46px;
    display: flex;
    align-items: center;
  }
`;
