import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 전체 화면 높이 사용 */
`;

export const Header = styled.div`
  display: flex;
  flex: 0 0 auto; /* 고정된 높이 */
  widhth: 100%;
  height: 50px;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;

export const Main = styled.div`
  flex: 1 1 auto; /* 나머지 공간을 차지 */
`;

export const Footer = styled.div`
  /* Undetermined */
`;
