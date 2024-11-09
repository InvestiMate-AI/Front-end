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

  const handleClickApplyButton = async () => {
    console.log(1);
  };

  return (
    <R.RecordFilterLayout>
      <h3
        style={{
          alignSelf: "flex-start",
          margin: "1rem 0 0 0",
        }}
      >
        기록 검색
      </h3>
      <div style={{ marginBottom: "4rem" }}>
        <R.FilterItemContainer>
          <R.FilterItemHeading>회사명</R.FilterItemHeading>
          <R.CorpSelectionContainer>
            <R.SelectionButton
              onClick={() => setCorpDropdownVisible(!corpDropdownVisible)}
            >
              <span style={{ flexGrow: 1 }}>
                {!selectedCorp ? "기업 선택" : selectedCorp.회사명}
              </span>
              <IoCaretDown style={{ flexShrink: 0 }} />
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
          </R.CorpSelectionContainer>
        </R.FilterItemContainer>
        <R.FilterItemContainer>
          <R.FilterItemHeading>매매 유형</R.FilterItemHeading>
          <CustomSelect
            options={tradeTypeOptions}
            onChange={handleTradeTypeChange}
            placeholder={tradeType}
          />
        </R.FilterItemContainer>
        <R.FilterItemContainer>
          <R.FilterItemHeading>기간</R.FilterItemHeading>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              margin: "0 0 0.5rem 0.5rem",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            시작일
          </div>
          <CustomDatePicker
            label="시작일"
            selectedDate={startDate}
            onChange={handleStartDateChange}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              margin: "0.5rem 0 0.5rem 0.5rem",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            종료일
          </div>
          <CustomDatePicker
            label="종료일"
            selectedDate={endDate}
            onChange={handleEndDateChange}
          />
        </R.FilterItemContainer>
      </div>
      <R.FilterButton onClick={handleClickApplyButton}>검색</R.FilterButton>
    </R.RecordFilterLayout>
  );
}

export default RecordFilter;
