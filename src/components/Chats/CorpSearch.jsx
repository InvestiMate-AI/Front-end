import React, { useState } from "react";
import styled from "styled-components";
import kospiData from "../../assets/corps/KOSPI_list.json";
import { hangulIncludes } from "es-hangul";

const DropdownContainer = styled.div`
  position: relative;
  width: 300px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  const [filteredCorps, setFilteredCorps] = useState([]);

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

  return (
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
  );
};

export default CorpSearch;
