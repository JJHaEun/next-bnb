import styled from "styled-components";
import palette from "../../../../styles/palette";

export const SignUpModalContainer = styled.form`
  width: 568px;
  /* height: 614px; */
  padding: 32px;
  background-color: white;
  z-index: 12;
  > section {
    display: flex;
    flex-direction: column;
    /* gap: 16px; */
  }
  .modal-close-x-icon {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    margin: 0 0 40px auto;
  }
  .input-wrap {
    position: relative;
    /* width: 568px; */
  }
  .select-section {
    padding: 16px 0;
  }
  .signUp-birthday {
    font-weight: 600;
    padding-bottom: 8px;
  }
  .signUp-modal-birthday-info {
    font-size: 14px;
    color: ${palette.gray_48};
  }
  .signUp-birthday-selector {
    display: flex;
    flex-direction: row;
    padding-bottom: 24px;
    gap: 16px;
  }
  .signUp-month-selector {
    flex-grow: 1; // 균등하게 나눠줄 수 있음..
  }
  .signUp-day-selector {
    width: 25%;
  }
  .signUp-year-selector {
    width: 33.3333%;
  }
  .signUp-modal-submit-button-wrap {
    padding-bottom: 16px;
    border-bottom: 1px solid ${palette.gray_eb};
    > button {
      background-color: ${palette.bittersweet};
      padding: 14.5px 222px;
    }
  }
  .signUp-Under-Move-to-Login {
    padding: 16px 0 32px 0;
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
  .move-login {
    font-weight: 600;
    color: ${palette.dark_cyan};
    cursor: pointer;
  }
`;
export const SignInModalContainer = styled.div`
  width: 568px;
  padding: 88px 32px 32px 32px;
  background-color: white;
  z-index: 12;
`;
