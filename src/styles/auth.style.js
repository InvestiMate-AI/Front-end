import styled from "styled-components";
import themes from "./theme";

export const Header = styled.div`
  display: flex;
  padding 30px 60px;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;

export const HomeButton = styled.button`
  background: none;
  color: ${themes.theme.primaryColor};
  font-weight: 900;
  font-size: 2rem;
  cursor: pointer;
  margin: auto;
  padding: 2rem;
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 600;

  .auth-button-list {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }

  .auth-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 1rem;
    color: rgb(0, 0, 0);
    cursor: pointer;
    width: 100%; /* 너비를 100%로 설정하여 버튼 너비를 동일하게 만듦 */
  }
`;
