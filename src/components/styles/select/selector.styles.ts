import styled, { css } from "styled-components";
import palette from "../../../../styles/palette";

interface SelectPropsError {
  isValid: boolean;
  validateMode: boolean;
}

export const SelectorContainer = styled.div<SelectPropsError>`
  width: 100%;
  height: 46px;
  > select {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: white;
    border: 1px solid ${palette.gray_eb};
    padding: 0 11px;
    border-radius: 4px;
    outline: none;
    -webkit-appearance: none;
    background-image: url("/static/svg/arrow_down.svg");
    background-position: right 11px center;
    background-repeat: no-repeat;
    &:focus {
      border-color: ${palette.dark_cyan};
    }
  }
  ${({ isValid, validateMode }) =>
    validateMode &&
    css`
      select {
        border-color: ${isValid ? palette.dark_cyan : palette.tawny} !important;
        background-color: ${isValid ? "white" : palette.snow};
      }
    `}
`;
