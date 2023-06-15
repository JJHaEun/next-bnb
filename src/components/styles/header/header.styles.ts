import styled from "styled-components";

export const Container = styled.div`
  font-size: 21px;
  color: gray;
  position: sticky;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0 1px 12px;
  padding-left: 80px;
  align-items: center;
  z-index: 10;
  padding-right: 96px;
  .header-logo-wrap {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .header-logo-wrap + div {
    position: relative;
  }
  .header-sign-wrap {
    display: flex;
    gap: 8px;
    /* padding-right: 96px; */
    > button {
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      height: 42px;
      background: #ffffff;
      border-radius: 22px;
      padding: 12.5px 0;
      font-family: "AppleSDGothicNeo";
    }
    .signUp-button {
      border: none;
      padding: 0 12px;
      &:hover {
        background: #f7f7f7;
      }
    }
    .signIn-button {
      border: 1px solid #ebebeb;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      padding: 0 16px;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
  }
  .header-user-profile {
    display: flex;
    align-items: center;
    height: 42px;
    gap: 12px;
    border: none;
    border-radius: 21px;
    background-color: white;
    cursor: pointer;
    outline: none;
    padding: 6px 6px 6px 17px;
    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    }
    .header-user-profile-img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
`;
