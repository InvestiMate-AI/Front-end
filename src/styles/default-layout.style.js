import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 전체 화면 높이 사용 */
`;

export const Main = styled.main`
  flex: 1 1 auto; /* 나머지 공간을 차지 */
  overflow-y: hidden;
`;
