import styled from "styled-components";
import themes from "./theme";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #e0e0e0;
  background: ${themes.colors.gray_50};
`;

export const HomeButton = styled.button`
  background: none;
  color: ${themes.theme.primaryColor};
  font-weight: 900;
  font-size: 1.5rem;
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
  font-weight: 550;
  font-size: 1rem;
  text-align: center;
  min-width: 50px;
  white-space: nowrap;
  background: none;
  cursor: pointer;
  color: black;
  text-decoration: none;

  transition: font-weigh 0.5s ease;

  &:hover {
    font-weight: bold;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.button`
  font-weight: 500;
  background: #fff5cd;
  text-align: center;
  color: black;
  border: 1px;
  border-radius: 50px;
  cursor: pointer;
  white-space: nowrap;
  width: 5rem;
  min-height: 2.25rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  transition:
    background-color 0.5s ease,
    color 0.5s ease,
    font-weight 0.5s ease;

  &:hover {
    background-color: #ffe79b;
    color: black;
    font-weight: bold;
  }
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
