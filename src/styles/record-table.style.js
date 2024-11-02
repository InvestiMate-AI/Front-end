import styled from "styled-components";

export const RecordTableLayout = styled.div`
  max-width: 1200px; /* 화면 크기에 따라 조절 */
  width: 100%; /* 부모 요소의 100%를 차지 */
  overflow-x: auto; /* 가로 스크롤 활성화 */
  overflow-y: hidden;
  align-items: center;
  margin: 2rem;
`;

export const RecordTableContainer = styled.div`
  overflow: hidden;
  margin: 0 1rem 0 1rem;
`;

export const TableHeader = styled.div`
  width: auto;
  max-height: 24rem;
  overflow-y: auto;
  width: auto;
  padding: 0.25rem 1rem 0 0.5rem;
  margin: 0 1rem 0 1rem;
`;

export const TableHeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  background-color: #f2f2f2;
  margin-bottom: 0.5rem;
  box-shadow: 0 0 4px gray;
`;

export const TableHeaderCell = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */

  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis; /* 넘칠 경우 '...'으로 표시 */

  border: 0px solid #000000;

  &:nth-child(1) {
    width: 7.5%;
    border-radius: 1rem 0 0 0;
  }

  &:nth-child(2) {
    width: 27.5%;
  }

  &:nth-child(3) {
    width: 25%;
  }

  &:nth-child(4) {
    width: 17.5%;
  }

  &:nth-child(5) {
    width: 17.5%;
  }

  &:nth-child(6) {
    width: 5%;
    border-radius: 0 1rem 0 0;
  }

  padding: 1rem;
`;

export const TableBody = styled.div`
  // display: block;
  max-height: 24rem;
  overflow-y: auto;
  width: auto;
  padding: 0.5rem 0.25rem 0 0.5rem;
  margin: 0 1rem 0 1rem;
`;

export const TableBodyRow = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 1rem;
  background-color: white;
  margin-bottom: 0.5rem;

  &:hover {
    box-shadow: 0 0 2px gray;
  }
`;

export const TableBodyCell = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  text-align: center;
  padding: 1rem;

  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis; /* 넘칠 경우 '...'으로 표시 */

  &:nth-child(1) {
    width: 7.5%;
  }

  &:nth-child(2) {
    width: 27.5%;
  }

  &:nth-child(3) {
    width: 25%;
  }

  &:nth-child(4) {
    width: 17.5%;
  }

  &:nth-child(5) {
    width: 17.5%;
  }

  &:nth-child(6) {
    width: 5%;
  }

  .button-cell {
    padding: "0.5rem 1rem 0.5rem 0.5rem";
    justifycontent: "flex-end";
    alignitems: "center";
  }
`;

export const sideButton = styled.button`
  cursor: pointer;
  padding: 0;
  margin: 0;
  color: gray; /* 기본 색상 */

  transition: color 0.5s ease;

  &:hover {
    color: black; /* 호버 시 색상 변경 */
  }
`;

export const PopUpMenuButton = styled.button`
  margin: 0 0 1rem 0;
  white-space: nowrap;
  cursor: pointer;
  color: ${(props) =>
    props.color || "initial"}; // 전달된 color prop 사용, 없으면 기본값
  transition: color 0.5s ease;

  &:hover {
    color: ${(props) => props.hoverColor || "black"};
  }
`;
