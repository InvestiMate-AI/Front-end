import styled from "styled-components";
import themes from "./theme";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e0e0e0;
`;

export const HomeButton = styled.button`
  background: none;
  color: ${themes.theme.primaryColor}; /* 텍스트 색상 */
  font-size: 18px; /* 텍스트 크기 */
  font-weight: bold;
  width: auto;
  height: 50px;
  border: none;
  cursor: pointer;
  padding: 0 15px; /* 텍스트 주변 패딩 */
`;

export const NavContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    overflow-x: auto; /* 너비가 줄어들 때 스크롤 가능하게 */
  }
`;

export const NavButton = styled.button`
  margin: 0 10px;
  padding: 5px 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background: none;
  border: 1px solid #000;
  cursor: pointer;
`;

export const UserName = styled.span`
  margin-right: 10px;
`;

export const UserButton = styled.button`
  padding: 5px 10px;
  background: none;
  border: 1px solid #000;
  cursor: pointer;
`;
