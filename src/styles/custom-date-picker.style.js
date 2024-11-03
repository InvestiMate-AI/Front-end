import styled from "styled-components";
import themes from "./theme";

export const CustomDateContainer = styled.div`
  position: relative;
`;

export const CustomDatePicker = styled.div`
  position: absolute; /* 레이아웃에서 벗어나게 설정 */
  top: 100%; /* 부모 컨테이너 아래에 표시 */
  left: 0;
  width: 100%;
  background-color: ${themes.colors.white};
  border: 1px solid #ccc;
  border-radius: 1rem;
  max-height: 200px; /* 최대 높이 설정 */
  overflow-y: auto; /* 스크롤 가능하도록 설정 */
  z-index: 200; /* 다른 요소 위에 표시되도록 설정 */
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export const CustomDatePickerInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
`;
