import React, { useState } from "react";
import styled from "styled-components";
import kospiData from "../../assets/corps/KOSPI_list.json";
import { hangulIncludes } from "es-hangul";

const DropdownContainer = styled.div`
  position: relative;
  width: 300px;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

const DropdownListItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const CorpSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [reportType, setReportType] = useState("");
  const [year, setYear] = useState("");
  const [filteredCorps, setFilteredCorps] = useState([]);

  const reportTypes = {
    11011: "사업보고서",
    11012: "반기보고서",
    11013: "1분기보고서",
    11014: "3분기보고서",
  };

  const years = ["24", "23", "22"];

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      let results;
      if (isNaN(value)) {
        // 입력값이 텍스트인 경우 (회사명 검색)
        results = kospiData
          .filter((corp) => hangulIncludes(corp.회사명, value))
          .slice(0, 10);
      } else {
        // 입력값이 숫자인 경우 (종목코드 검색)
        results = kospiData
          .filter((corp) => corp.종목코드.toString().includes(value))
          .slice(0, 10);
      }
      setFilteredCorps(results);
    } else {
      setFilteredCorps([]);
    }
  };

  const handleItemClick = (corp) => {
    setInputValue(`${corp.회사명} (${corp.종목코드})`);
    setFilteredCorps([]);
  };

  const handleReportTypeChange = (event) => {
    setReportType(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div>
      <DropdownContainer>
        <StyledInput
          value={inputValue}
          onChange={handleChange}
          placeholder="회사명 또는 종목코드를 입력하세요"
        />
        {filteredCorps.length > 0 && (
          <DropdownList>
            {filteredCorps.map((corp) => (
              <DropdownListItem
                key={corp.종목코드}
                onClick={() => handleItemClick(corp)}
              >
                {corp.회사명} ({corp.종목코드})
              </DropdownListItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
      <DropdownContainer>
        <select value={reportType} onChange={handleReportTypeChange}>
          <option value="" disabled>
            보고서 형식을 선택하세요
          </option>
          {Object.entries(reportTypes).map(([code, type]) => (
            <option key={code} value={code}>
              {type}
            </option>
          ))}
        </select>
      </DropdownContainer>
      <DropdownContainer>
        <select value={year} onChange={handleYearChange}>
          <option value="" disabled>
            연도를 선택하세요
          </option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </DropdownContainer>
    </div>
  );
};

export default CorpSearch;
