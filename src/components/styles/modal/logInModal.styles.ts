import styled from "styled-components";
import palette from "../../../../styles/palette";
import { SignUpModalContainer } from "./signModal.styles";

export const LogInContainer = styled(SignUpModalContainer)`
  .login-modal-submit-button-wrap {
    padding-top: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${palette.gray_eb};
    > button {
      background-color: ${palette.bittersweet};
      padding: 14.5px 222px;
    }
  }
`;
