import React, { useState, useEffect } from "react";
import * as S from "../../styles/simulation-creation.style";
import { IoCaretDown } from "react-icons/io5";
import kospiCorpData from "../../assets/corps/KOSPI_list.json";
import { chosungIncludes } from "es-hangul";
import CustomDatePicker from "../CustomDatePicker";
import { fetchSimulationResult } from "../../apis/simulation";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import * as Sidebar from "../../styles/sidebar.style";
import { IoAddOutline, IoCloseOutline } from "react-icons/io5";

export default function SimulationCreation() {
  const [corp, setCorp] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [corpDropdownVisible, setCorpDropdownVisible] = useState(false);
  const [selectedCorp, setSelectedCorp] = useState(null); // 선택된 회사-회사번호 객체
  const [filteredCorps, setFilteredCorps] = useState([]); // 검색 결과

  const [buyOptionRows, setBuyOptionRows] = useState([]); // 매도 조건 행 상태
  const [sellOptionRows, setSellOptionRows] = useState([]); // 매도 조건 행 상태

  const [isOpen, setIsOpen] = useState(true);
  const [toggleDisabled, setToggleDisabled] = useState(false);

  const toggleSidebar = () => {
    if (!toggleDisabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleCorpChange = (event) => {
    const value = event.target.value;
    setCorp(value);

    if (value) {
      let results;
      if (isNaN(value)) {
        // 입력값이 텍스트인 경우 (회사명 검색)
        results = kospiCorpData.filter(
          (corp) =>
            corp.회사명.includes(value) || chosungIncludes(corp.회사명, value)
        );
      } else {
        // 입력값이 숫자인 경우 (종목코드 검색)
        results = kospiCorpData.filter((corp) =>
          corp.종목코드.toString().includes(value)
        );
      }
      setFilteredCorps(results);
    } else {
      setFilteredCorps([]);
    }
  };

  const handleCorpItemClick = (corp) => {
    setSelectedCorp(corp);
    setCorp(`${corp.회사명}`);
    setFilteredCorps([]);
    setCorpDropdownVisible(!corpDropdownVisible);
  };

  const handleStartDateChange = (startDate) => {
    setStartDate(startDate);
  };

  const handleEndDateChange = (endDate) => {
    setEndDate(endDate);
  };

  const createSimulation = async (data) => {
    const response = await fetchSimulationResult(data);
    return response;
  };

  const handleClickBuyOptionRowAddButton = () => {
    setBuyOptionRows([...buyOptionRows, {}]);
  };

  const handleClickSellOptionRowAddButton = () => {
    setSellOptionRows([...sellOptionRows, {}]);
  };

  const handleClickCloseRowButton = (index, type) => {
    if (type === "buy") {
      setBuyOptionRows(buyOptionRows.filter((_, i) => i !== index));
    } else if (type === "sell") {
      setSellOptionRows(sellOptionRows.filter((_, i) => i !== index));
    }

    /*
참고: buyOption, sellOption의 길이는 1 이상 ∞ 이하. 각 원소의 길이는 1 이상 3 이하.
data: {
  "corp": "삼성전자",
  "total_asset": 100000000,
  "split_rate": 0.1,
  "startDate": "2023-10-14",
  "endDate": "2024-03-18",
  "buyOption": [
    ["sma_golden_cross_50_200", "sma_dead_cross_50_200", "sma_golden_cross_recent_50_200"],
    ["sma_golden_cross_50_200", "sma_dead_cross_50_200"],
    ["sma_golden_cross_50_200", "sma_dead_cross_50_200", "sma_golden_cross_recent_50_200"],
    ["sma_golden_cross_50_200"]
  ],
  "sellOption": [
    ["sto_trend_reversal_recent", "pvt_divergence_recent"],
    ["sto_buy_golden_cross_recent", "pvt_divergence", "pvt_divergence_recent"]
  ]
}
    */
  };

  const handleClickCreationButton = async () => {
    if (!corp || !startDate || !endDate) {
      alert("모든 필드를 입력해주세요."); // 입력되지 않은 값이 있음을 알림
      return;
    }

    const data = {
      startDate: startDate,
      endDate: endDate,
      name: corp,
    };

    const response = await createSimulation(data);

    if (response) {
      // 성공적으로 레코드가 생성되었을 때 모든 필드를 초기화
      setCorp(null);
      setStartDate(null);
      setEndDate(null);
      setSelectedCorp(null);
      setFilteredCorps([]);
      setCorpDropdownVisible(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerheight <= 1200) {
        setIsOpen(false);
        setToggleDisabled(true); // 너비가 1200 이하일 때 버튼 숨기기
      } else {
        setToggleDisabled(false); // 너비가 1200 초과일 때 버튼 보이기
      }
    };
    // 초기 확인
    handleResize();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 클린업 함수로 리사이즈 이벤트 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <S.SimulationCreationLayout isOpen={isOpen}>
        <S.SimulationCreationContainer>
          <S.RowContainer>
            <S.ItemContainer>
              <S.ItemHeading>종목</S.ItemHeading>
              <S.ItemPickerContainer>
                <S.TradeOptionCellSelectionContainer>
                  <S.SelectionButton
                    onClick={() => setCorpDropdownVisible(!corpDropdownVisible)}
                  >
                    <span style={{ flexGrow: 1 }}>
                      {!selectedCorp ? "기업 선택" : selectedCorp.회사명}
                    </span>
                    <IoCaretDown style={{ flexShrink: 0 }} />
                  </S.SelectionButton>
                  {corpDropdownVisible && (
                    <S.TradeOptionSearchContainer>
                      <S.TradeOptionSearchInput
                        value={corp}
                        onChange={handleCorpChange}
                        placeholder="회사명/종목코드"
                      />
                      {filteredCorps.length > 0 && (
                        <S.TradeOptionSearchList>
                          {filteredCorps.map((corp) => (
                            <S.TradeOptionSearchListItem
                              key={corp.종목코드}
                              onClick={() => handleCorpItemClick(corp)}
                            >
                              {corp.회사명}
                            </S.TradeOptionSearchListItem>
                          ))}
                        </S.TradeOptionSearchList>
                      )}
                    </S.TradeOptionSearchContainer>
                  )}
                </S.TradeOptionCellSelectionContainer>
              </S.ItemPickerContainer>
            </S.ItemContainer>
            <S.ItemContainer>
              <S.ItemHeading>날짜</S.ItemHeading>
              <S.ItemPickerContainer>
                <CustomDatePicker
                  selectedDate={startDate}
                  onChange={handleStartDateChange}
                />
                <div style={{ margin: "0.5rem" }}>-</div>
                <CustomDatePicker
                  selectedDate={endDate}
                  onChange={handleEndDateChange}
                />
              </S.ItemPickerContainer>
            </S.ItemContainer>
          </S.RowContainer>
          <S.RowContainer>
            <S.TradeOptionsContainer>
              <S.TradeOptionsHeader>매수 조건</S.TradeOptionsHeader>
              {buyOptionRows.map((row, index) => (
                <S.TradeOptionRow key={index}>
                  <S.TradeOptionCellAddButton>
                    <IoAddOutline color="gray" />
                  </S.TradeOptionCellAddButton>
                </S.TradeOptionRow>
              ))}
              <S.TradeOptionRowAddButton
                onClick={handleClickBuyOptionRowAddButton}
              >
                <IoAddOutline color="gray" />
              </S.TradeOptionRowAddButton>
            </S.TradeOptionsContainer>
          </S.RowContainer>
          <S.RowContainer>
            <S.TradeOptionsContainer>
              <S.TradeOptionsHeader>매도 조건</S.TradeOptionsHeader>
              {sellOptionRows.map((row, index) => (
                <S.TradeOptionRow key={index}>
                  <S.TradeOptionCellSelectionContainer>
                    <S.SelectionButton
                      onClick={() =>
                        setCorpDropdownVisible(!corpDropdownVisible)
                      }
                    >
                      <span style={{ flexGrow: 1 }}>
                        {!selectedCorp ? "기업 선택" : selectedCorp.회사명}
                      </span>
                      <IoCaretDown style={{ flexShrink: 0 }} />
                    </S.SelectionButton>
                    {corpDropdownVisible && (
                      <S.TradeOptionSearchContainer>
                        <S.TradeOptionSearchInput
                          value={corp}
                          onChange={handleCorpChange}
                          placeholder="회사명/종목코드"
                        />
                        {filteredCorps.length > 0 && (
                          <S.TradeOptionSearchList>
                            {filteredCorps.map((corp) => (
                              <S.TradeOptionSearchListItem
                                key={corp.종목코드}
                                onClick={() => handleCorpItemClick(corp)}
                              >
                                {corp.회사명}
                              </S.TradeOptionSearchListItem>
                            ))}
                          </S.TradeOptionSearchList>
                        )}
                      </S.TradeOptionSearchContainer>
                    )}
                  </S.TradeOptionCellSelectionContainer>
                  <S.TradeOptionCellAddButton>
                    <IoAddOutline color="gray" />
                  </S.TradeOptionCellAddButton>
                  <S.CloseButton
                    onClick={() => handleClickCloseRowButton(index, "sell")}
                  >
                    <IoCloseOutline />
                  </S.CloseButton>
                </S.TradeOptionRow>
              ))}
              <S.TradeOptionRowAddButton
                onClick={handleClickSellOptionRowAddButton}
              >
                <IoAddOutline color="gray" />
              </S.TradeOptionRowAddButton>
            </S.TradeOptionsContainer>
          </S.RowContainer>
          <S.RowContainer>
            <S.ItemContainer>
              <S.CreationButton onClick={handleClickCreationButton}>
                생성하기
              </S.CreationButton>
            </S.ItemContainer>
          </S.RowContainer>
        </S.SimulationCreationContainer>
      </S.SimulationCreationLayout>
      {!toggleDisabled && ( // toggleDisabled가 false일 때만 버튼 렌더링
        <Sidebar.ToggleButton onClick={toggleSidebar}>
          {isOpen ? <IoChevronUp /> : <IoChevronDown />}
        </Sidebar.ToggleButton>
      )}
    </>
  );
}
