import styled from "styled-components";
import themes from "./theme";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e0e0e0;
  background: ${themes.colors.gray_50};
`;

export const HomeButton = styled.button`
  background: none;
  color: ${themes.theme.primaryColor};
  font-family: "${themes.theme.fontFamily}";
  font-weight: 900;
  font-size: 1.25rem;
  width: auto;
  height: auto;
  cursor: pointer;
  padding: 0 1rem;
`;

export const NavContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: left;
  align-items: center;
`;

export const NavButton = styled.button`
  margin: 0 10px;
  padding: 5px 10px;
  font-family: "${themes.theme.fontFamily}";
  font-weight: 700;
  text-align: center;
  min-width: 50px;
  white-space: nowrap;
  background: none;
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.button`
  margin: 10px;
  padding: 5px 10px;
  font-family: "${themes.theme.fontFamily}";
  font-weight: 500;
  // font-size: 1.25rem;
  color: black;
  text-decoration: none;
  background: none;
  cursor: pointer;
  white-space: nowrap;
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
