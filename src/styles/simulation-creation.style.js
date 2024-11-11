import styled from "styled-components";
import themes from "./theme";

export const SimulationCreationLayout = styled.div`
  max-height: ${(props) =>
    props.isOpen ? "2000px" : "0px"}; // isOpen이 false면 숨기기

  overflow: ${(props) =>
    props.isOpen ? "visible" : "hidden"}; // isOpen이 false면 숨기기

  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 2rem 2rem 0.5rem 2rem;
`;

export const SimulationCreationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  min-width: 900px;
  height: auto;
  background-color: ${themes.colors.gray_100};
  box-shadow: 0 0 4px gray;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  align-items: center; /* 세로 중앙 정렬 */
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  align-items: center; /* 세로 중앙 정렬 */
  margin: 0.5rem 0;
`;

export const ItemContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  padding: 0 1rem;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  height: 100%;
  width: 100%;
`;

export const ItemHeading = styled.span`
  display: flex;
  align-items: center;
  width: auto;
  padding: 0 1rem;
`;

export const ItemPickerContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
`;

export const CreationButton = styled.button`
  width: 100%;
  padding: 0.5rem 1.5rem;
  background-color: skyblue;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: rgb(211, 211, 211) 0px 0px 4px;

  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  &:hover {
    background-color: #fff5cd;
    color: black;
  }
`;

export const TradeOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 가로 중앙 정렬 */
  align-items: start; /* 세로 중앙 정렬 */
  width: 100%;
  padding: 0 1rem;
`;

export const TradeOptionsHeader = styled.div``;

export const TradeOptionRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  background-color: #ffffffff;
  // border: 1px solid #ccc;
  border-radius: 1rem;
  font-size: 1rem;
  // box-shadow: rgb(211, 211, 211) 0px 0px 4px;
  position: relative; /* position 설정 */
`;

export const TradeOptionRowAddButton = styled.button`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 100%;
  max-height: 20px;
  padding: 0.75rem 1.5rem;
  background-color: skyblue;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: rgb(211, 211, 211) 0px 0px 4px;

  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  &:hover {
    background-color: #fff5cd;
    color: black;
  }
`;

export const CorpSelectionContainer = styled.div`
  min-width: 180px;
  position: relative; /* 자식의 절대 위치 기준이 됨 */
`;

export const CorpSelectionButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;

  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
  cursor: pointer;
  white-space: nowrap;

  background-color: ${themes.colors.white};
  box-shadow: 0 0 4px #d3d3d3;
`;

export const CorpSearchContainer = styled.div`
  position: absolute;
  min-width: 180px;
  width: 100%;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  text-overflow: ellipsis; /* 넘칠 경우 '...'으로 표시 */
  box-sizing: border-box; /* padding과 border를 너비에 포함 */
  z-index: 110;
`;

export const CorpSearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 1rem;
  background: ${themes.colors.gray_100};
  box-shadow: 0 0 4px #d3d3d3;
`;

export const CorpSearchList = styled.ul`
  width: 100%;
  margin: 0;
  position: absolute;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 1rem;
  max-height: 200px;
  overflow-y: auto;
  background: ${themes.colors.gray_50};
  box-shadow: 0 0 4px #d3d3d3;
  list-style: none;
`;

export const CorpSearchListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TradeOptionCellAddButton = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  max-height: 20px;
  padding: 0.75rem 0.25rem;
  margin: 0.25rem 0;
  background-color: skyblue;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: rgb(211, 211, 211) 0px 0px 4px;

  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  &:hover {
    background-color: #fff5cd;
    color: black;
  }
`;

export const TradeOptionCellSelectionContainer = styled.div`
  min-width: 180px;
  position: relative; /* 자식의 절대 위치 기준이 됨 */
  margin-right: 0.75rem;
`;

export const TradeOptionCellSelectionButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  min-width: 15rem;
  max-width: 15rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
  cursor: pointer;
  white-space: nowrap;

  background-color: ${themes.colors.white};
  box-shadow: 0 0 4px #d3d3d3;
`;

export const TradeOptionCellSearchContainer = styled.div`
  position: absolute;
  min-width: 180px;
  width: 100%;
  white-space: nowrap; /* 텍스트 줄바꿈 방지 */
  text-overflow: ellipsis; /* 넘칠 경우 '...'으로 표시 */
  box-sizing: border-box; /* padding과 border를 너비에 포함 */
  z-index: 100;
`;

export const TradeOptionCellSearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 1rem;
  background: ${themes.colors.gray_100};
  box-shadow: 0 0 4px #d3d3d3;
`;

export const TradeOptionCellSearchList = styled.ul`
  width: 100%;
  margin: 0;
  position: absolute;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 1rem;
  max-height: 200px;
  overflow-y: auto;
  background: ${themes.colors.gray_50};
  box-shadow: 0 0 4px #d3d3d3;
  list-style: none;
`;

export const TradeOptionCellSearchListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  font-size: 0.75rem;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TradeOptionCellContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;

  padding: 0.5rem 1rem;
  border-radius: 1rem;
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
  cursor: pointer;
  white-space: nowrap;

  background-color: ${themes.colors.white};
  box-shadow: 0 0 4px #d3d3d3;
`;

export const CloseButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
  border-radius: 50px;
  font-size: 1rem;
  transition:
    background-color 0.5s ease,
    color 0.5s ease,
    box-shadow 0.5s ease;
  position: absolute; /* 절대 위치 설정 */
  right: 0; /* 우측 끝에 배치 */

  &:hover {
    background-color: red;
    color: black;
    box-shadow: rgb(211, 211, 211) 0px 0px 4px;
  }

  padding: 0.25rem;
  margin: 0 0.5rem;
`;

export const Tooltip = styled.div`
  position: absolute;
  padding: 8px;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  font-size: 0.75rem;
  pointer-events: none; /* 마우스 이벤트가 툴팁에 영향을 주지 않도록 설정 */
  white-space: nowrap;
  z-index: 1000;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 40px;
  // padding: 0.5rem;
  background-color: ${themes.colors.white};

  font-size: 1rem;
  min-width: 150px;
  max-width: 180px;
  border-radius: 1rem;
  max-height: 150px;
  margin: 0;
  box-shadow: 0 0 4px #d3d3d3;
  white-space: nowrap;
  padding: 0.25rem;
`;

export const AssetAmountInput = styled.input`
  width: 80%;
  height: 100%;
`;

export const SplitRateInput = styled.input`
  width: 50%;
  height: 100%;
`;
