import styled from "styled-components";
import imageWebp from "../assets/images/image1.webp";

export const StyledComponent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  /* 자식 요소들이 겹치지 않도록 부모 요소를 relative로 설정 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${imageWebp});
    background-size: cover;
    background-position: center;
    opacity: 0.5; /* 배경 이미지의 투명도 설정 */
    z-index: -1; /* 배경 이미지가 자식 요소 아래로 가도록 설정 */
  }
`;
