import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  padding 30px 60px;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;


  .button {
    ${(props) => props.theme.fonts.font_xl};
    margin: auto;
    padding: 2rem;
    cursor: pointer;
  }
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
    padding: 1rem 10rem;
    ${(props) => props.theme.fonts.font_lg};
    color: rgb(0, 0, 0);
    cursor: pointer;
  }
`;
