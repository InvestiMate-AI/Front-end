import React, { useState } from "react";
import kospiCorpData from "../../assets/corps/KOSPI_list.json";
import { chosungIncludes } from "es-hangul";
import * as R from "../../styles/report-selection.style";

import { createThread } from "../../apis/chat";
import { IoCaretDown } from "react-icons/io5";

const CreateChat = ({ addChatToChatList }) => {
  const [corp, setCorp] = useState("");
  const [reportType, setReportType] = useState("사업보고서");
  const [year, setYear] = useState("2023");
  const [filteredCorps, setFilteredCorps] = useState([]);
  const [selectedCorp, setSelectedCorp] = useState(null);
  const [corpDropdownVisible, setCorpDropdownVisible] = useState(false);
  const [reportDropdownVisible, setReportDropdownVisible] = useState(false);
  const [yearDropdownVisible, setYearDropdownVisible] = useState(false);

  const reportTypes = {
    11011: "사업보고서",
    11012: "반기보고서",
    11013: "1분기보고서",
    11014: "3분기보고서",
  };

  const years = ["2024", "2023", "2022"];

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

  const handleReportItemClick = (reportType) => {
    setReportType(reportType);
    setReportDropdownVisible(!reportDropdownVisible);
  };

  const handleYearItemClick = (year) => {
    setYear(year);
    setYearDropdownVisible(!yearDropdownVisible);
  };

  const handleClickCreateButton = async () => {
    if (!selectedCorp || !reportType || !year) {
      alert("모든 값을 입력해주세요.");
      return;
    }

    const res = await createThread(year, selectedCorp.회사명, reportType);
    console.log(`create thread: ${res}`);
  };

  return (
    <R.CreateChatLayout>
      <R.CreateChatContainer>
        <R.Heading>새 채팅 만들기</R.Heading>
        <R.SelectionContainer>
          <R.SelectionName>기업 선택</R.SelectionName>
          <R.SelectionButton
            onClick={() => setCorpDropdownVisible(!corpDropdownVisible)}
          >
            <span>
              {!selectedCorp ? "기업을 선택하세요" : selectedCorp.회사명}
            </span>
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
        </R.SelectionContainer>
        <R.SelectionTypeContainer>
          <R.SelectionContainer>
            <R.SelectionName>보고서 유형</R.SelectionName>
            <R.SelectionButton
              onClick={() => setReportDropdownVisible(!reportDropdownVisible)}
            >
              <span>{reportType}</span>
              <IoCaretDown />
            </R.SelectionButton>
            {reportDropdownVisible && (
              <R.OtherList>
                {Object.entries(reportTypes).map(([code, name]) => (
                  <R.OtherListItem
                    key={code}
                    value={name}
                    onClick={() => handleReportItemClick(name)}
                  >
                    {name}
                  </R.OtherListItem>
                ))}
              </R.OtherList>
            )}
          </R.SelectionContainer>
          <R.SelectionContainer>
            <R.SelectionName>사업 연도</R.SelectionName>
            <R.SelectionButton
              onClick={() => setYearDropdownVisible(!yearDropdownVisible)}
            >
              <span>{year}</span>
              <IoCaretDown />
            </R.SelectionButton>
            {yearDropdownVisible && (
              <R.OtherList>
                {years.map((y) => (
                  <R.OtherListItem
                    value={y}
                    onClick={() => handleYearItemClick(y)}
                  >
                    {y}
                  </R.OtherListItem>
                ))}
              </R.OtherList>
            )}
          </R.SelectionContainer>
        </R.SelectionTypeContainer>
        <R.createChatButton onClick={handleClickCreateButton}>
          생성하기
        </R.createChatButton>
      </R.CreateChatContainer>
    </R.CreateChatLayout>
  );
};

export default CreateChat;
