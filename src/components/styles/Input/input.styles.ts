import styled, { css } from "styled-components";
import palette from "../../../../styles/palette";

// interface IconProps {
//   // 1. 타입을 Interface로 만들어서 적는 방법.
//   iconExist: boolean;
// }
/* padding: ${(props: IconProps) =>
      props.iconExist ? "0 44px 0 11px" : "0 11px"}; */

export const InputContainer = styled.div<{
  iconExist?: boolean;
  errorMessage?: string;
  useValidation?: boolean;
  isValid?: boolean;
}>`
  // 2. 여기다가 바로 타입을 적는 방법.
  display: flex;
  flex-direction: column;
  gap: 8px;

  > input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: ${({ iconExist }) => (iconExist ? "0 44px 0 11px" : "0 11px")};
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    outline: none;
    ::placeholder {
      color: ${palette.gray_76};
    }
    &:focus {
      border-color: ${palette.dark_cyan} !important;
    }
  }
  svg {
    position: absolute;
    /* top: 0px; */
    right: 11px;
    height: 46px;
  }
  .input-error-message {
    padding-top: 3px;
    padding-bottom: 8px;
    font-weight: 600;
    font-size: 14px;
    color: ${palette.tawny};
  }
  ${({ useValidation, isValid }) =>
    useValidation &&
    !isValid &&
    css`
      input {
        background-color: ${palette.snow};
        border-color: ${palette.orange};
        &:focus {
          border-color: ${palette.orange};
        }
      }
    `}
  ${({ useValidation, isValid }) =>
    useValidation &&
    isValid &&
    css`
      input {
        border-color: ${palette.dark_cyan};
      }
    `}
`;
