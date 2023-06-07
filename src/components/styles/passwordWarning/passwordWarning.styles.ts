import styled from "styled-components";
import palette from "../../../../styles/palette";

export const PasswordWarningContainer = styled.p<{ isValid: boolean }>`
  color: ${({ isValid }) =>
    isValid ? palette.davidson_orange : palette.green};
  display: flex;
  align-items: center;
  svg {
    padding-right: 8px;
  }
`;
