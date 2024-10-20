import React, { useState } from "react";
import kospiCorpData from "../../assets/corps/KOSPI_list.json";
import { chosungIncludes } from "es-hangul";
import * as R from "../../styles/record-filter.style";
import { IoCaretDown } from "react-icons/io5";
import CustomSelect from "../CustomSelect";
import CustomDatePicker from "../CustomDatePicker";

function RecordFilter() {
  const [corp, setCorp] = useState(""); // 선택된 회사명으로, 필터 시 사용
  const [selectedCorp, setSelectedCorp] = useState(null); // 선택된 회사-회사번호 객체
  const [filteredCorps, setFilteredCorps] = useState([]); // 검색 결과
  const [tradeType, setTradeType] = useState("전체");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [corpDropdownVisible, setCorpDropdownVisible] = useState(false);

  const tradeTypeOptions = [
    { value: "전체", label: "전체" },
    { value: "매수", label: "매수" },
    { value: "매도", label: "매도" },
  ];

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
    setCorp(`${corp.회사명} (${corp.종목코드})`);
    setFilteredCorps([]);
    setCorpDropdownVisible(!corpDropdownVisible);
  };

  const handleDateChange = (months) => {
    const newDate = new Date();
    newDate.setMonth(newDate.getMonth() - months);
    setStartDate(newDate);
  };

  const handleTradeTypeChange = (option) => {
    setTradeType(option.value); // 선택된 옵션의 값으로 tradeType 설정
  };

  // 시작 날짜를 변경하는 함수
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  // 종료 날짜를 변경하는 함수
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleClickSearchButton = async () => {
    //
  };

  return (
    <R.RecordFilterContainer>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>회사명</div>
          <R.SelectionButton
            onClick={() => setCorpDropdownVisible(!corpDropdownVisible)}
          >
            <span>{!selectedCorp ? "기업 선택" : selectedCorp.회사명}</span>
            <IoCaretDown />
          </R.SelectionButton>
          {corpDropdownVisible && (
            <R.CorpSearchContainer>
              <R.CorpSearchInput
                value={corp}
                onChange={handleCorpChange}
                placeholder="회사명/종목코드"
              />
              {filteredCorps.length > 0 && (
                <R.CorpSearchList>
                  {filteredCorps.map((corp) => (
                    <R.CorpSearchListItem
                      key={corp.종목코드}
                      onClick={() => handleCorpItemClick(corp)}
                    >
                      {corp.회사명} ({corp.종목코드})
                    </R.CorpSearchListItem>
                  ))}
                </R.CorpSearchList>
              )}
            </R.CorpSearchContainer>
          )}
        </div>
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "20px" }}
        >
          <div>매매 유형</div>
          <CustomSelect
            options={tradeTypeOptions}
            onChange={handleTradeTypeChange}
            placeholder="Select an option"
          />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => handleDateChange(1)}>1개월</button>
        <button onClick={() => handleDateChange(3)}>3개월</button>
        <button onClick={() => handleDateChange(6)}>6개월</button>
        <button onClick={() => handleDateChange(12)}>1년</button>
      </div>
      <div>
        <CustomDatePicker
          label="시작일"
          selectedDate={startDate}
          onChange={handleStartDateChange}
        />
        <CustomDatePicker
          label="종료일"
          selectedDate={endDate}
          onChange={handleEndDateChange}
        />
      </div>
    </R.RecordFilterContainer>
  );
}

export default RecordFilter;
