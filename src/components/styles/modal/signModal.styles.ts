import styled from "styled-components";

export const SignUpModalContainer = styled.form`
  width: 568px;
  /* height: 614px; */
  padding: 32px;
  background-color: white;
  z-index: 12;
  > section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .modal-close-x-icon {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    margin: 0 0 40px auto;
  }
  .input-wrap {
    position: relative;
  }
`;
export const SignInModalContainer = styled.div`
  width: 568px;
  padding: 88px 32px 32px 32px;
  background-color: white;
  z-index: 12;
`;
