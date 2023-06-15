import styled from "styled-components";
import palette from "../../../../styles/palette";

export const UserMenu = styled.ul`
  position: absolute;
  right: 0;
  top: 52px;
  width: 240px;
  padding: 8px 0;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  background-color: white;
  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;
    padding: 0 16px;
    cursor: pointer;
    color: ${palette.black_22};
    &:hover {
      background-color: ${palette.gray_f7};
    }
  }
  .header-usermenu-undder {
    border-top: 1px solid ${palette.gray_dd};
    margin-top: 8px;
    padding-top: 8px;
  }
`;
