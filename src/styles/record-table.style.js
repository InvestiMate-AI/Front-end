import styled from "styled-components";

export const TableContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  margin: 2rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  // table-layout: fixed; /* 고정된 테이블 레이아웃 */
`;

export const THead = styled.thead`
  background-color: #f2f2f2;
  display: table;
  width: 100%;
  table-layout: fixed; /* 헤더도 고정된 너비로 설정 */
`;

export const Th = styled.th`
  padding: 1rem;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(4),
  &:nth-child(5) {
    width: 15%; /* 1의 비율 */
  }

  &:nth-child(3) {
    width: 40%; /* 2의 비율 */
  }

  // border: 1px solid #ddd;

  // &:first-child {
  //   border-top-left-radius: 10px;
  // }

  // &:last-child {
  //   border-top-right-radius: 10px;
  // }
`;

export const TBody = styled.tbody`
  display: block;
  max-height: 200px;
  overflow-y: auto;
  width: 100%;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  text-align: center;
  padding: 1rem;

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(4),
  &:nth-child(5) {
    width: 15%; /* 1의 비율 */
  }

  &:nth-child(3) {
    width: 40%; /* 2의 비율 */
  }
`;
